var path = require('path'),
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
const DATA_DIRS = LANGUAGES.reduce((prev, language) => {
    prev[language] = './.gorshochek/data-' + language;
    return prev;
}, {});
const OUTPUT_DIRS = LANGUAGES.reduce((prev, language) => {
    prev[language] = './output-' + language;
    return prev;
}, {});

const BUNDLE_NAME = 'index';

const BEMTREE_PATH = path.join('desktop.bundles', BUNDLE_NAME, BUNDLE_NAME + '.bemtree.js');
const BEMHTML_PATH = path.join('desktop.bundles', BUNDLE_NAME, BUNDLE_NAME + '.bemhtml.js');

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

function compilePages(lang) {
    return runSubProcess('./lib/template.js', {
        cwd: process.cwd(),
        encoding: 'utf-8',
        env: {
            bemtree: BEMTREE_PATH,
            bemhtml: BEMHTML_PATH,
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
    return gulp.src('content/{favicon.ico,robots.txt}').pipe(gulp.dest(OUTPUT_DIRS[lang]));
})));
gulp.task('prepare-output', ['clean-output', 'copy-misc-to-output']);

// Сборка данных

gulp.task('data-clean', () => Q.all(_.values(DATA_DIRS).map(removeFolder)));
gulp.task('data-cache-clean', () => Q.all(_.values(CACHE_DIRS).map(removeFolder)));
gulp.task('data-build', () => Q.all(LANGUAGES.map(buildData)));
gulp.task('data-rebuild', () => runSequence('data-clean', 'data-cache-clean', 'data-build'));

// Шаблонизация данных

gulp.task('enb-make', () => enb.make());
gulp.task('drop-templates-cache', (callback) => {
    delete require.cache[BEMHTML_PATH];
    delete require.cache[BEMTREE_PATH];
    callback();
});
gulp.task('copy-static', () => Q.all(LANGUAGES.map(lang => {
    return gulp.src(`desktop.bundles/${BUNDLE_NAME}/{${BUNDLE_NAME}.min.css,${BUNDLE_NAME}.min.js}`)
        .pipe(gulp.dest(OUTPUT_DIRS[lang]));
})));

gulp.task('copy-sitemap-xml', () => Q.all(LANGUAGES.map(lang => {
    return gulp.src(path.join(DATA_DIRS[lang], 'sitemap.xml'))
        .pipe(gulp.dest(path.join(OUTPUT_DIRS[lang])));
})));

gulp.task('build-html', () => Q.all(LANGUAGES.map(compilePages)));
gulp.task('compile-pages', () => runSequence(
    'enb-make',
    'drop-templates-cache',
    'copy-static',
    'copy-sitemap-xml',
    'build-html'
));

// Наблюдатель

gulp.task('watch', () => {
    gulp.watch(['*blocks/**/*'], batch((event, done) => runSequence(
        'enb-make',
        'drop-templates-cache',
        'build-html',
        done
    )));
    gulp.watch(['content/**/*'], batch((event, done) => runSequence('data-build', done)));
    gulp.watch(['data-*/**/*'], batch((events, done) => runSequence('build-html', done)));
    gulp.watch('desktop.bundles/index/index.min.*',  batch((events, done) => runSequence('copy-static', done)));
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
            logLevel: 'warn',
            logFileChanges: false,
            notify: false,
            ui: false
        });
    });
});

gulp.task('default', (done) => runSequence(
    'data-build',
    'enb-make',
    'compile-pages',
    'watch',
    'browser-sync',
    done
));
