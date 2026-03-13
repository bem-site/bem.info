#!/usr/bin/env node

/**
 * Main build orchestrator — replaces gulpfile.js.
 *
 * Usage:
 *   node scripts/build.mjs              — full build (data must exist)
 *   node scripts/build.mjs data         — fetch content data only
 *   node scripts/build.mjs compile      — BEM build + HTML only (skip data)
 *   node scripts/build.mjs watch        — build + watch for changes
 */

import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { build as esbuild } from 'esbuild';
import { buildAllBundles, collectFiles, copyCSSAssets, resolveDeps } from './bem-build.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const env = process.env;
const LANGUAGES = env.LANGUAGES ? env.LANGUAGES.split(',') : ['en', 'ru'];
const IS_PROD = env.YENV === 'production';
const SITES = env.SITES ? env.SITES.split(',') : ['methodology', 'technologies', 'toolbox', 'libraries', 'tutorials'];

const CACHE = path.join(ROOT, '.cache');
const STATIC = path.join(ROOT, 'static');
const OUTPUT = path.join(ROOT, 'output');
const OUTPUT_ROOT = path.join(OUTPUT, 'bem.info');
const BUNDLES_DIR = path.join(ROOT, 'bundles');

const cacheDirs = Object.fromEntries(LANGUAGES.map(l => [l, path.join(CACHE, `gorshochek-cache-${l}`)]));
const outputDirs = Object.fromEntries(LANGUAGES.map(l => [l, path.join(OUTPUT_ROOT, l)]));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function runSubProcess(file, options) {
    return new Promise((resolve, reject) => {
        const proc = fork(file, [], options);
        proc.on('error', reject);
        proc.on('close', code => code ? reject(new Error(`Process exited with ${code}`)) : resolve());
    });
}

function copyDir(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
        const s = path.join(src, entry.name);
        const d = path.join(dest, entry.name);
        if (entry.isDirectory()) copyDir(s, d);
        else fs.copyFileSync(s, d);
    }
}

function copyGlob(srcDir, pattern, destDir) {
    fs.mkdirSync(destDir, { recursive: true });
    if (!fs.existsSync(srcDir)) return;

    const re = new RegExp(pattern.replace(/\./g, '\\.').replace(/\*/g, '.*'));
    for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
        if (entry.isFile() && re.test(entry.name)) {
            fs.copyFileSync(path.join(srcDir, entry.name), path.join(destDir, entry.name));
        }
        if (entry.isDirectory() && pattern.includes('*')) {
            // Recurse into subdirectories if pattern has wildcards
            const subDir = path.join(srcDir, entry.name);
            for (const sub of fs.readdirSync(subDir, { withFileTypes: true })) {
                if (sub.isFile() && re.test(sub.name)) {
                    fs.copyFileSync(path.join(subDir, sub.name), path.join(destDir, sub.name));
                }
            }
        }
    }
}

function touch(filePath) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, '');
}

/** Copy a file, converting .svgd (raw-deflated SVG) to .svg */
function copyFileDeflate(src, destDir) {
    if (path.extname(src) === '.svgd') {
        const svg = zlib.inflateRawSync(fs.readFileSync(src));
        const dest = path.join(destDir, path.basename(src, '.svgd') + '.svg');
        fs.writeFileSync(dest, svg);
    } else {
        fs.copyFileSync(src, path.join(destDir, path.basename(src)));
    }
}

// ---------------------------------------------------------------------------
// Data building
// ---------------------------------------------------------------------------

