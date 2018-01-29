'use strict';

const _ = require('lodash');
const js2xml = require('js2xmlparser');
const baseUtil = require('../../util');

const debug = require('debug')('sitemap-xml');

/**
 * Creates and saves sitemap.xml file to cache folder
 * @param {Model} model - application model instance
 * @param {Object} options - task options
 * @param {String} options.host - host string
 * @returns {Function}
 * @example
 * var Q = require('q');
 * var gorshochek = require('gorshochek');
 * var model = gorshochek.createModel();
 * Q()
 *    .then(tasks.core.mergeModels(model, {modelPath: './examples/model.ru.json'}))
 *    .then(tasks.sitemap.createSitemapXML(model, {host: 'https://ru.bem.info'}))
 *    .then(tasks.core.saveModel(model))
 *    .then(tasks.core.rsync(model, {
 *        dest: './data',
 *        exclude: ['*.meta.json', 'model.json', '*.md']
 *    }))
 *    .done();
 */
module.exports = (model, options) => {
    options = options || {};

    // option host is required parameter
    if(!options.host) {
        throw new Error('Host parameter undefined. It is necessary for sitemap.xml creation');
    }

    const DEFAULT_SEARCH_PARAMS = {changefreq: 'weekly', priority: 0.5};

    /**
     * Builds js sitemap presentation
     * Also take into account:
     * 1. page aliases
     * 2. page published state
     * 3. individual page search settings
     * @returns {Object}
     */
    function buildSiteMapModel() {
        return model.getPages().reduce((siteMap, page) => {
            const urls = [page.url].concat(page.aliases || []);
            const search = page.search || DEFAULT_SEARCH_PARAMS;

            if(page.published) {
                urls.forEach((url) => {
                    debug(`page: ${options.host + url} ${search.changefreq} ${search.priority}`);
                    siteMap.push(_.extend({loc: options.host + url}, search));
                });
            }
            return siteMap;
        }, []);
    }

    return () => {
        return _(buildSiteMapModel())
            .thru(value => ({url: value}))
            .thru(js2xml.bind(this, 'urlset'))
            .thru(baseUtil.writeFileToCache.bind(baseUtil, 'sitemap.xml'))
            .value()
            .thenResolve(model)
            .catch(error => {
                console.error('Error occured while saving sitemap.xml file');
                console.error(error.stack);
                throw error;
            });
    };
};
