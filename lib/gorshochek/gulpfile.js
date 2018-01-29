'use strict';

const fs = require('fs');
const gulp = require('gulp');
const clean = require('gulp-clean');
const jscs = require('gulp-jscs');
const eslint = require('gulp-eslint');
const esdoc = require('gulp-esdoc');
const ghPages = require('gulp-gh-pages');

const SRC_PATH = './src/**/*.js';

gulp.task('clean-jsdoc', () => gulp.src('./jsdoc', {read: false}).pipe(clean()));
gulp.task('clean-lib', () => gulp.src('./lib', {read: false}).pipe(clean()));

gulp.task('eslint', () => {
    return gulp.src(SRC_PATH)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('jscs', () => gulp.src(SRC_PATH).pipe(jscs({configPath: './.jscs.js', esnext: true})));
gulp.task('lint', ['eslint', 'jscs']);

gulp.task('esdoc', ['clean-jsdoc'], () => {
    let esdocConfig = fs.readFileSync('./esdoc.json', 'utf-8');
    esdocConfig = JSON.parse(esdocConfig);
    gulp.src('./src').pipe(esdoc(esdocConfig));
});

gulp.task('copy-logo', ['esdoc'], () => gulp.src('./logo.jpg').pipe(gulp.dest('./jsdoc')));
gulp.task('ghPages', ['esdoc', 'copy-logo'], () => gulp.src('./jsdoc/**/*').pipe(ghPages()));
gulp.task('publish-doc', ['esdoc', 'copy-logo', 'ghPages']);