async function buildData() {
    console.log('Building data...');
    fs.rmSync(CACHE, { recursive: true, force: true });
    fs.mkdirSync(CACHE, { recursive: true });

    const modelPath = env.PATH_TO_MODEL || path.join(ROOT, 'content', 'model.cjs');

    // We need to use createRequire since model.js is CommonJS
    const { createRequire } = await import('node:module');
    const require_ = createRequire(path.join(ROOT, 'package.json'));

    // Clear require cache for model so it's reloaded fresh
    delete require_.cache?.[require_.resolve?.(modelPath)];
    const model = require_(modelPath);
    const redirects = require_(path.join(ROOT, 'content', 'redirects', 'index.cjs'));
    const prepareModel = require_(path.join(ROOT, 'lib', 'prepare-model.cjs'));

    await Promise.all(LANGUAGES.map(lang => {
        const modelWithRedirects = model.concat(redirects);
        const prepared = prepareModel(modelWithRedirects, lang);
        const jsonPath = path.join(CACHE, `model.${lang}.json`);
        fs.writeFileSync(jsonPath, JSON.stringify(prepared.model, null, 2));

        return runSubProcess(path.join(ROOT, 'lib', 'data-builder.cjs'), {
            cwd: ROOT,
            encoding: 'utf-8',
            env: {
                ...process.env,
                GORSHOCHEK_CACHE_FOLDER: cacheDirs[lang],
                modelPath: jsonPath,
                host: `https://${lang}.bem.info`,
                dest: cacheDirs[lang],
                root: '/bem.info/' + lang,
                token: env.TOKEN,
                DEBUG: env.DEBUG,
                githubHosts: env.GITHUB_HOSTS
            }
        });
    }));

    touch(path.join(CACHE, '.inited'));
    console.log('Data build complete.');
}

// ---------------------------------------------------------------------------
// BEM build (templates, CSS, JS)
// ---------------------------------------------------------------------------

async function buildClientJS() {
    console.log('Building client JS with Vite...');
    const { build: viteBuild } = await import('vite');
    await viteBuild({
        configFile: path.join(__dirname, 'vite-client.config.mjs'),
        logLevel: 'warn',
    });
}

async function bemBuild() {
    console.log('Running BEM build...');
    await buildClientJS();
    await buildAllBundles(LANGUAGES, ROOT);
}

// ---------------------------------------------------------------------------
// Minification (esbuild)
// ---------------------------------------------------------------------------

async function minifyBundles() {
    console.log('Minifying bundles...');
    const bundles = fs.readdirSync(BUNDLES_DIR);
    const tasks = [];

    for (const bundle of bundles) {
        const bundleDir = path.join(BUNDLES_DIR, bundle);

        // Minify CSS
        const cssFile = path.join(bundleDir, `${bundle}.css`);
        if (fs.existsSync(cssFile)) {
            tasks.push(esbuild({
                entryPoints: [cssFile],
                outfile: path.join(bundleDir, `${bundle}.min.css`),
                minify: IS_PROD,
                bundle: false,
                allowOverwrite: true,
                loader: { '.css': 'css' },
                logLevel: 'warning'
            }));
        }

        // Minify JS per language
        for (const lang of LANGUAGES) {
            const jsFile = path.join(bundleDir, `${bundle}.${lang}.js`);
            if (fs.existsSync(jsFile)) {
                tasks.push(esbuild({
                    entryPoints: [jsFile],
                    outfile: path.join(bundleDir, `${bundle}.${lang}.min.js`),
                    minify: IS_PROD,
                    bundle: false,
                    allowOverwrite: true,
                    logLevel: 'warning'
                }));
            }
        }
    }

    await Promise.all(tasks);
    console.log('Minification complete.');
}

// ---------------------------------------------------------------------------
// Prepare output directories
// ---------------------------------------------------------------------------

function prepareOutput() {
    fs.rmSync(OUTPUT, { recursive: true, force: true });
    const cachedOutput = path.join(CACHE, 'output');
    if (fs.existsSync(cachedOutput)) {
        copyDir(cachedOutput, OUTPUT);
    } else {
        fs.mkdirSync(OUTPUT, { recursive: true });
    }
}

function prepareStatic() {
    // Copy root-level statics
    for (const file of ['index.html', 'robots.txt', '.nojekyll']) {
        const src = path.join(STATIC, file);
        if (fs.existsSync(src)) {
            for (const dest of [OUTPUT, OUTPUT_ROOT]) {
                fs.mkdirSync(dest, { recursive: true });
                fs.copyFileSync(src, path.join(dest, file));
            }
        }
    }

    // Copy per-language statics
    for (const lang of LANGUAGES) {
        const dest = outputDirs[lang];
        fs.mkdirSync(dest, { recursive: true });

        for (const file of ['favicon.ico', 'robots.txt']) {
            const src = path.join(STATIC, file);
            if (fs.existsSync(src)) fs.copyFileSync(src, path.join(dest, file));
        }

        // Copy directories
        for (const dir of ['.well-known', 'og_image']) {
            const srcDir = path.join(STATIC, dir);
            if (fs.existsSync(srcDir)) copyDir(srcDir, path.join(dest, dir));
        }
    }
}

