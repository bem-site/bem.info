'use strict';

const path = require('path');
const _ = require('lodash');
const Q = require('q');
const baseUtil = require('../../util');

const debug = require('debug')('meta-tags');

/**
 * Generates tag pages and add them into model
 * @param {Model} model - application model instance
 * @param {Object} [options] - task options
 * @param {String} [options.baseUrl] - base url for tags section
 * @param {String} [options.baseTitle] - base title for tags section
 * @returns {Function}
 * @example
 * var Q = require('q');
 * var gorshochek = require('gorshochek');
 * var model = gorshochek.createModel();
 * Q()
 *    .then(tasks.core.mergeModels(model, {modelPath: './examples/model.ru.json'}))
 *    .then(tasks.meta.createTagPages(model, {baseUrl: '/tags', baseTitle: 'Tags'}))
 *    .then(tasks.core.saveModel(model))
 *    .then(tasks.core.rsync(model, {
 *        dest: './data',
 *        exclude: ['*.meta.json', 'model.json', '*.md']
 *    }))
 *    .done();
 */
module.exports = (model, options) => {
    options = options || {};
    options.baseUrl = options.baseUrl || '/tags/';
    options.baseTitle = options.baseTitle || 'Tags';

    options.baseUrl = options.baseUrl + (_.endsWith(options.baseUrl, '/') ? '' : '/');

    /**
     * Returns array of unique tag values collected from all model pages
     * @param {Model} model - application model instance
     * @returns {String[]}
     */
    function collectTags(model) {
        const tags = model.getPages().reduce((prev, page) => {
            page.tags = page.tags || [];
            return prev.concat(page.tags);
        }, []);

        return _(tags).compact().uniq().value();
    }

    /**
     * Returns object with common tag page properties
     * @returns {Object}
     * @private
     */
    function _getCommonPageProperties() {
        return {
            aliases: [],
            published: true,
            view: 'tag'
        };
    }

    /**
     * Generates model pages for each tag
     * @param {Model} model - application model instance
     * @param {String[]} tags - array of tags
     * @returns {Object[]}
     */
    function generateTagPages(model, tags) {
        debug(`generate pages for tags: ${tags}`);

        function _getByTag(tag) {
            return model.getPages()
                .filter(page => _.includes(page.tags, tag))
                .map(_.partialRight(_.pick, ['url', 'title', 'tags']));
        }

        return tags.map(tag => _.extend({
            url: options.baseUrl + tag + '/',
            site: options.baseUrl,
            title: tag,
            content: _getByTag(tag)
        }, _getCommonPageProperties()));
    }

    /**
     * Generates base page for tags section
     * @param {Model} model - application model instance
     * @returns {Object}
     */
    function generateBaseTagsPage(model) {
        debug(`generate base page for tag pages section`);
        return _.extend({
            url: options.baseUrl,
            site: options.baseUrl,
            title: options.baseTitle,
            content: model.getPages().map(_.partialRight(_.pick, ['url', 'title', 'tags']))
        }, _getCommonPageProperties());
    }

    /**
     * Generates map where tag values are map keys and objects with
     * url and title fields are map values
     * @param {Object[]} tagPages - array of generated tag page models
     * @returns {Object}
     */
    function generateTagPagesMap(tagPages) {
        return tagPages.reduce((prev, tagPage) => {
            prev[tagPage.title] = _.pick(tagPage, ['url', 'title']);
            return prev;
        }, {});
    }

    function _replaceTags(tagPagesMap, obj) {
        obj.tags && (obj.tagLinks = obj.tags.map(tag => tagPagesMap[tag]));
        return obj;
    }

    /**
     * Replace all tag items in model pages to objects with url and title fields
     * @param {Model} model - application model instance
     * @param {Object} tagPagesMap
     * @returns {Object}
     */
    function replaceTagsOnLinksForPages(model, tagPagesMap) {
        model.getPages().map(_replaceTags.bind(null, tagPagesMap));
        return tagPagesMap;
    }

    /**
     * Replace all tags in selected sources for tag pages
     * Needs for suitable further templating
     * @param {Object[]} tagPages - array of tag pages
     * @param {Object} tagPagesMap
     * @returns {Object[]}
     */
    function replaceTagsOnLinksForTagPages(tagPages, tagPagesMap) {
        return tagPages.map(page => {
            page.content.map(_replaceTags.bind(null, tagPagesMap));
            return page;
        });
    }

    /**
     * Separates source from tag page and store it into linked json file
     * @param {Object} page - model page object
     * @returns {Promise}
     */
    function saveTagPageSource(page) {
        const filePath = path.join(page.url, 'index.json');
        const fileContent = JSON.stringify(page.content);
        delete page.content;
        page.contentFile = filePath;
        return baseUtil.writeFileToCache(filePath, fileContent);
    }

    return () => {
        const tagPages = _(model)
            .thru(collectTags)
            .thru(generateTagPages.bind(null, model))
            .concat(generateBaseTagsPage(model))
            .value();

        return _(tagPages)
            .thru(generateTagPagesMap)
            .thru(replaceTagsOnLinksForPages.bind(null, model))
            .thru(replaceTagsOnLinksForTagPages.bind(null, tagPages))
            .map(saveTagPageSource)
            .thru(Q.all.bind(Q))
            .value()
            .then(() => {
                model.setPages(model.getPages().concat(tagPages));
                return model;
            });
    };
};
