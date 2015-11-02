'use strict';

var browserSync = require('browser-sync'),
    request = require('request'),
    marked = require('marked'),
    hljs = require('highlight.js'),
    gulp = require('gulp'),
    enb = require('enb'),
    fs = require('fs-extra'),
    vm = require('vm'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch'),
    runSequence = require('run-sequence');

var langs = ['ru', 'en'],
    outputFolder = 'output-',
    pages = require('./content/pages.js');

var bemhtmlFile = './desktop.bundles/index/index.bemhtml.js',
    bemtreeFile = './desktop.bundles/index/index.bemtree.js';

var renderer = new marked.Renderer();
renderer.heading = require('marked-renderer-heading-anchors');
//TODO
//renderer.image = require('marked-renderer-video');
marked.setOptions({
    renderer: renderer,

    headingClassName: 'article__heading article__heading_',
    headingAnchorClassName: 'article__heading-anchor',

    highlight: function (code, lang) {
        if (lang === 'files') {
            return code;
        }
        return lang && hljs.highlight(lang, code).value || hljs.highlightAuto(code).value;
    }
});

gulp.task('default', function () {
    runSequence('init', 'watch', 'browser-sync');
});

gulp.task('init', function(callback) {
    enb.make().then(function() {
        ['css', 'js'].forEach(function(tech) {
            langs.forEach(function(lang) {
                fs.createReadStream('desktop.bundles/index/index.min.' + tech)
                    .pipe(fs.createWriteStream(outputFolder + lang + '/index.min.' + tech));
            })
        });

        renderPages(require(bemtreeFile).BEMTREE, require(bemhtmlFile).BEMHTML, pages, langs, outputFolder);

        callback();
    });
});

gulp.task('browser-sync', function() {
    browserSync.create().init({
        files: outputFolder + 'en' + '/**',
        server: { baseDir: outputFolder + 'en' },
        port: 8008,
        browser: 'chrome',
        startPath: '/methodology/typo/',
        online: false,
        notify: false,
        ui: false
    });

    browserSync.create().init({
        files: outputFolder + 'ru' + '/**',
        server: { baseDir: outputFolder + 'ru' },
        port: 8009,
        browser: 'chrome',
        startPath: '/methodology/typo/',
        online: false,
        notify: false,
        ui: false
    });
});

gulp.task('watch', function () {

    // watch changes in blocks and build using enb
    watch(['*blocks/**/*'], function batch(events, done) {
        enb.make();
    });

    // watch changes in final css and js and copy it to output folders
    watch('desktop.bundles/index/index.min.*', function (vinyl) {
        langs.forEach(function(lang) {
            vinyl.pipe(fs.createWriteStream(outputFolder + lang + '/' + vinyl.basename));
        });
    });

    // watch changes in content and bemtree/bemhtml bundles and rebuild pages
    watch(['content/**/*', 'content-github/**/*',
            'desktop.bundles/index/index.bemhtml.js',
            'desktop.bundles/index/index.bemtree.js'], function batch(events, done) {
        delete require.cache[require.resolve(bemtreeFile)];
        delete require.cache[require.resolve(bemhtmlFile)];
        renderPages(require(bemtreeFile).BEMTREE, require(bemhtmlFile).BEMHTML, pages, langs, outputFolder);
    });
});

function applyTemplates(bemtree, bemhtml, pages, page, langs, lang, outputFolder, content) {
    page.content = content;

    var bemjson = bemtree.apply({
        block: 'root',
        data: {
            page: page,
            pages: pages[lang],
            langs: langs,
            lang: lang
        }
    });

    bemjson.block = 'page';

    var dirName = outputFolder + lang + page.url;

    fs.mkdirsSync(dirName);
    fs.writeFile(dirName + '/index.html', bemhtml.apply(bemjson));

    var source = page.source;
    var type = page.type || 'md';
    if (type === 'md' && /^\.\//.test(source)) {
        var sourceDir = source.replace(/[^\/]*$/, '');

        fs.copySync(sourceDir, dirName, { filter: function(file) { return !/md$/.test(file) }});
    }
}

function render(bemtree, bemhtml, pages, page, langs, lang, outputFolder) {

    var renderInner = function(err, content) {
        var type = page.type || 'md'
        if (type === 'md') {
            applyTemplates(bemtree, bemhtml, pages, page, langs, lang, outputFolder, marked(content));
        } else if (type === 'bemjson.js') {
            applyTemplates(bemtree, bemhtml, pages, page, langs, lang, outputFolder, bemhtml.apply(vm.runInNewContext(content)));
        } else if (type === 'lib') {
            applyTemplates(bemtree, bemhtml, pages, page, langs, lang, outputFolder, marked(content));
        } else {
            throw "Unknown type";
        }
    };

    var source = page.source;

    if (/^http/.test(source)) {
        request(source, function (err, response, content) {
            if (!err && response.statusCode == 200)
                renderInner(err, content);
        });
    } else if (/^\.\//.test(source)) {
        // read content from local FS
        fs.readFile(source, 'utf8', renderInner);
    } else {
        // inline content
        renderInner(null, source);
    }
}

function renderPages(bemtree, bemhtml, pages, langs, outputFolder) {
    langs.forEach(function(lang) {
        pages[lang].forEach(function(page) {
            render(bemtree, bemhtml, pages, page, langs, lang, outputFolder);
        })
    });
}
