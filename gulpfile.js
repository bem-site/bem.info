'use strict';

const path = require('path');
const fs = require('fs');
const fsExtra = require('fs-extra');
const cp = require('child_process');
const { build: esbuild } = require('esbuild');

const Q = require('q');
const enb = require('enb');

const gulp = require('gulp');

const prepareModel = require('./lib/prepare-model');
const fsHelpers = require('./node_modules/bem-lib-site-view/lib/fs-helpers');

const generateStaticRedirects = require('./tools/generate-static-redirects');
const generate404Router = require('./tools/generate-404-router');

const env = process.env;

const model = require(env.PATH_TO_MODEL || './content/model.js');

const LANGUAGES = env.LANGUAGES ? env.LANGUAGES.split(',') : ['en', 'ru'];
const IS_PROD = env.YENV === 'production';

const CACHE = './.cache';
const STATIC = './static';
const OUTPUT = './output';

const CACHE_DIR_PREFIX = CACHE + '/gorshochek-cache-';
const CACHE_DIRS = LANGUAGES.reduce((prev, language) => {
    prev[language] = CACHE + '/gorshochek-cache-' + language;
    return prev;
}, {});

const OUTPUT_ROOT = OUTPUT + '/bem.info/';
const OUTPUT_DIRS = LANGUAGES.reduce((prev, language) => {
    prev[language] = OUTPUT_ROOT + language;
    return prev;
}, {});

const BUNDLES_DIR = 'bundles';
const BUNDLES = fs.readdirSync(BUNDLES_DIR);
const BEMTREE = BUNDLES.reduce((prev, bundle) => {
    LANGUAGES.forEach(lang => {
        prev[lang] || (prev[lang] = {});
        prev[lang][bundle] = path.join(BUNDLES_DIR, bundle, bundle + '.' + lang + '.bemtree.js');
    });

    return prev;
}, {});
const BEMHTML = BUNDLES.reduce((prev, bundle) => {
    LANGUAGES.forEach(lang => {
        prev[lang] || (prev[lang] = {});
        prev[lang][bundle] = path.join(BUNDLES_DIR, bundle, bundle + '.' + lang + '.bemhtml.js');
    });

    return prev;
}, {});

function runSubProcess(file, options) {
    const defer = Q.defer();
    const proc = cp.fork(file, options);
    proc.on('error', (error) => defer.reject(error));
    proc.on('close', () => defer.resolve());
    proc.on('exit', () => defer.resolve());
    return defer.promise;
}

function compilePages(lang, bundle) {
    return runSubProcess('./lib/template.js', {
        cwd: process.cwd(),
        encoding: 'utf-8',
        env: {
            GORSHOCHEK_CACHE_FOLDER: CACHE_DIRS[lang],
            bemtree: BEMTREE[lang][bundle],
            bemhtml: BEMHTML[lang][bundle],
            bundle,
            static: STATIC,
            source: CACHE_DIRS[lang],
            destination: OUTPUT_DIRS[lang],
            destinationRoot: OUTPUT + (IS_PROD ? '/bem.info/static' : ''),
            langs: LANGUAGES,
            sites: env.SITES ? env.SITES.split(',') : ['methodology', 'technologies', 'toolbox', 'libraries', 'tutorials'],
            lang,
            DEBUG: env.DEBUG,
            YENV: env.YENV
        }
    });
}

// Подготовка директорий output-*

gulp.task('prepare-output', () => new Promise(resolve =>
    fsExtra.remove(OUTPUT, () =>
        fsExtra.copy(path.join(CACHE, OUTPUT), OUTPUT, () => resolve())
    )
));

gulp.task('prepare-static', () => {
    return Q.all(
        gulp.src(path.join(STATIC, '{index.html,robots.txt,.nojekyll}'))
            .pipe(gulp.dest(OUTPUT))
            .pipe(gulp.dest(OUTPUT_ROOT)),

        LANGUAGES.map(lang => gulp.src(path.join(STATIC, '{favicon.ico,robots.txt,.well-known/*,og_image/*}'))
            .pipe(gulp.dest(OUTPUT_DIRS[lang])))
    );
});

// Сборка данных

function data() {
    fsExtra.removeSync(CACHE);
    fs.mkdirSync(CACHE, { recursive: true });

    return Q.all(LANGUAGES.map(lang => {
        const modelWithRedirects = model.concat(require('./content/redirects'));
        const preparedModel = prepareModel(modelWithRedirects, lang);

        const modelPath = path.join(CACHE, `model.${lang}.json`);
        fs.writeFileSync(modelPath, JSON.stringify(preparedModel.model, null, 2));

        return runSubProcess('./lib/data-builder.js', {
            cwd: process.cwd(),
            encoding: 'utf-8',
            env: {
                GORSHOCHEK_CACHE_FOLDER: CACHE_DIRS[lang],
                modelPath: modelPath,
                host: `https://${lang}.bem.info`,
                dest: CACHE_DIRS[lang],
                root: IS_PROD ? '' : '/bem.info/' + lang,
                token: env.TOKEN,
                DEBUG: env.DEBUG,
                githubHosts: env.GITHUB_HOSTS
            }
        });
    })).then(() => fsHelpers.touch(path.join(CACHE, '.inited')));
}

gulp.task('data', data);

gulp.task('is-data-exists', () => {
    return fsHelpers.exists(path.join(CACHE, '.inited')).then(doesExists => {
        if (doesExists) {
            return Promise.resolve();
        }

        throw Error('Data is not initialized in ' + CACHE + ', run `gulp data`');
    });
});

