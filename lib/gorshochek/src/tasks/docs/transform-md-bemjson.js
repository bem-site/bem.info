'use strict';

const Q = require('q');
const path = require('path');
const mdToBemjson = require('md-to-bemjson');

const baseUtil = require('../../util');

/**
 * Transforms page content source files from markdown format to bemjson
 * @param {Model} model - application model instance
 * @param {Object} options - task options
 * @param {Object} [options.mdToBemjson] - md-to-bemjson options
 * @param {Function} [options.templates] - bem-xjst templates
 * @param {Function} [options.processHTML] - function to process HTML before saving to file
 * @param {Number} [options.concurrency] - number of pages processed at the same time
 * @returns {Function}
 * @example
 * var Q = require('q');
 * var gorshochek = require('gorshochek');
 * var model = gorshochek.createModel();
 * Q()
 *    .then(tasks.core.mergeModels(model, {modelPath: './examples/model.ru.json'}))
 *    .then(tasks.docs.loadSourcesFromLocal(model))
 *    .then(tasks.docs.transformMdToHtml(model))
 *    .then(tasks.core.saveModel(model))
 *    .then(tasks.core.rsync(model, {
 *        dest: './data',
 *        exclude: ['*.meta.json', 'model.json', '*.md']
 *    }))
 *    .done();
 */
module.exports = (model, options) => {
    options = options || {};
    options.concurrency = options.concurrency || 20;

    /**
     * Returns true if given page has contentFile field
     * and value of this field ends on .md
     * @param {Object} page - model page object
     * @returns {Boolean}
     */
    function hasMarkdownSource(page) {
        return !!(page.contentFile && page.contentFile.match(/\.md$/));
    }

    /**
     * Transforms MD into bemjson.
     * @param {Object} page - page object
     * @param {Object} md - markdown content of page
     * @returns {String}
     */
    function transform(page, md) {
        return Q(mdToBemjson.convert(md, options.mdToBemjson))
            .then(bemjson => JSON.stringify(bemjson, null, 2))
            .catch(error => {
                console.error(`Error occur while transform md -> html for page: ${page.url}`);
                console.error(error.stack);
                throw error;
            });
    }

    /**
     * Transform md content of page source file into bemjson page
     * @param {Model} model - data model
     * @param {Object} page - page object
     * @returns {Promise}
     */
    function processPage(model, page) {
        const sourceFilePath = page.contentFile;
        const mdFileDirectory = path.dirname(sourceFilePath);
        const htmlFilePath = path.join(mdFileDirectory, 'index.bemjson.js');

        let contents = [];

        return Q(sourceFilePath)
            .then(baseUtil.readFileFromCache.bind(baseUtil))
            .then(transform.bind(null, page))
            .then(page => {
                // First heading is treated as the page title and skipped.
                // Sections = headings at level (titleLevel + 1) — covers both
                // h1-titled docs (sections = h2) and h2-titled docs (sections = h3).
                const headings = JSON.parse(page).content.filter(unit => unit.level);
                if (headings.length > 0) {
                    const sectionLevel = headings[0].level + 1;
                    contents = headings.filter((h, idx) => idx > 0 && h.level === sectionLevel);
                }

                return page;
            })
            .then(baseUtil.writeFileToCache.bind(baseUtil, htmlFilePath))
            .then(() => {
                page.contentFile = htmlFilePath;
                page.contents = contents;

                return page;
            });
    }

    return () => {
        return baseUtil
            .processPagesAsync(model, hasMarkdownSource, processPage, options.concurrency)
            .thenResolve(model);
    };
};
