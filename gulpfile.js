'use strict';

/*
var Config = require('bem-config'),
    bem = require('@bem/gulp'),
    gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    postcssUrl = require('postcss-url'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    merge = require('merge2');

// bh
var bhEngine = require('@bem/gulp-bh')({
    jsAttrName: 'data-bem',
    jsAttrScheme: 'json'
});

var conf = new Config(),
    project = bem({ bemconfig: conf.merged.levels });

var bundle = project.bundle({
    path: 'desktop.bundles/index',
    decl: 'index.bemjson.js'
});

gulp.task('css', function() {
    return bundle.src({
        tech: 'css',
        extensions: ['.css', '.styl']
    })
    .pipe(stylus())
    .pipe(postcss([
        autoprefixer({
            browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
        }),
        postcssUrl({
            url: function(url, decl, from) {
                return path.relative(
                    path.resolve(process.cwd(), bundle.path()),
                    path.resolve(from, url)
                );
            }
        })
    ]))
    .pipe(csso())
    .pipe(concat(bundle.name() + '.min.css'))
    .pipe(gulp.dest(bundle.path()));
});

gulp.task('js', function() {
    return merge(
        gulp.src(require.resolve('ym')),
        bundle.src({
            tech: 'js',
            extensions: ['.js', '.vanilla.js', '.browser.js']
        })
    )
    .pipe(uglify())
    .pipe(concat(bundle.name() + '.min.js'))
    .pipe(gulp.dest(bundle.path()));
});

gulp.task('bh', function() {
    return bundle.src({
        tech: 'bh.js',
        extensions: ['.bh.js']
    })
    .pipe(bhEngine.match());
});

gulp.task('html', gulp.series('bh', function apply() {
    return bundle.bemjson()
        .pipe(bhEngine.apply(bundle.name() + '.html'))
        .pipe(gulp.dest(bundle.path()));
}));

gulp.task('default', gulp.parallel('css', 'js', 'html'));
*/

var path = require('path'),
    fs = require('fs'),
    cp = require('child_process'),

    _ = require('lodash'),
    Q = require('q'),
    enb = require('enb'),
    rimraf = require('rimraf'),

    gulp = require('gulp'),
    batch = require('gulp-batch'),
    browserSync = require('browser-sync'),
    csscomb = require('gulp-csscomb');

const LANGUAGES = ['en', 'ru'];

const CACHE_DIRS = LANGUAGES.reduce((prev, language) => {
    prev[language] = './.cache/gorshochek-cache-' + language;
    return prev;
}, {});
const DATA_DIR_PREFIX = './.cache/gorshochek-data-';
const DATA_DIRS = LANGUAGES.reduce((prev, language) => {
    prev[language] = DATA_DIR_PREFIX + language;
    return prev;
}, {});
const OUTPUT = './output';
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

function compilePages(lang, bundle) {
    return runSubProcess('./lib/template.js', {
        cwd: process.cwd(),
        encoding: 'utf-8',
        env: {
            GORSHOCHEK_CACHE_FOLDER: CACHE_DIRS[lang],
            bemtree: BEMTREE[lang][bundle],
            bemhtml: BEMHTML[lang][bundle],
            bundle,
            source: DATA_DIRS[lang],
            destination: OUTPUT_DIRS[lang],
            destinationRoot: OUTPUT,
            langs: LANGUAGES,
            lang,
            DEBUG: process.env.DEBUG
        }
    });
}

// Подготовка директорий output-*

gulp.task('copy-misc-to-output', () => {
    rimraf.sync(OUTPUT);

    return Q.all(gulp.src('static/index.html').pipe(gulp.dest(OUTPUT)).pipe(gulp.dest(OUTPUT_ROOT)),
        LANGUAGES.map(lang => {
            return gulp.src([
                'static/{favicon.ico,robots.txt}'
            ]).pipe(gulp.dest(OUTPUT_DIRS[lang]));
    }));
});

// Сборка данных

