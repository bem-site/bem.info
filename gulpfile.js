var path = require('path'),
    fs = require('fs'),
    cp = require('child_process'),

    _ = require('lodash'),
    Q = require('q'),
    enb = require('enb'),
    runSequence = require('run-sequence'),
    rimraf = require('rimraf'),

    gulp = require('gulp'),
    batch = require('gulp-batch'),
    browserSync = require('browser-sync');

const LANGUAGES = ['en', 'ru'];

const CACHE_DIRS = LANGUAGES.reduce((prev, language) => {
    prev[language] = './.gorshochek/cache/' + language;
    return prev;
}, {});
const DATA_DIR_PREFIX = './.gorshochek/data-';
const DATA_DIRS = LANGUAGES.reduce((prev, language) => {
    prev[language] = DATA_DIR_PREFIX + language;
    return prev;
}, {});
const OUTPUT_DIRS = LANGUAGES.reduce((prev, language) => {
    prev[language] = './output-' + language;
    return prev;
}, {});

const BUNDLES_DIR = 'bundles';
const BUNDLES = fs.readdirSync(BUNDLES_DIR);
const BEMTREE = BUNDLES.reduce((prev, bundle) => {
    prev[bundle] = path.join(BUNDLES_DIR, bundle, bundle + '.bemtree.js');
    return prev;
}, {});
const BEMHTML = BUNDLES.reduce((prev, bundle) => {
    prev[bundle] = path.join(BUNDLES_DIR, bundle, bundle + '.bemhtml.js');
    return prev;
}, {});

function removeFolder(folder) {
    return Q.denodeify(rimraf)(folder);
}

function runSubProcess(file, options) {
    const defer = Q.defer();
    const proc = cp.fork(file, options);
    proc.on('error', (error) => defer.reject(error));
    proc.on('close', () => defer.resolve());
    proc.on('exit', () => defer.resolve());
    return defer.promise;
}

function buildData(lang) {
    return runSubProcess('./lib/data-builder.js', {
        cwd: process.cwd(),
        encoding: 'utf-8',
        env: {
            GORSHOCHEK_CACHE_FOLDER: CACHE_DIRS[lang],
            modelPath: `./content/model.${lang}.json`,
            host: `http://${lang}.bem.info`,
            dest: DATA_DIRS[lang],
            token: process.env.TOKEN,
            DEBUG: process.env.DEBUG
        }
    });
}

function compilePages(lang, bemtree, bemhtml) {
    return runSubProcess('./lib/template.js', {
        cwd: process.cwd(),
        encoding: 'utf-8',
        env: {
            GORSHOCHEK_CACHE_FOLDER: CACHE_DIRS[lang],
            bemtree: JSON.stringify(bemtree),
            bemhtml: JSON.stringify(bemhtml),
            source: DATA_DIRS[lang],
            destination: OUTPUT_DIRS[lang],
            langs: LANGUAGES,
            lang: lang,
            DEBUG: process.env.DEBUG
        }
    });
}

// Подготовка директорий output-*

gulp.task('clean-output', () => Q.all(_.values(OUTPUT_DIRS).map(removeFolder)));

gulp.task('copy-misc-to-output', ['clean-output'], () => Q.all(LANGUAGES.map(lang => {
    return gulp.src([
        'content/{favicon.ico,robots.txt}',
        'blocks/index/footer/__copyright-logo/footer__copyright-logo_lang_{en,ru}.svgz'
    ]).pipe(gulp.dest(OUTPUT_DIRS[lang]));
})));

gulp.task('prepare-output', ['clean-output', 'copy-misc-to-output']);

// Сборка данных

gulp.task('data-clean', () => Q.all(_.values(DATA_DIRS).map(removeFolder)));
gulp.task('data-cache-clean', () => Q.all(_.values(CACHE_DIRS).map(removeFolder)));
gulp.task('data-build', () => Q.all(LANGUAGES.map(buildData)));
gulp.task('data-rebuild', () => runSequence('data-clean', 'data-cache-clean', 'data-build'));

