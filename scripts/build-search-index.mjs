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
    return Boolean(page.contentFile);
}

function buildRecord(page, lang) {
    let body = '';
    try {
        const html = fs.readFileSync(page.contentFile, 'utf8');
        body = stripHtml(html);
    } catch {
        return null;
    }
    if (!body) return null;
    return {
        id: page.url,
        url: page.url,
        title: pickLang(page.title, lang),
        subtitle: pickLang(page.subtitle, lang),
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
    const records = pages
        .filter(isIndexable)
        .map(p => buildRecord(p, lang))
        .filter(Boolean);

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
    console.log(`Search: indexed ${records.length} ${lang}-pages → ${outFile} (${sizeKB} KB)`);
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
