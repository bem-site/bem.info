'use strict';

var fs = require('fs'),
    request = require('request'),
    gulp = require('gulp'),
    enb = require('enb'),
    browserSync = require('browser-sync'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch'),
    pages = require('./content/pages.js'),
    data = require('./bin/get-data.js'),
    render = require('./bin/render.js'),
    config = require('./content/config.js'),
    rawFolder = config.rawFolder;

gulp.task('default', ['watch', 'browser-sync'], function () {
});

gulp.task('browser-sync', function() {
    browserSync.init(
        {
            files: 'output-en/**',
            server: {
                baseDir: 'output-en'
            },
            port: 8008,
            browser: 'firefox',
            startPath: '/methodology/',
            online: false,
            notify: false
        }
    );
});

gulp.task('watch', function () {
    var options = { ignoreInitial: false };

    watch(['content/*.{bemjson.js,md}', 'content/pages.js', 'content/config.js'], options, function (events, done) {
        data.getData();
    });

    watch(rawFolder + '/**/*.md', options, render.md);
    watch(rawFolder + '/**/*.bemjson.js', options, render.bemjson);
    watch(rawFolder + '/**/*.html', options, render.html);

    watch(['*blocks/**/*'], options, function (events, done) {
        enb.make();
    });

    watch('desktop.bundles/index/index.min.*', options, function (vinyl, done) {
        config.langs.forEach(function(lang) {
            vinyl.pipe(fs.createWriteStream(config.outputFolder + lang + '/' + vinyl.basename));
        });
    });

    // watch(['desktop.bundles/index/index.bemhtml.js', 'desktop.bundles/index/index.bemtree.js'], options, function (events, done) {
    //     config.langs.forEach(function(lang) {
    //         pages[lang].forEach(function(page) {
    //             render.applyTemplates(
    //                 page, lang,
    //                 fs.createReadStream(rawFolder + page.url + 'index.' + lang + '.html', 'utf8')
    //             )
    //         })
    //     });
    // });
});

