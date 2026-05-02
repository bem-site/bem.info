/**
 * Build per-language Orama search indexes from the gorshochek model.
 *
 * Reads `<cacheDir>/data.json` produced by `lib/data-builder.cjs`, pulls the
 * pre-rendered HTML from `page.contentFile`, strips tags, and writes the
 * serialized Orama index to `<outputDir>/_search/index.json`.
 *
 * The runtime calls `load()` on a fresh DB created with the correct stemmer,
 * which keeps tokenization symmetric with indexing. We deliberately avoid
 * @orama/plugin-data-persistence — its `restore` builds a stub DB without a
 * tokenizer, so query tokens never match indexed ones.
 */

import fs from 'node:fs';
import path from 'node:path';
import { create, insertMultiple, save } from '@orama/orama';
import { stemmer as stemmerEn } from '@orama/stemmers/english';
import { stemmer as stemmerRu } from '@orama/stemmers/russian';

const TOKENIZER_LANG = { en: 'english', ru: 'russian' };
const STEMMERS = { en: stemmerEn, ru: stemmerRu };

// Cap body length per record so the published index stays reasonably small
// over the wire. 4000 chars covers most articles end-to-end; longer ones get
// the head — usually where the most relevant terms (intro, headings) live.
const BODY_MAX_CHARS = 4000;

export const SEARCH_SCHEMA = {
    url: 'string',
    title: 'string',
    subtitle: 'string',
    site: 'string',
    tags: 'string[]',
    body: 'string'
};

function pickLang(value, lang) {
    if (value == null) return '';
    if (typeof value === 'string') return value;
    return value[lang] ?? '';
}

function stripHtml(html) {
    return html
        .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, ' ')
        .trim();
}

function isIndexable(page) {
    if (!page || !page.url) return false;
    if (page.published === false) return false;
    if (page.type === 'redirect') return false;
    return true;
}

function langUrl(url, lang) {
    // gorshochek's `page.url` is language-agnostic ("/methodology/...");
    // on the live site every page lives under "/<lang>/..." instead, so we
    // must prefix the index with the language so result links navigate to
    // the correct page (and stay within the same language as the viewer).
    if (!url) return url;
    if (url === '/') return `/${lang}/`;
    return url.startsWith('/') ? `/${lang}${url}` : url;
}

function buildRecord(page, lang, stats, cacheDir) {
    const title = pickLang(page.title, lang);
    const subtitle = pickLang(page.subtitle, lang);
    if (!title && !subtitle) {
        stats.noTitle++;
        return null;
    }

    let body = '';
    if (page.contentFile) {
        // gorshochek's contentFile is always inside its cache folder; the
        // value is a leading-slash relative path like "/foo/bar/index.html".
        // Always join with cacheDir — `path.isAbsolute` returns true on Unix
        // for any leading-slash string and would point at the FS root.
        const abs = path.join(cacheDir, page.contentFile);
        // Only HTML output yields useful searchable text. Skip leftover .md
        // or .bemjson.js (when the transform pipeline didn't reach html).
        if (abs.endsWith('.html')) {
            try {
                const text = fs.readFileSync(abs, 'utf8');
                body = stripHtml(text);
                if (body.length > BODY_MAX_CHARS) body = body.slice(0, BODY_MAX_CHARS);
            } catch {
                stats.unreadable++;
            }
        } else {
            stats.unreadable++;
        }
    } else {
        stats.noContentFile++;
    }

    const url = langUrl(page.url, lang);
    return {
        id: url,
        url,
        title,
        subtitle,
        site: page.site || '',
        tags: Array.isArray(page.tags) ? page.tags : [],
        body
    };
}

export async function buildSearchIndex({ lang, cacheDir, outputDir }) {
    const dataPath = path.join(cacheDir, 'data.json');
    if (!fs.existsSync(dataPath)) {
        console.warn(`Search: ${dataPath} not found, skipping ${lang}`);
        return;
    }

    const pages = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const stats = { total: pages.length, filtered: 0, noTitle: 0, noContentFile: 0, unreadable: 0 };
    const indexable = pages.filter(p => {
        const ok = isIndexable(p);
        if (!ok) stats.filtered++;
        return ok;
    });
    const records = indexable
        .map(p => buildRecord(p, lang, stats, cacheDir))
        .filter(Boolean);
    const withBody = records.filter(r => r.body).length;

    const db = create({
        schema: SEARCH_SCHEMA,
        components: {
            tokenizer: { language: TOKENIZER_LANG[lang], stemmer: STEMMERS[lang] }
        }
    });

    await insertMultiple(db, records);

    const json = JSON.stringify(await save(db));
    const outFile = path.join(outputDir, '_search', 'index.json');
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, json);

    const sizeKB = (Buffer.byteLength(json, 'utf8') / 1024).toFixed(1);
    console.log(
        `Search [${lang}]: ${records.length} indexed of ${stats.total} ` +
        `(${withBody} with body; filtered ${stats.filtered}, no-title ${stats.noTitle}, ` +
        `no-content-file ${stats.noContentFile}, unreadable ${stats.unreadable}) → ` +
        `${outFile} (${sizeKB} KB)`
    );
}

export async function buildAllSearchIndexes({ languages, cacheDirs, outputDirs }) {
    for (const lang of languages) {
        await buildSearchIndex({
            lang,
            cacheDir: cacheDirs[lang],
            outputDir: outputDirs[lang]
        });
    }
}
