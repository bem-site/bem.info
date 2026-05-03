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
import { stopwords as stopwordsEn } from '@orama/stopwords/english';
import { stopwords as stopwordsRu } from '@orama/stopwords/russian';

const TOKENIZER_LANG = { en: 'english', ru: 'russian' };
const STEMMERS = { en: stemmerEn, ru: stemmerRu };
const STOPWORDS = { en: stopwordsEn, ru: stopwordsRu };

// Default Russian splitter `[^a-z0-9а-яё]+` strips hyphens and underscores,
// turning "i-bem" into ["i", "bem"] — and the bare "bem" then prefix-matches
// every "bem*" word in the index, completely killing rank quality. The
// English splitter already preserves "-" / "_" / "'", so we replicate that
// behaviour for both languages with a unified custom splitter.
const COMPOUND_SPLITTER = /[^a-z0-9а-яё_'-]+/gi;

// Build a tokenizer object compatible with @orama/orama internals. Mirrors
// the shape of the one createTokenizer() returns; we substitute our split
// rule but keep stopwords + stemmer wired the same way.
export function buildTokenizer({ lang }) {
    const tk = {
        language: TOKENIZER_LANG[lang],
        stemmer: STEMMERS[lang],
        stopWords: STOPWORDS[lang],
        stemmerSkipProperties: new Set(),
        tokenizeSkipProperties: new Set(['url']),
        allowDuplicates: false,
        normalizationCache: new Map()
    };
    tk.normalizeToken = function(prop, token, withCache = true) {
        const key = `${this.language}:${prop}:${token}`;
        if (withCache && this.normalizationCache.has(key)) return this.normalizationCache.get(key);
        if (this.stopWords?.includes(token)) {
            if (withCache) this.normalizationCache.set(key, '');
            return '';
        }
        if (this.stemmer && !this.stemmerSkipProperties.has(prop)) token = this.stemmer(token);
        if (withCache) this.normalizationCache.set(key, token);
        return token;
    }.bind(tk);
    tk.tokenize = function(input, _language, prop, withCache = true) {
        if (typeof input !== 'string') return [input];
        if (prop && this.tokenizeSkipProperties.has(prop)) {
            const n = this.normalizeToken(prop ?? '', input, withCache);
            return n ? [n] : [];
        }
        const tokens = input.toLowerCase()
            .split(COMPOUND_SPLITTER)
            .map(t => this.normalizeToken(prop ?? '', t, withCache))
            .filter(Boolean);
        return this.allowDuplicates ? tokens : [...new Set(tokens)];
    }.bind(tk);
    return tk;
}

// Cap body length per record. Most articles fit, longer ones get the head —
// where the most relevant terms (intro, headings) sit. 2500 vs 4000 cuts the
// gzipped index roughly in half with a marginal recall hit.
const BODY_MAX_CHARS = 2500;

// Stripped to the minimum the runtime actually uses. `site` and `tags` were
// indexed by the previous version but never queried or filtered against;
// removing them shrinks both the index payload and the per-document store.
//
// `breadcrumbs` is for display (parent context shown above the title) but
// also kept searchable, so a query like "library button" can match the
// catalog path. `keywords` carries hand-curated cross-language synonyms,
// e.g. so "mod" / "modifier" find «Модификация блока» on /ru/.
export const SEARCH_SCHEMA = {
    url: 'string',
    title: 'string',
    subtitle: 'string',
    breadcrumbs: 'string[]',
    keywords: 'string[]',
    body: 'string'
};

// Hand-curated cross-language glossary so users can find pages by the
// abbreviation or by the term in the other language. Each entry is a
// case-insensitive substring matched against title + body; on hit, every
// alt is added to the page's `keywords` field. Stems (not full forms) so
// они ловят русские склонения.
// Hand-curated per-URL keyword aliases. Maps `page.url` (no language
// prefix) to a list of cross-language synonyms that should also resolve
// to that page. Far more accurate than expanding from body text — every
// alias is bound to a single page, so IDF stays high and the relevant
// page wins the ranking for short / cross-language queries
// ("mod" → /methodology/block-modification/, etc.).
const PAGE_KEYWORDS = {
    // Methodology (article pages — usually have content already, but the
    // keywords act as a precise cross-language anchor for query → page)
    '/methodology/':                     ['methodology', 'методология'],
    '/methodology/quick-start/':         ['quick start', 'quickstart', 'tutorial', 'быстрый старт'],
    '/methodology/key-concepts/':        ['block', 'element', 'modifier', 'mix', 'concepts',
                                          'блок', 'элемент', 'модификатор', 'микс', 'основные понятия'],
    '/methodology/naming-convention/':   ['naming', 'css-naming', 'class name', 'modifier',
                                          'именование', 'соглашение', 'имена', 'модификатор'],
    '/methodology/css/':                 ['css', 'styles', 'стили'],
    '/methodology/html/':                ['html', 'markup', 'разметка'],
    '/methodology/js/':                  ['javascript', 'js', 'скрипты'],
    '/methodology/filestructure/':       ['file structure', 'directory', 'файловая структура'],
    '/methodology/redefinition-levels/': ['redefinition', 'level', 'override', 'уровни', 'переопределение'],
    '/methodology/block-modification/':  ['modifier', 'modification', 'modify', 'modifying',
                                          'модификатор', 'модификация', 'mod'],
    '/methodology/build/':               ['build', 'compile', 'сборка'],
    '/methodology/declarations/':        ['declaration', 'decl', 'deps', 'декларация'],
    '/methodology/solved-problems/':     ['problems', 'solved', 'goals', 'проблемы'],
    '/methodology/history/':             ['history', 'origin', 'история'],
    '/methodology/faq/':                 ['faq', 'questions', 'вопросы'],
    '/methodology/articles/':            ['articles', 'статьи'],

    // Section landings
    '/technologies/':                    ['technologies', 'tech', 'stack', 'технологии'],
    '/libraries/':                       ['libraries', 'library', 'lib', 'библиотеки'],
    '/toolbox/':                         ['toolbox', 'tools', 'tool', 'инструменты'],
    '/tutorials/':                       ['tutorials', 'tutorial', 'руководства'],
    '/community/':                       ['community', 'сообщество'],

    // Technologies — these are key navigation pages without their own
    // content; without explicit keywords they would be invisible to search.
    // The custom tokenizer (buildTokenizer) preserves '-' inside tokens
    // so "bem-react" / "i-bem" are single tokens — no bare "bem" pollution.
    '/technologies/classic/':            ['classic stack', 'классический стек'],
    '/technologies/classic/bemjson/':    ['bemjson', 'данные', 'data'],
    '/technologies/classic/bem-xjst/':   ['bem-xjst', 'bemhtml', 'bemtree', 'templates', 'шаблоны'],
    '/technologies/classic/i-bem/':      ['i-bem', 'i-bem.js', 'ibem',
                                          'client javascript',
                                          'клиентский javascript', 'клиентский js'],
    '/technologies/classic/deps/':       ['deps', 'dependencies', 'зависимости'],
    '/technologies/classic/deps-spec/':  ['deps-spec', 'deps specification', 'спецификация deps'],
    '/technologies/classic/project-stub/': ['project-stub', 'project starter', 'заготовка проекта'],
    '/technologies/bem-react/':          ['bem-react', 'react', 'реакт'],
    '/technologies/bem-react/motivation/': ['motivation', 'why react', 'мотивация'],
    '/technologies/bem-react/classname/': ['classname', 'class-name'],
    '/technologies/bem-react/core/':     ['bem-react-core', 'core'],
    '/technologies/bem-react/di/':       ['di', 'dependency injection', 'внедрение зависимостей'],

    // Toolbox tools — short titles ("ENB", "bemhint", "SDK") need keyword
    // hints so cross-language and longform queries find them.
    '/toolbox/enb/':                     ['enb', 'build tool', 'сборщик'],
    '/toolbox/bemhint/':                 ['bemhint', 'lint', 'linter', 'линтер'],
    '/toolbox/bem-tools/':               ['bem-tools', 'cli'],
    '/toolbox/bemmet/':                  ['bemmet', 'emmet', 'shorthand'],
    '/toolbox/sdk/':                     ['sdk', 'developer kit'],

    // Library landings (without version) — top-level entry to each lib's
    // history of versions.
    '/libraries/classic/':               ['classic libraries', 'классические библиотеки'],
    '/libraries/classic/bem-core/':      ['bem-core', 'core'],
    '/libraries/classic/bem-components/': ['bem-components', 'components', 'компоненты'],
    '/libraries/classic/bem-history/':   ['bem-history', 'router', 'history'],
    '/libraries/classic/principles/':    ['principles', 'принципы'],

    // Tutorials section landings
    '/tutorials/classic/':               ['classic tutorials', 'классические туториалы'],
    '/tutorials/classic/quick-start-static/': ['static page tutorial', 'статическая страница'],
    '/tutorials/classic/start-with-project-stub/': ['project stub tutorial', 'статический проект'],
    '/tutorials/classic/start-with-bem-express/': ['bem express', 'dynamic project', 'динамический проект'],
    '/tutorials/classic/i-bem/':         ['i-bem.js tutorial', 'руководство i-bem.js'],
    '/tutorials/classic/dist-quick-start/': ['dist', 'bem-components dist', 'подключаем блоки']
};

function pageKeywords(url) {
    return PAGE_KEYWORDS[url] || [];
}

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

function hasBlockContent(page) {
    const c = page.block?.content;
    return Boolean(c && (c.ru || c.en || c.uk));
}

function isIndexable(page) {
    if (!page || !page.url) return false;
    if (page.published === false) return false;
    if (page.type === 'redirect') return false;
    // The "Articles" TOC page is a navigational listing whose content is
    // every other article's title concatenated. It scores spuriously high
    // for any common query and crowds out the actual article. Already
    // reachable via /methodology/.
    if (page.type === 'articles') return false;
    // Only index pages that actually have something to display:
    //  - contentFile present (markdown loaded by gorshochek)
    //  - block.content present (lib-view pipeline wrote the rendered
    //    HTML straight into the model, bypassing gorshochek md→html —
    //    every bem-components / bem-core block gets indexed this way)
    //  - promo landing pages (rendered from a custom cross-roads block)
    //  - explicitly curated in PAGE_KEYWORDS (key navigation pages
    //    like /technologies/classic/i-bem/ have no content of their
    //    own but are the right destination for short queries)
    if (page.contentFile) return true;
    if (hasBlockContent(page)) return true;
    if (page.type === 'promo') return true;
    if (PAGE_KEYWORDS[page.url]) return true;
    return false;
}

// Strip the version segment from a versioned library URL so we can dedup
// across versions only — different platforms keep their own entries (their
// content differs and the breadcrumb context disambiguates them in suggest).
//   /libraries/classic/bem-core/4.2.0/desktop/i-bem-dom/
//      → key: /libraries/classic/bem-core/desktop/i-bem-dom/, ver: '4.2.0'
const VERSIONED_LIB_RE = /^(\/libraries\/[^/]+\/[^/]+\/)(\d[\w.-]*?)(\/.*)?$/;
function splitVersionedUrl(url) {
    const m = VERSIONED_LIB_RE.exec(url || '');
    if (!m) return null;
    const [, libBase, version, rest = '/'] = m;
    return { key: libBase + rest.replace(/^\//, ''), version };
}

function compareSemver(a, b) {
    const pa = a.split(/[.-]/).map(s => /^\d+$/.test(s) ? parseInt(s, 10) : s);
    const pb = b.split(/[.-]/).map(s => /^\d+$/.test(s) ? parseInt(s, 10) : s);
    const n = Math.max(pa.length, pb.length);
    for (let i = 0; i < n; i++) {
        const ai = pa[i], bi = pb[i];
        if (ai === bi) continue;
        if (ai === undefined) return -1;
        if (bi === undefined) return 1;
        if (typeof ai !== typeof bi) return typeof ai === 'number' ? 1 : -1;
        return ai < bi ? -1 : 1;
    }
    return 0;
}

// Replaces every set of versioned library pages with the entry from the
// latest version. The remaining pages are unchanged. Reduces index size
// dramatically for repos like bem-core that ship 10+ versioned snapshots.
function dedupVersioned(pages) {
    const latest = new Map();
    const out = [];
    for (const p of pages) {
        const v = splitVersionedUrl(p.url);
        if (!v) {
            out.push(p);
            continue;
        }
        const prev = latest.get(v.key);
        if (!prev || compareSemver(v.version, prev.version) > 0) {
            latest.set(v.key, { page: p, version: v.version });
        }
    }
    for (const { page } of latest.values()) out.push(page);
    return out;
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
                body = stripHtml(fs.readFileSync(abs, 'utf8'));
            } catch {
                stats.unreadable++;
            }
        } else {
            stats.unreadable++;
        }
    } else {
        // lib-view pipeline (bem-components / bem-core blocks) writes the
        // pre-rendered HTML straight into the model under block.content.
        const inline = pickLang(page.block?.content, lang);
        if (inline) {
            body = stripHtml(inline);
            stats.fromBlockContent++;
        } else {
            stats.noContentFile++;
        }
    }
    if (body.length > BODY_MAX_CHARS) body = body.slice(0, BODY_MAX_CHARS);

    const url = langUrl(page.url, lang);

    // Parent context, without the root and without the page itself —
    // shown as a small caption above the title in suggest.
    const breadcrumbs = Array.isArray(page.breadcrumbs)
        ? page.breadcrumbs
            .slice(1, -1)
            .map(b => typeof b.title === 'string' ? b.title : pickLang(b.title, lang))
            .filter(Boolean)
        : [];

    const keywords = pageKeywords(page.url);

    return { id: url, url, title, subtitle, breadcrumbs, keywords, body };
}

