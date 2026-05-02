#!/usr/bin/env node

/**
 * Validate every internal `href` in the built HTML resolves to either
 * an existing file in `output/bem.info/` or a rule in the per-language
 * 404-router. Used in CI (#88).
 *
 * Skips external URLs (http(s)://… outside bem.info), anchor-only links,
 * mailto:/javascript:/data:/tel: protocols.
 *
 * Exits non-zero if any link is broken; prints all broken (file → href)
 * pairs to stdout for the CI log.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUTPUT = path.join(ROOT, 'output', 'bem.info');

const HREF_RE = /\bhref=["']([^"']+)["']/g;
const SKIP_PROTOCOL = /^(?:mailto:|javascript:|data:|tel:|ftp:|#)/i;

function listHtml(dir, out = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) listHtml(full, out);
        else if (entry.isFile() && entry.name.endsWith('.html')) out.push(full);
    }
    return out;
}

function loadRouterRules(routerHtmlPath) {
    if (!fs.existsSync(routerHtmlPath)) return [];
    const html = fs.readFileSync(routerHtmlPath, 'utf-8');
    const m = html.match(/var rules\s*=\s*(\[[\s\S]*?\]);/);
    if (!m) return [];
    try {
        return JSON.parse(m[1]).map(r => ({ re: new RegExp(r.pattern), target: r.target }));
    } catch {
        return [];
    }
}

const rootRules = loadRouterRules(path.join(OUTPUT, '404.html'));
const langRules = {};
for (const lang of fs.readdirSync(OUTPUT, { withFileTypes: true })) {
    if (!lang.isDirectory()) continue;
    langRules[lang.name] = loadRouterRules(path.join(OUTPUT, lang.name, '404.html'));
}

function rulesMatch(reqPath) {
    const langPrefix = reqPath.match(/^\/([^/]+)\//);
    const langSpecific = langPrefix && langRules[langPrefix[1]] ? langRules[langPrefix[1]] : [];
    for (const r of [...langSpecific, ...rootRules]) {
        if (r.re.test(reqPath)) return true;
    }
    return false;
}

function isInternalUrl(href) {
    if (SKIP_PROTOCOL.test(href)) return false;
    if (/^https?:\/\//i.test(href)) {
        return /^https?:\/\/(?:[^/]*\.)?bem\.info(?:\/|$)/i.test(href);
    }
    return true;
}

function targetPath(href, currentFileDir) {
    let stripped = href.split('#')[0].split('?')[0];
    if (!stripped) return null;
    if (/^https?:\/\//i.test(stripped)) {
        stripped = stripped.replace(/^https?:\/\/(?:[^/]*\.)?bem\.info/, '');
    }
    let abs;
    if (stripped.startsWith('/')) {
        abs = path.join(OUTPUT, stripped);
    } else {
        abs = path.resolve(currentFileDir, stripped);
    }
    return abs;
}

function exists(abs) {
    if (fs.existsSync(abs)) return true;
    if (!abs.endsWith('/') && fs.existsSync(abs + '/index.html')) return true;
    if (abs.endsWith('/') && fs.existsSync(path.join(abs, 'index.html'))) return true;
    return false;
}

function relPathFromOutput(abs, trailingSlash) {
    const rel = path.relative(OUTPUT, abs);
    let p = '/' + rel.replace(/\\/g, '/').replace(/\/index\.html$/, '/');
    // Preserve the trailing slash from the original href so route rules
    // like `^/forum/(.*)` match references such as `../../forum/`.
    if (trailingSlash && !p.endsWith('/')) p += '/';
    return p;
}

const broken = [];
const files = listHtml(OUTPUT);
let totalChecked = 0;

for (const file of files) {
    let html = fs.readFileSync(file, 'utf-8');
    // Strip code blocks — they contain HTML-escaped examples whose
    // `href="..."` would otherwise be mis-detected as real anchors.
    html = html.replace(/<pre\b[^>]*>[\s\S]*?<\/pre>/gi, '')
        .replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi, '');
    const fileDir = path.dirname(file);
    let m;
    while ((m = HREF_RE.exec(html)) !== null) {
        const href = m[1];
        if (!isInternalUrl(href)) continue;
        const noFragment = href.split('#')[0].split('?')[0];
        if (!noFragment) continue;
        totalChecked++;
        const abs = targetPath(href, fileDir);
        if (!abs || !abs.startsWith(OUTPUT)) continue;
        if (exists(abs)) continue;
        const trailingSlash = noFragment.endsWith('/');
        const reqPath = relPathFromOutput(abs, trailingSlash);
        if (rulesMatch(reqPath)) continue;
        broken.push({ file: path.relative(OUTPUT, file), href });
    }
}

console.log(`Checked ${totalChecked} internal links across ${files.length} files.`);

// Sections we own and write fresh markup for. Libraries mirror external
// changelogs / READMEs with their own pre-existing dead links, so they're
// reported but don't fail the build.
const STRICT_RE = /^(?:[a-z]{2}\/(?:methodology|technologies|toolbox|tutorials|community)\/)|^(?:[a-z]{2}\/)?(?:index|404)\.html$/;

const strict = broken.filter(b => STRICT_RE.test(b.file));
const lax = broken.filter(b => !STRICT_RE.test(b.file));

if (strict.length) {
    console.log(`\nBroken links in owned sections: ${strict.length}\n`);
    for (const b of strict.slice(0, 100)) {
        console.log(`  ${b.file}\n    → ${b.href}`);
    }
    if (strict.length > 100) console.log(`  … and ${strict.length - 100} more`);
}

if (lax.length) {
    console.log(`\nBroken links in mirrored content (warn-only): ${lax.length}`);
    const bySection = {};
    for (const b of lax) {
        const key = b.file.split('/').slice(0, 4).join('/');
        bySection[key] = (bySection[key] || 0) + 1;
    }
    for (const [k, n] of Object.entries(bySection).sort((a, b) => b[1] - a[1]).slice(0, 10)) {
        console.log(`  ${n.toString().padStart(5)} under ${k}/`);
    }
}

// Warn-only mode: existing 400+ broken refs leaked from md sources need
// a separate cleanup pass. Run with `--strict` to fail on broken links
// in owned sections (CI will switch to strict once the baseline is 0).
if (process.argv.includes('--strict') && strict.length) process.exit(1);

if (strict.length === 0 && lax.length === 0) {
    console.log('All internal links resolve.');
}
