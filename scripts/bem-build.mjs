/**
 * BEM build system — replaces ENB.
 *
 * Resolves BEM dependencies, collects sources across levels,
 * compiles BEMTREE / BEMHTML templates with i18n,
 * concatenates CSS (with autoprefixer via postcss) and client JS.
 */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

// ---------------------------------------------------------------------------
// Levels configuration (mirrors old .enb/make.js)
// ---------------------------------------------------------------------------

const LIB_LEVELS = [
    'node_modules/bem-core/common.blocks',
    'node_modules/bem-core/desktop.blocks',
    'node_modules/bem-stat-counters/common.blocks',
    'node_modules/bem-components/common.blocks',
    'node_modules/bem-components/desktop.blocks',
    'node_modules/bem-components/design/common.blocks',
    'node_modules/bem-components/design/desktop.blocks',
];

const BUNDLE_LEVELS = {
    'index':                      ['blocks/common', 'blocks/promo', 'blocks/index'],
    'methodology-index':          ['blocks/common', 'blocks/promo', 'blocks/methodology', 'blocks/methodology-index'],
    'methodology':                ['blocks/common', 'bundles/methodology/blocks', 'blocks/methodology'],
    'technologies-index':         ['blocks/common', 'blocks/promo', 'blocks/technologies', 'blocks/technologies-index'],
    'technologies-classic-index': ['blocks/common', 'blocks/promo', 'blocks/technologies', 'blocks/technologies-index', 'blocks/technologies-classic-index'],
    'technologies':               ['blocks/common', 'blocks/technologies'],
    'toolbox-index':              ['blocks/common', 'blocks/promo', 'blocks/toolbox', 'blocks/toolbox-index'],
    'toolbox':                    ['blocks/common', 'blocks/toolbox'],
    'libraries-index':            ['blocks/common', 'blocks/promo', 'blocks/libraries', 'blocks/libraries-index'],
    'libraries':                  ['node_modules/bem-lib-site-view/lib-view.blocks', 'blocks/common', 'bundles/libraries/blocks', 'blocks/libraries'],
    'tutorials-index':            ['blocks/common', 'blocks/promo', 'blocks/tutorials', 'blocks/tutorials-index'],
    'tutorials':                  ['blocks/common', 'blocks/tutorials'],
    'community-index':            ['blocks/common', 'blocks/promo', 'blocks/community', 'blocks/community-index'],
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function dirExists(p) {
    try { return fs.statSync(p).isDirectory(); } catch { return false; }
}

function fileExists(p) {
    try { return fs.statSync(p).isFile(); } catch { return false; }
}

/** Evaluate a deps.js file — it can be `({...})` or `[{...}]` */
function evalDeps(filePath) {
    const src = fs.readFileSync(filePath, 'utf-8');
    return vm.runInNewContext(src, {});
}

/** Evaluate a bemdecl.js file */
function evalBemdecl(filePath) {
    const mod = { exports: {} };
    vm.runInNewContext(fs.readFileSync(filePath, 'utf-8'), { exports: mod.exports, module: mod });
    return (mod.exports.blocks || []).map(b => b.name);
}

// ---------------------------------------------------------------------------
// BEM dependency resolver
// ---------------------------------------------------------------------------

/**
 * Resolve all BEM entities for a bundle.
 *
 * @param {string} bundle — bundle name (e.g. "index")
 * @param {string} rootDir — project root
 * @returns {string[]} — ordered list of block names
 */
export function resolveDeps(bundle, rootDir) {
    const levels = LIB_LEVELS.concat(BUNDLE_LEVELS[bundle] || [])
        .map(l => path.resolve(rootDir, l))
        .filter(dirExists);

    const bemdeclPath = path.resolve(rootDir, 'bundles', bundle, `${bundle}.bemdecl.js`);
    const entryBlocks = evalBemdecl(bemdeclPath);

    const resolved = new Set();
    const order = [];

    function addBlock(blockName) {
        if (resolved.has(blockName)) return;
        resolved.add(blockName);

        // Find deps.js across levels (earlier = lower priority, later overrides)
        const depsEntries = [];
        for (const level of levels) {
            const depsFile = path.join(level, blockName, `${blockName}.deps.js`);
            if (fileExists(depsFile)) {
                depsEntries.push(depsFile);
            }
        }

        let mustDeps = [];
        let shouldDeps = [];

        for (const depsFile of depsEntries) {
            const raw = evalDeps(depsFile);
            const items = Array.isArray(raw) ? raw : [raw];

            for (const item of items) {
                if (item.mustDeps) {
                    mustDeps = mustDeps.concat(normalizeDeps(item.mustDeps, blockName));
                }
                if (item.shouldDeps) {
                    shouldDeps = shouldDeps.concat(normalizeDeps(item.shouldDeps, blockName));
                }
            }
        }

        // mustDeps first (they must be loaded BEFORE this block)
        for (const dep of mustDeps) addBlock(dep);

        order.push(blockName);

        // shouldDeps after
        for (const dep of shouldDeps) addBlock(dep);
    }

    for (const block of entryBlocks) addBlock(block);

    return { order, levels };
}

/** Normalize deps declarations into flat array of block names */
function normalizeDeps(deps, parentBlock) {
    const list = Array.isArray(deps) ? deps : [deps];
    const result = [];

    for (const dep of list) {
        if (typeof dep === 'string') {
            result.push(dep);
        } else if (dep && typeof dep === 'object') {
            if (dep.block) {
                result.push(dep.block);
            }
            // `{ elems: [...] }` — elements of the current block, no extra block dep
            // `{ mods: {...} }` — modifiers of the current block
            // These don't introduce a new block dependency.
        }
    }

    return result;
}

// ---------------------------------------------------------------------------
// File collection
// ---------------------------------------------------------------------------

/**
 * Collect all source files of a given tech for the resolved entities.
 *
 * @param {string[]} order — ordered block names
 * @param {string[]} levels — level directories
 * @param {string} suffix — e.g. "bemtree.js", "bemhtml.js", "css", "browser.js"
 * @returns {string[]} — ordered file paths
 */
export function collectFiles(order, levels, suffix) {
    const files = [];
    const seen = new Set();

    for (const block of order) {
        for (const level of levels) {
            const blockDir = path.join(level, block);
            if (!dirExists(blockDir)) continue;

            // Collect block-level file
            const main = path.join(blockDir, `${block}.${suffix}`);
            if (fileExists(main) && !seen.has(main)) {
                seen.add(main);
                files.push(main);
            }

            // Collect element/modifier files within block directory
            try {
                for (const entry of fs.readdirSync(blockDir, { withFileTypes: true })) {
                    if (!entry.isFile()) continue;
                    const name = entry.name;
                    if (name === `${block}.${suffix}`) continue; // already added
                    if (name.startsWith(block) && name.endsWith(`.${suffix}`)) {
                        const full = path.join(blockDir, name);
                        if (!seen.has(full)) {
                            seen.add(full);
                            files.push(full);
                        }
                    }
                }
            } catch { /* ignore */ }

            // Collect from subdirectories (element dirs like __elem, _mod)
            try {
                for (const sub of fs.readdirSync(blockDir, { withFileTypes: true })) {
                    if (!sub.isDirectory()) continue;
                    const subDir = path.join(blockDir, sub.name);
                    try {
                        for (const f of fs.readdirSync(subDir, { withFileTypes: true })) {
                            if (!f.isFile() || !f.name.endsWith(`.${suffix}`)) continue;
                            const full = path.join(subDir, f.name);
                            if (!seen.has(full)) {
                                seen.add(full);
                                files.push(full);
                            }
                        }
                    } catch { /* ignore */ }
                }
            } catch { /* ignore */ }
        }
    }

    return files;
}

// ---------------------------------------------------------------------------
// I18N keyset collection
// ---------------------------------------------------------------------------

/**
 * Collect and merge i18n keysets for a language.
 *
 * @returns {Object} — merged keysets, e.g. { header: { forum: 'Issues' }, ... }
 */
export function collectKeysets(order, levels, lang) {
    const merged = {};

    for (const block of order) {
        for (const level of levels) {
            const i18nFile = path.join(level, block, `${block}.i18n`, `${lang}.js`);
            if (!fileExists(i18nFile)) continue;

            try {
                // i18n files are CommonJS: module.exports = { block: { key: 'val' } }
                const mod = { exports: {} };
                const code = fs.readFileSync(i18nFile, 'utf-8');
                vm.runInNewContext(code, { module: mod, exports: mod.exports, require: () => ({}) });
                Object.assign(merged, mod.exports);
            } catch (e) {
                console.warn(`Warning: could not load i18n file ${i18nFile}: ${e.message}`);
            }
        }
    }

    return merged;
}

// ---------------------------------------------------------------------------
// Template compilation (BEMTREE / BEMHTML with i18n)
// ---------------------------------------------------------------------------

/**
 * Compile BEMTREE or BEMHTML bundle with i18n support.
 *
 * Uses bem-xjst to compile concatenated template sources and injects
 * an i18n() helper that reads from collected keysets.
 *
 * @param {string[]} templateFiles — ordered .bemtree.js / .bemhtml.js files
 * @param {Object} keysets — merged i18n keysets for this language
 * @param {'bemtree'|'bemhtml'} engine — which engine to use
 * @param {string} outFile — output path
 */
export async function compileTemplates(templateFiles, keysets, engine, outFile) {
    const bemxjst = await import('bem-xjst');
    const compiler = engine === 'bemtree' ? bemxjst.bemtree : bemxjst.bemhtml;

    // Concatenate template sources
    const sources = templateFiles.map(f => fs.readFileSync(f, 'utf-8'));
    const combined = sources.join('\n');

    // Compile template bundle
    const compiled = compiler.generate(combined, {
        escapeContent: false,
        // Make require() available inside templates
        requires: { lodash: { commonJS: 'lodash' }, path: { commonJS: 'path' } }
    });

    // Wrap with i18n function injection and CommonJS export
    const keysetsJson = JSON.stringify(keysets);
    const wrapper = `
(function() {
var __keysets = ${keysetsJson};

${compiled}

var __orig = BEMHTML.apply || BEMTREE.apply;
var __engine = typeof BEMHTML !== 'undefined' ? BEMHTML : BEMTREE;

// Inject i18n method into BEM context
var __origApply = __engine.apply.bind(__engine);
__engine.oninit(function(exports, ctx) {
    ctx.BEMContext.prototype.i18n = function(block, key) {
        var ks = __keysets[block];
        return ks && ks[key] || '';
    };
});

if (typeof module !== 'undefined') module.exports = __engine;
})();
`;

    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, wrapper);
}