// ---------------------------------------------------------------------------
// Copy minified bundles to output
// ---------------------------------------------------------------------------

function copyBundlesToOutput() {
    const bundles = fs.readdirSync(BUNDLES_DIR);

    for (const lang of LANGUAGES) {
        const dest = outputDirs[lang];
        fs.mkdirSync(dest, { recursive: true });

        for (const bundle of bundles) {
            const bundleDir = path.join(BUNDLES_DIR, bundle);
            if (!fs.existsSync(bundleDir)) continue;

            for (const file of fs.readdirSync(bundleDir)) {
                if (file.includes('.min.')) {
                    fs.copyFileSync(path.join(bundleDir, file), path.join(dest, file));
                }
            }
        }

        // Copy CSS url() assets (images, etc.) to output
        for (const bundle of bundles) {
            const bundleDir = path.join(BUNDLES_DIR, bundle);
            if (!fs.existsSync(bundleDir)) continue;
            const cssFile = path.join(bundleDir, `${bundle}.css`);
            if (fs.existsSync(cssFile)) {
                const { order, levels } = resolveDeps(bundle, ROOT);
                const cssFiles = collectFiles(order, levels, 'css');
                copyCSSAssets(cssFiles, dest);
            }
        }

        // Copy static assets (images, SVGs) — skip files already handled by prepareStatic
        const skipFiles = new Set(['index.html', '.nojekyll', '.htaccess', 'robots.txt', 'favicon.ico']);
        const frozenDir = path.join(ROOT, 'static');
        if (fs.existsSync(frozenDir)) {
            for (const entry of fs.readdirSync(frozenDir, { withFileTypes: true })) {
                if (!entry.isFile() || skipFiles.has(entry.name)) continue;
                copyFileDeflate(path.join(frozenDir, entry.name), dest);
            }
        }
    }
}

// ---------------------------------------------------------------------------
// Copy images and sitemap from cache
// ---------------------------------------------------------------------------

function copyStaticImages() {
    const imgExts = new Set(['.gif', '.png', '.jpg', '.svg', '.svgz', '.svgd']);

    for (const lang of LANGUAGES) {
        const src = cacheDirs[lang];
        const dest = outputDirs[lang];
        if (!fs.existsSync(src)) continue;
        fs.mkdirSync(dest, { recursive: true });

        for (const f of fs.readdirSync(src)) {
            if (imgExts.has(path.extname(f))) {
                copyFileDeflate(path.join(src, f), dest);
            }
        }
    }
}

function copySitemaps() {
    for (const lang of LANGUAGES) {
        const src = path.join(cacheDirs[lang], 'sitemap.xml');
        if (fs.existsSync(src)) {
            fs.mkdirSync(outputDirs[lang], { recursive: true });
            fs.copyFileSync(src, path.join(outputDirs[lang], 'sitemap.xml'));
        }
    }
}

// ---------------------------------------------------------------------------
// HTML generation (page compilation)
// ---------------------------------------------------------------------------

async function buildHTML() {
    console.log('Generating HTML pages...');
    const bundles = fs.readdirSync(BUNDLES_DIR);

    const tasks = [];
    for (const lang of LANGUAGES) {
        for (const bundle of bundles) {
            tasks.push(runSubProcess(path.join(ROOT, 'lib', 'template.cjs'), {
                cwd: ROOT,
                encoding: 'utf-8',
                env: {
                    ...process.env,
                    GORSHOCHEK_CACHE_FOLDER: cacheDirs[lang],
                    bemtree: path.join('bundles', bundle, `${bundle}.${lang}.bemtree.cjs`),
                    bemhtml: path.join('bundles', bundle, `${bundle}.${lang}.bemhtml.cjs`),
                    bundle,
                    static: 'static',
                    source: cacheDirs[lang],
                    destination: outputDirs[lang],
                    destinationRoot: path.resolve(ROOT, 'static'),
                    langs: LANGUAGES.join(','),
                    sites: SITES.join(','),
                    lang,
                    DEBUG: env.DEBUG || '',
                    YENV: env.YENV || ''
                }
            }));
        }
    }

    await Promise.all(tasks);
    console.log('HTML generation complete.');
}