gulp.task('data-clean', () => Q.all(_.values(DATA_DIRS).map(removeFolder)));
gulp.task('data-cache-clean', () => Q.all(_.values(CACHE_DIRS).map(removeFolder)));
gulp.task('data', () => Q.all(LANGUAGES.map(lang => {
    return runSubProcess('./lib/data-builder.js', {
        cwd: process.cwd(),
        encoding: 'utf-8',
        env: {
            GORSHOCHEK_CACHE_FOLDER: CACHE_DIRS[lang],
            modelPath: `./content-${lang}/model-hybrid.${lang}.json`,
            host: `http://${lang}.bem.info`,
            dest: DATA_DIRS[lang],
            token: process.env.TOKEN,
            DEBUG: process.env.DEBUG
        }
    });
})));
gulp.task('data-rebuild', () => runSequence('data-clean', 'data-cache-clean', 'data'));

// Шаблонизация данных

gulp.task('enb-make', () => enb.make());

gulp.task('copy-static', () => Q.all(LANGUAGES.map(lang => {
    var files = BUNDLES.map(bundle => {
        return path.join(BUNDLES_DIR, bundle, bundle + '*.min.*')
    });

    return gulp.src(files).pipe(gulp.dest(OUTPUT_DIRS[lang]));
})));

gulp.task('copy-sitemap-xml', () => Q.all(LANGUAGES.map(lang => {
    return gulp.src(path.join(DATA_DIRS[lang], 'sitemap.xml'))
        .pipe(gulp.dest(path.join(OUTPUT_DIRS[lang])));
})));

gulp.task('build-html', () => Q.all(LANGUAGES.map(lang => {
    return Q.all(BUNDLES.map(compilePages.bind(null, lang)));
})));

gulp.task('copy-static-images', () => Q.all(LANGUAGES.map(lang => {
    return gulp.src(path.join(DATA_DIRS[lang], 'static/*'))
        .pipe(gulp.dest(OUTPUT_DIRS[lang]));
})));

gulp.task('compile-pages', gulp.series(
    'enb-make',
    'copy-static',
    'copy-static-images',
    'copy-sitemap-xml',
    'build-html'
));

// Наблюдатель

gulp.task('watch', () => {
    gulp.watch(['content-*/**/*'], batch((event, done) => gulp.series('data', done)));
    gulp.watch(['blocks/**/*'], batch((event, done) => gulp.series('enb-make', 'copy-static', done)));

    // compile pages then bemtree/bemhtml bundle or data changes
    BUNDLES.forEach(bundle => {
        var cwd = process.cwd(),
            bemtree = LANGUAGES.map(lang => path.join(cwd, BEMTREE[lang][bundle])),
            bemhtml = LANGUAGES.map(lang => path.join(cwd, BEMHTML[lang][bundle]));

        gulp.watch(bemtree.concat(bemhtml, [
                path.join(DATA_DIR_PREFIX + '*', bundle, '**'),
                path.join(DATA_DIR_PREFIX + '*', bundle + '.js')
            ]),
            batch((event, done) => {
                bemhtml.forEach(pathToBemhtml => delete require.cache[pathToBemhtml]);
                bemtree.forEach(pathToBemtree => delete require.cache[pathToBemtree]);

                LANGUAGES.forEach(lang => {
                    console.log('lang', lang, 'bundle', bundle);
                    compilePages(lang, bundle)
                });

                done();
            }
        ));
    });
});

gulp.task('browser-sync', () => {
    browserSync.create().init({
        files: OUTPUT + '/**',
        server: { baseDir: OUTPUT },
        port: 8008,
        open: false,
        online: false,
        logLevel: 'silent',
        notify: false,
        ui: false,
        middleware: function(req, res, next) {
            req.url.match(/svgz/) && res.setHeader('Content-Encoding', 'gzip');
            next();
        }
    });
});

gulp.task('libs-build', function() {
    // require('bem-lib-site-generator').data(path.resolve('path/to/library'));
});

gulp.task('csscomb', function() {
    return gulp.src('blocks/**/*.css', { base: './' })
        .pipe(csscomb())
        .pipe(gulp.dest('./'));
});

gulp.task('default', gulp.series(
    'copy-misc-to-output',
    'data',
    'enb-make',
    'copy-static',
    'copy-static-images',
    'copy-sitemap-xml',
    'build-html',
    'csscomb',
    gulp.parallel('watch', 'browser-sync')
));