// Шаблонизация данных

gulp.task('enb-make', enb.make);

// Minify CSS/JS bundles with esbuild (replaces borschik)
gulp.task('minify-bundles', async () => {
    const tasks = [];

    for (const bundle of BUNDLES) {
        const bundleDir = path.join(BUNDLES_DIR, bundle);

        // Minify CSS
        const cssFile = path.join(bundleDir, bundle + '.css');
        if (fs.existsSync(cssFile)) {
            tasks.push(
                esbuild({
                    entryPoints: [cssFile],
                    outfile: path.join(bundleDir, bundle + '.min.css'),
                    minify: IS_PROD,
                    bundle: false,
                    allowOverwrite: true,
                    loader: { '.css': 'css' },
                    logLevel: 'warning'
                })
            );
        }

        // Minify JS per language
        for (const lang of LANGUAGES) {
            const jsFile = path.join(bundleDir, bundle + '.' + lang + '.js');
            if (fs.existsSync(jsFile)) {
                tasks.push(
                    esbuild({
                        entryPoints: [jsFile],
                        outfile: path.join(bundleDir, bundle + '.' + lang + '.min.js'),
                        minify: IS_PROD,
                        bundle: false,
                        allowOverwrite: true,
                        logLevel: 'warning'
                    })
                );
            }
        }
    }

    await Promise.all(tasks);
});

function copyStatic() {
    return Q.all(LANGUAGES.map(lang => {
        const files = BUNDLES.map(bundle =>
            path.join(BUNDLES_DIR, bundle, bundle + '*.min.*'));

        files.push(path.join(OUTPUT_ROOT, 'static', '*'));

        return gulp.src(files).pipe(gulp.dest(OUTPUT_DIRS[lang]));
    }));
}

gulp.task('copy-static', copyStatic);

gulp.task('copy-sitemap-xml', () => Q.all(LANGUAGES.map(lang => {
    return gulp.src(path.join(CACHE_DIRS[lang], 'sitemap.xml'))
        .pipe(gulp.dest(path.join(OUTPUT_DIRS[lang])));
})));

gulp.task('build-html', () => Q.all(LANGUAGES.map(lang => {
    return Q.all(BUNDLES.map(compilePages.bind(null, lang)));
})));

gulp.task('copy-static-images', () => Q.all(LANGUAGES.map(lang => {
    return gulp.src(path.join(CACHE_DIRS[lang], '/*.{gif,png,jpg,svg,svgz,svgd}'))
        .pipe(gulp.dest(OUTPUT_DIRS[lang]));
})));

gulp.task('generate-redirects', () => {
    const allRegexRedirects = [];

    return Q.all(LANGUAGES.map(lang => {
        const modelWithRedirects = model.concat(require('./content/redirects'));
        const preparedModel = prepareModel(modelWithRedirects, lang);

        const { regexRedirects } = generateStaticRedirects(preparedModel.redirects, OUTPUT_DIRS[lang]);
        generate404Router(regexRedirects, OUTPUT_DIRS[lang]);

        // Collect regex redirects with language prefix for root 404.html
        regexRedirects.forEach(r => {
            const patterns = Array.isArray(r.exp) ? r.exp : [r.exp];
            patterns.forEach(p => {
                allRegexRedirects.push({ exp: '^/' + lang + p, now: r.now });
            });
        });

        return Q.resolve();
    })).then(() => {
        // Generate root-level 404.html that routes /{lang}/... paths
        generate404Router(allRegexRedirects, OUTPUT_ROOT);
    });
});

gulp.task('compile-pages', gulp.series(
    'enb-make',
    'minify-bundles',
    'prepare-static',
    'copy-static',
    'copy-static-images',
    'copy-sitemap-xml',
    'build-html'
));

// Наблюдатель (use `npm run dev` for Vite dev server)

gulp.task('watch', () => {
    const { watch } = require('gulp');

    watch(['content/**/*'], function contentChanged(done) {
        data().then(() => done());
    });

    watch(['blocks/**/*'], function blocksChanged(done) {
        enb.make().then(() => {
            const minify = gulp.task('minify-bundles');
            minify(() => copyStatic().then(done));
        });
    });

    // compile pages when bemtree/bemhtml bundle or data changes
    BUNDLES.forEach(bundle => {
        var cwd = process.cwd(),
            bemtree = LANGUAGES.map(lang => path.join(cwd, BEMTREE[lang][bundle])),
            bemhtml = LANGUAGES.map(lang => path.join(cwd, BEMHTML[lang][bundle]));

        watch(bemtree.concat(bemhtml, [
            path.join(CACHE_DIR_PREFIX + '*', bundle, '**'),
            path.join(CACHE_DIR_PREFIX + '*', bundle + '.js')
        ]),
        function bundleChanged(done) {
            bemhtml.forEach(pathToBemhtml => delete require.cache[pathToBemhtml]);
            bemtree.forEach(pathToBemtree => delete require.cache[pathToBemtree]);
            Q.all(LANGUAGES.map(lang => compilePages(lang, bundle))).then(done);
        }
        );
    });
});

gulp.task('build', gulp.series(
    'is-data-exists',
    gulp.parallel('prepare-output', 'prepare-static', 'copy-static-images', 'enb-make'),
    'minify-bundles',
    gulp.parallel('build-html', 'copy-static', 'copy-sitemap-xml'),
    'generate-redirects'
));

gulp.task('default', gulp.series(
    'build',
    'watch'
));