// ---------------------------------------------------------------------------
// Redirect generation
// ---------------------------------------------------------------------------

async function generateRedirects() {
    console.log('Generating redirects...');

    const { createRequire } = await import('node:module');
    const require_ = createRequire(path.join(ROOT, 'package.json'));
    const model = require_(env.PATH_TO_MODEL || path.join(ROOT, 'content', 'model.cjs'));
    const redirects = require_(path.join(ROOT, 'content', 'redirects', 'index.cjs'));
    const prepareModel = require_(path.join(ROOT, 'lib', 'prepare-model.cjs'));
    const generateStaticRedirects = require_(path.join(ROOT, 'tools', 'generate-static-redirects.cjs'));
    const generate404Router = require_(path.join(ROOT, 'tools', 'generate-404-router.cjs'));

    const allRegexRedirects = [];

    for (const lang of LANGUAGES) {
        const modelWithRedirects = model.concat(redirects);
        const prepared = prepareModel(modelWithRedirects, lang);
        const { regexRedirects } = generateStaticRedirects(prepared.redirects, outputDirs[lang]);
        generate404Router(regexRedirects, outputDirs[lang]);

        for (const r of regexRedirects) {
            const patterns = Array.isArray(r.exp) ? r.exp : [r.exp];
            for (const p of patterns) {
                allRegexRedirects.push({ exp: `^/${lang}${p}`, now: r.now });
            }
        }
    }

    generate404Router(allRegexRedirects, OUTPUT_ROOT);
    console.log('Redirects complete.');
}

// ---------------------------------------------------------------------------
// Full build pipeline
// ---------------------------------------------------------------------------

async function fullBuild() {
    const initedFile = path.join(CACHE, '.inited');
    if (!fs.existsSync(initedFile)) {
        throw new Error(`Data is not initialized in ${CACHE}, run: node scripts/build.mjs data`);
    }

    // Phase 1: Prepare + BEM build (parallel)
    prepareOutput();
    await Promise.all([
        bemBuild(),
        (prepareStatic(), copyStaticImages(), Promise.resolve()),
    ]);

    // Phase 2: Minify
    await minifyBundles();

    // Phase 3: HTML + copy (parallel)
    await Promise.all([
        buildHTML(),
        (copyBundlesToOutput(), copySitemaps(), Promise.resolve()),
    ]);

    // Phase 4: Redirects
    await generateRedirects();

    console.log('\nBuild complete! Output in: output/bem.info/');
}

// ---------------------------------------------------------------------------
// Watch mode
// ---------------------------------------------------------------------------

async function watchMode() {
    await fullBuild();

    console.log('\nWatching for changes...');

    const { watch } = await import('node:fs');

    // Watch content/ → rebuild data
    fs.watch(path.join(ROOT, 'content'), { recursive: true }, debounce(async () => {
        console.log('\nContent changed, rebuilding data...');
        await buildData();
    }, 500));

    // Watch blocks/ → rebuild BEM + minify + copy
    fs.watch(path.join(ROOT, 'blocks'), { recursive: true }, debounce(async () => {
        console.log('\nBlocks changed, rebuilding...');
        await bemBuild();
        await minifyBundles();
        copyBundlesToOutput();
    }, 500));
}

function debounce(fn, ms) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), ms);
    };
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

const command = process.argv[2] || 'build';

try {
    switch (command) {
        case 'data':
            await buildData();
            break;
        case 'compile':
            await bemBuild();
            await minifyBundles();
            break;
        case 'watch':
            await watchMode();
            break;
        case 'build':
        default:
            await fullBuild();
            break;
    }
} catch (err) {
    console.error(err);
    process.exit(1);
}
