'use strict';

var browserSync = require('browser-sync'),
    request = require('request'),
    mkdirp = require('mkdirp'),
    marked = require('marked'),
    gulp = require('gulp'),
    path = require('path'),
    enb = require('enb'),
    fs = require('fs'),
    vm = require('vm'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch'),
    pages = require('./content/pages.js'),
    bemhtml = require('./desktop.bundles/index/index.bemhtml.js').BEMHTML,
    bemtree = require('./desktop.bundles/index/index.bemtree.js').BEMTREE;

var langs = ['ru', 'en'],
    outputFolder = 'output-';

gulp.task('default', ['watch', 'browser-sync'], function () {
    enb.make();
    renderPages();
});

gulp.task('browser-sync', function() {
    console.log('bs');
    browserSync.init({
        files: outputFolder + 'en' + '/**',
        server: { baseDir: outputFolder + 'en' },
        port: 8008,
        browser: 'firefox',
        startPath: '/methodology/',
        online: false,
        notify: false
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
    watch(['content/**/*', 'desktop.bundles/index/index.bemhtml.js', 'desktop.bundles/index/index.bemtree.js'], function batch(events, done) {
        renderPages();
    });
});

function applyTemplates(page, lang, content) {

    page.content = content;

    bemtree.apply({
        block: 'root',
        data: {
            page: page,
            pages: pages[lang],
            lang: lang
        }
    }).then(function(bemjson) {
        bemjson.block = 'page';

        var dirName = outputFolder + lang + page.url;

        mkdirp(dirName);
        fs.writeFile(dirName + '/index.html', bemhtml.apply(bemjson));
    }).fail(function(e){
        console.log('Error:', e);
    });
}

function render(page, lang) {
    
    var content;

    if (/^http/.test(page.source)) {
        content = 'HTTP'; //??? request(source);
    } else if (/^\.\/(.*)/.test(page.source)) {
        // read content from local FS
        content = fs.readFileSync(page.source, 'utf8');
    } else {
        // store inlined content
        content = page.source;
    }

    var type = page.type || 'md'
    if (type === 'md') {
        marked(content, function(err, html) { applyTemplates(page, lang, content) });
    } else if (type === 'bemjson.js') {
        applyTemplates(page, lang, bemhtml.apply(vm.runInNewContext(content)));
    } else {
        throw "Unknown type";
    }
}

function renderPages() {
    langs.forEach(function(lang) {
        pages[lang].forEach(function(page) {
            render(page, lang);
        })
    });
}

// function html(vinyl) {
//     if (!vinyl || !vinyl.contents) return;

//     var path = vinyl.path,
//         re = new RegExp('(.*)\/' + config.rawFolder + '(.*)index\.(.*)\.html$'),
//         lang = path.replace(re, '$3'),
//         pageUrl = path.replace(re, '$2'),
//         page = _.where(pages[lang], { url: pageUrl })[0];

//     applyTemplates(page, lang, vinyl.contents.toString('utf8'));
// }


