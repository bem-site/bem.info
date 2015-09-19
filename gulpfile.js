'use strict';

var fs = require('fs'),
    request = require('request'),
    gulp = require('gulp'),
    browserSync = require('browser-sync'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch'),
    mkdirp = require('mkdirp'),
    rimraf = require('rimraf'),
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

    watch(['content/pages.js', 'content/config.js'], options, batch(function (events, done) {
        data.getData();
    }));

    watch(rawFolder + '/**/*.md', options, render.md);
    watch(rawFolder + '/**/*.bemjson.js', options, render.bemjson);
    watch(rawFolder + '/**/*.html', options, render.html);

    // watch(rawFolder + '/**/*.md', options, batch(function (events, done) {
    //     render.md(events[0]);
    // }));
    // watch(rawFolder + '/**/*.bemjson.js', options, batch(function (events, done) {
    //     render.bemjson(events[0]);
    // }));
    // watch(rawFolder + '/**/*.html', options, batch(function (events, done) {
    //     render.html(events[0]);
    // }));

    // watch(
    //     [
    //         'desktop.bundles/index/index.bemhtml.js',
    //         'desktop.bundles/index/index.bemtree.js'
    //     ], options, batch(function (events, done) {
    //         //
    //     }));
});

