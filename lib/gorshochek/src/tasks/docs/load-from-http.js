'use strict';

const path = require('path');
const _ = require('lodash');
const gotModule = require('got');
const got = gotModule.default || gotModule;
const Q = require('q');
const baseUtil = require('../../util');

const debug = require('debug')('docs http(s) load');

/**
 * Loads pages embedded sources from local filesystem
 * @param {Model} model - application model instance
 * @param {Object} [options] advanced task options
 * @param {Number} [options.concurrency] - number of pages processed at the same time
 * @param {Number} [options.timeout] - Milliseconds to wait for a server to send
 * response headers before aborting request with ETIMEDOUT error
 * @param {Number} [options.retries] - Number of request retries when network errors happens
 * @param {Boolean} [options.fallbackToCache] - Use cached source if remote loading fails
 * @returns {Function}
 * @example
 * var Q = require('q');
 * var gorshochek = require('gorshochek');
 * var model = gorshochek.createModel();
 * Q()
 *    .then(tasks.core.mergeModels(model, {modelPath: './examples/model.ru.json'}))
 *    .then(tasks.docs.loadSourcesFromHttp(model))
 *    .then(tasks.core.saveModel(model))
 *    .then(tasks.core.rsync(model, {
 *        dest: './data',
 *        exclude: ['*.meta.json', 'model.json', '*.md']
 *    }))
 *    .done();
 */
module.exports = function(model, options) {
    options = options || {};
    options.concurrency = options.concurrency || 20;

    options.timeout = options.timeout || 10000;
    options.retries = options.retries || 5;

    /**
     * Returns true if page[language] exists and have source
     * which can be matched as relative file path on filesystem. Otherwise returns false
     * @param {Object} page - page object
     * @returns {Boolean}
     */
    function hasLocalSource(page) {
        const source = page.source;
        return baseUtil.isPagePublished(page) && !!source && !!source.match(/^https?/);
    }

    /**
     * Loads page data from given url via http(s) protocol
     * @param {String} url for loading page source
     * @returns {Promise}
     */
    function loadDataFromUrl(url) {
        return got(url, _.pick(options, ['timeout', 'retries']))
            .then(response => response.body)
            .catch(error => {
                const errorUrl = error.options && error.options.url;
                const host = error.host || (errorUrl && errorUrl.host);
                const errorPath = error.path || (errorUrl && (errorUrl.pathname + errorUrl.search));
                let baseErrorMessage = `Error occur while loading source from: ${host} ${errorPath}`;
                if(error instanceof gotModule.HTTPError) {
                    baseErrorMessage += ` ${error.response.statusCode} ${error.response.statusMessage}`;
                } else if(error instanceof gotModule.MaxRedirectsError) {
                    baseErrorMessage += ' maximum redirects count exceed';
                } else if(error instanceof gotModule.RequestError) {
                    baseErrorMessage += ` ${error.code}`;
                }
                console.error(baseErrorMessage);
                throw error;
            });
    }

    function useCachedSource(page, cacheFilePath) {
        console.warn(`Use cached source for page ${page.url}: ${cacheFilePath}`);

        return page;
    }

    /**
     * Loads file to cache
     * @param {Model} model - data model
     * @returns {Promise}
     */
    function processPage(model, page) {
        debug(`load source viw http(s) for page with url: => ${page.url}`);

        const filePath = page.source; // относительный путь к файлу
        const fileName = path.basename(filePath); // имя файла (с расширением)
        const fileExt = path.extname(fileName); // расширение файла

        const cacheFilePath = path.join(page.url, ('index' + fileExt));

        const onAddedDocument = (promise) => {
            debug('Doc added: %s %s', page.url, page.title);
            model.pushChangeToAddedGroup({type: 'doc', url: page.url, title: page.title});
            return baseUtil.writeFileToCache(cacheFilePath, promise.value);
        };
        const onModifiedDocument = (promise) => {
            debug('Doc modified: %s %s', page.url, page.title);
            model.pushChangeToModifiedGroup({type: 'doc', url: page.url, title: page.title});
            return baseUtil.writeFileToCache(cacheFilePath, promise.value);
        };

        return Q.allSettled([
            baseUtil.readFileFromCache(cacheFilePath),
            loadDataFromUrl(page.source)
        ]).spread((cache, remote) => {
            if(remote.state === 'rejected') {
                if(options.fallbackToCache && cache.state === 'fulfilled') {
                    return useCachedSource(page, cacheFilePath);
                }

                return Q.reject(remote);
            }

            if(cache.state === 'rejected') {
                return onAddedDocument(remote);
            }

            if(cache.value !== remote.value) {
                return onModifiedDocument(remote);
            }

            return Q(page);
        }).then(() => {
            page.contentFile = cacheFilePath;
            return page;
        });
    }

    return function() {
        return baseUtil
            .processPagesAsync(model, hasLocalSource, processPage, options.concurrency)
            .thenResolve(model);
    };
};
