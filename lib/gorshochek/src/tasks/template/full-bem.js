const path = require('path');

const _ = require('lodash');
const Q = require('q');
const freeze = require('freeze');
const safeEval = require('node-eval');
const baseUtil = require('../../util');

const debug = require('debug')('full-bem');

/**
 * Applies BEMTREE + BEMHTML templates to each of model pages
 * Saves result html to destination dir
 * @param {Model} model - application model instance
 * @param {Object} options - task options object
 * @param {String} options.bemtree - path to BEMTREE template file
 * @param {String} options.bemhtml - path to BEMHTML template file
 * @param {String} [options.bundle] - bundle name. (index by default)
 * @param {String} [options.source] - source data directory path (./data by default)
 * @param {String} [options.static] - path to folder with static resources (./static by default)
 * @param {String} [options.destination] - output folder path for compiled html pages (./output by default)
 * @param {String} [options.destinationRoot] - output folder path for freezed images, frozen image URL is substraction of destinationRoot from full file path (`options.destination` by default)
 * @param {Number} [options.concurrency] - number of pages which should be processed per time
 * @param {Object} [options.ctx] - advanced context
 * @returns {Function}
 */
module.exports = function(model, options) {
    const DEFAULT_BUNDLE = 'index';

    options = options || {};

    if(!options.bemtree) {
        throw new Error('Path to BEMTREE template file was not set');
    }

    if(!options.bemhtml) {
        throw new Error('Path to BEMHTML template file was not set');
    }

    if(!options.ctx) {
        throw new Error('Context was not set')
    }

    options.bundle = options.bundle || DEFAULT_BUNDLE;
    options.source = options.source || './data';
    options.static = options.static || './static';
    options.destination = options.destination || './output';
    options.destinationRoot = options.destinationRoot || options.destination;
    options.concurrency = options.concurrency || 20;

    const BEMTREE = require(path.join(process.cwd(), options.bemtree)).BEMTREE;
    const BEMHTML = require(path.join(process.cwd(), options.bemhtml)).BEMHTML;

    function _bemhtml(bemjson) {
        return BEMHTML.apply({
            block: 'root',
            content: bemjson,
            freeze: freeze.file({
                folder: options.static,
                cutPrefix: options.destinationRoot
            })
        });
    }

    function getCriteria(page) {
        page.bundle = page.bundle || DEFAULT_BUNDLE;
        return page.bundle === options.bundle;
    }

    /**
     * Loads page content
     * @param {Object} page
     * @returns {Object}
     */
    function getPageContent(page) {
        if(!page.content && !page.contentFile) {
            return Q('');
        }

        return page.content
            ? Q(page.content)
            : baseUtil.readFile(path.join(options.source, page.contentFile), '');
    }

    /**
     * Creates bemjson via BEMTREE template
     * @param {Object[]} pages - array of pseudo pages for menu creation
     * @param {Object} page
     * @returns {*}
     */
    function createBEMJSON(pages, page) {
        const ctx = {};
        ctx.block = options.ctx.block;
        ctx.data = _.merge({page, pages}, options.ctx.data);
        return BEMTREE.apply(ctx);
    }

    /**
     * Saves compiled page html code into destination path
     * @param {Object} page
     * @param {String} html code for given page
     * @returns {Promise}
     */
    function saveCompiledPage(page, html) {
        const filePath = path.join(options.destination, page.url, 'index.html');
        debug(`${filePath} ${page.title}`);

        return baseUtil.writeFile(filePath, html);
    }

    /**
     * Compound page structure object for templating
     * @param {Object} page
     * @param {String} content - page content
     * @returns {Object} page
     */
    function compoundPage(page, content) {
        if(_.endsWith(page.contentFile, '.js')) {
            content = safeEval(content, page.contentFile);

            if(_.endsWith(page.contentFile, '.bemjson.js')) {
                content = _bemhtml(content);
            }
        }

        return _.set(page, 'content', content);
    }

    /**
     * Creates function for page processing
     * @returns {Function}
     */
    function createProcessPageFunc() {
        const pages = model.getPages();

        return (model, page) => {
            return Q(page)
                .then(getPageContent)
                .then(compoundPage.bind(null, page))
                .then(createBEMJSON.bind(null, pages))
                .then(_bemhtml)
                .then(saveCompiledPage.bind(null, page))
                .catch(error => {
                    console.error(`Error occurred while compiling page for url ${page.url}`);
                    console.error(error.stack);
                });
        }
    }

    return () => {
        return baseUtil
            .processPagesAsync(model, getCriteria, createProcessPageFunc(), options.concurrency)
            .thenResolve(model);
    };
};