// ---------------------------------------------------------------------------
// CSS build (concatenation + autoprefixer)
// ---------------------------------------------------------------------------

export async function buildCSS(cssFiles, outFile) {
    const sources = cssFiles.map(f => fs.readFileSync(f, 'utf-8'));
    const combined = sources.join('\n');

    const result = await postcss([autoprefixer({ overrideBrowserslist: ['defaults', 'not dead'] })])
        .process(combined, { from: undefined });

    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, result.css);
}

// ---------------------------------------------------------------------------
// Client JS build (concatenation + ym module system prepend)
// ---------------------------------------------------------------------------

export function buildJS(jsFiles, ymPath, outFile) {
    const parts = [];

    // Prepend ym module system
    if (ymPath && fileExists(ymPath)) {
        parts.push(fs.readFileSync(ymPath, 'utf-8'));
    }

    for (const f of jsFiles) {
        parts.push(fs.readFileSync(f, 'utf-8'));
    }

    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, parts.join('\n'));
}

// ---------------------------------------------------------------------------
// Build a single bundle for all languages
// ---------------------------------------------------------------------------

export async function buildBundle(bundle, langs, rootDir) {
    const { order, levels } = resolveDeps(bundle, rootDir);
    const bundleDir = path.join(rootDir, 'bundles', bundle);

    // --- CSS (language-independent) ---
    const cssFiles = collectFiles(order, levels, 'css');
    if (cssFiles.length) {
        await buildCSS(cssFiles, path.join(bundleDir, `${bundle}.css`));
    }

    // --- Per-language builds ---
    for (const lang of langs) {
        const keysets = collectKeysets(order, levels, lang);

        // BEMTREE
        const bemtreeFiles = collectFiles(order, levels, 'bemtree.js');
        if (bemtreeFiles.length) {
            await compileTemplates(
                bemtreeFiles, keysets, 'bemtree',
                path.join(bundleDir, `${bundle}.${lang}.bemtree.js`)
            );
        }

        // BEMHTML
        const bemhtmlFiles = collectFiles(order, levels, 'bemhtml.js');
        if (bemhtmlFiles.length) {
            await compileTemplates(
                bemhtmlFiles, keysets, 'bemhtml',
                path.join(bundleDir, `${bundle}.${lang}.bemhtml.js`)
            );
        }

        // Client JS
        const browserJsFiles = collectFiles(order, levels, 'browser.js');
        const langJsFiles = collectFiles(order, levels, `lang.${lang}.js`);
        const allJsFiles = langJsFiles.concat(browserJsFiles);

        if (allJsFiles.length) {
            const ymPath = path.join(rootDir, 'node_modules', 'ym', 'modules.js');
            buildJS(allJsFiles, ymPath, path.join(bundleDir, `${bundle}.${lang}.js`));
        }
    }

    console.log(`  ✓ ${bundle}`);
}

// ---------------------------------------------------------------------------
// Build all bundles
// ---------------------------------------------------------------------------

export async function buildAllBundles(langs, rootDir) {
    const bundles = Object.keys(BUNDLE_LEVELS);

    console.log(`Building ${bundles.length} bundles...`);

    for (const bundle of bundles) {
        await buildBundle(bundle, langs, rootDir);
    }

    console.log('BEM build complete.');
}