// Шаблонизация данных

gulp.task('enb-make', () => enb.make());

gulp.task('copy-static', () => Q.all(LANGUAGES.map(lang => {
    var files = BUNDLES.map(bundle => {
        return path.join(BUNDLES_DIR, bundle, bundle + '.min.*')
    });

    return gulp.src(files).pipe(gulp.dest(OUTPUT_DIRS[lang]));
})));

gulp.task('copy-sitemap-xml', () => Q.all(LANGUAGES.map(lang => {
    return gulp.src(path.join(DATA_DIRS[lang], 'sitemap.xml'))
        .pipe(gulp.dest(path.join(OUTPUT_DIRS[lang])));
})));

gulp.task('build-html', () => Q.all(LANGUAGES.map(lang => {
    return compilePages(lang, BEMTREE, BEMHTML);
})));

gulp.task('copy-static-images', () => Q.all(LANGUAGES.map(lang => {
    return gulp.src(path.join(DATA_DIRS[lang], 'static/*'))
        .pipe(gulp.dest(path.join(OUTPUT_DIRS[lang], 'static')));
})));

gulp.task('build-html', () => Q.all(LANGUAGES.map(compilePages)));
gulp.task('compile-pages', () => runSequence(
    'enb-make',
    'drop-templates-cache',
    'copy-static',
    'copy-static-images',
    'copy-sitemap-xml',
    'build-html'
));

// Наблюдатель

gulp.task('watch', () => {
    gulp.watch(['content/**/*'], batch((event, done) => runSequence('data-build', done)));

    // watch changes in blocks and build using enb
    gulp.watch(['blocks/**/*'], batch((event, done) => runSequence(
        'enb-make',
        'copy-static', // copy final css and js to output folders
        done
    )));

    // compile pages then bemtree/bemhtml bundle or data changes
    gulp.watch([BUNDLES_DIR + '/*/*.bem{tree,html}.js', DATA_DIR_PREFIX + '*/**'],
        batch((event, done) => runSequence(
        'build-html',
        done
    )));
/*
    BUNDLES.forEach(bundle => {
        gulp.watch([
                BEMTREE[bundle], BEMHTML[bundle],
                path.join(DATA_DIR_PREFIX + '*', bundle, '**'),
                path.join(DATA_DIR_PREFIX + '*', bundle + '.js'),
            ],
            batch((event, done) => {
                delete require.cache[path.join(process.cwd(), BEMTREE[bundle])];
                delete require.cache[path.join(process.cwd(), BEMHTML[bundle])];

                // var bemtree = {},
                //     bemhtml = {};
                // bemtree[bundle] = BEMTREE[bundle];
                // bemhtml[bundle] = BEMHTML[bundle];
// TODO: pass `bemtree` and `bemhtml` instead of `BEMTREE` and `BEMHTML`
// TODO: ask bemer@ how to filter model for pages with passed bundle

                LANGUAGES.forEach(lang => {
                    compilePages(lang, BEMTREE, BEMHTML);
                });

                done();
            })
        );
    });
*/
});

gulp.task('browser-sync', () => {
    const port = 8008;

    LANGUAGES.forEach((lang, index) => {
        browserSync.create().init({
            files: OUTPUT_DIRS[lang] + '/**',
            server: { baseDir: OUTPUT_DIRS[lang] },
            port: port + index,
            browser: ['google chrome', 'firefox', 'opera'],
            open: false,
            startPath: '/methodology/',
            online: false,
            logLevel: 'silent',
            logFileChanges: false,
            notify: false,
            ui: false,
            middleware: function (req, res, next) {
                req.url.match(/svgz/) && res.setHeader('Content-Encoding', 'gzip');
                next();
            }
        });
    });
});

gulp.task('default', (done) => runSequence(
    'copy-misc-to-output',
    'data-build',
    'enb-make',
    'copy-static',
    'copy-sitemap-xml',
    'build-html',
    'watch',
    'browser-sync',
    done
));