export async function buildSearchIndex({ lang, cacheDir, outputDir }) {
    const dataPath = path.join(cacheDir, 'data.json');
    if (!fs.existsSync(dataPath)) {
        console.warn(`Search: ${dataPath} not found, skipping ${lang}`);
        return;
    }

    const allPages = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const pages = dedupVersioned(allPages);
    const stats = {
        total: allPages.length,
        dedupedOut: allPages.length - pages.length,
        filtered: 0, noTitle: 0, noContentFile: 0, unreadable: 0, fromBlockContent: 0
    };
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
        sort: { enabled: false },
        components: { tokenizer: buildTokenizer({ lang }) }
    });

    await insertMultiple(db, records);

    const json = JSON.stringify(await save(db));
    const outFile = path.join(outputDir, '_search', 'index.json');
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, json);

    const sizeKB = (Buffer.byteLength(json, 'utf8') / 1024).toFixed(1);
    console.log(
        `Search [${lang}]: ${records.length} indexed of ${stats.total} ` +
        `(${withBody} with body, ${stats.fromBlockContent} from block.content; ` +
        `deduped-versions ${stats.dedupedOut}, filtered ${stats.filtered}, ` +
        `no-title ${stats.noTitle}, no-content-file ${stats.noContentFile}, ` +
        `unreadable ${stats.unreadable}) → ${outFile} (${sizeKB} KB)`
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
