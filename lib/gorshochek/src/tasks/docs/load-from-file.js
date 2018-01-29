'use strict';

const path = require('path');
const Q = require('q');
const baseUtil = require('../../util');

const debug = require('debug')('docs file load');

/**
 * Loads pages embedded sources from local filesystem
 * @param {Model} model - application model instance
 * @returns {Function}
 * @example
 * var Q = require('q');
 * var gorshochek = require('gorshochek');
 * var model = gorshochek.createModel();
 * Q()
 *    .then(tasks.core.mergeModels(model, {modelPath: './examples/model.ru.json'}))
 *    .then(tasks.docs.loadSourcesFromLocal(model))
 *    .then(tasks.core.saveModel(model))
 *    .then(tasks.core.rsync(model, {
 *        dest: './data',
 *        exclude: ['*.meta.json', 'model.json', '*.md']
 *    }))
 *    .done();
 */
module.exports = (model) => {
    /**
     * Returns true if page[language] exists and have source
     * which can be matched as relative file path on filesystem. Otherwise returns false
     * @param {Object} page - page object
     * @returns {Boolean}
     */
    function hasLocalSource(page) {
        const source = page.source;
        return !!source && !!source.match(/^(\/)?([^\/\0]+(\/)?)+$/);
    }

    /**
     * Loads file to cache
     * @param {Model} model - data model
     * @returns {Promise}
     */
    function processPage(model, page) {
        debug(`load local file page with url: => ${page.url}`);

        const filePath = page.source; // относительный путь к файлу
        const fileName = path.basename(filePath); // имя файла (с расширением)
        const fileExt = fileName.replace(/.*?\./, ''); // расширение файла

        const absFilePath = path.resolve(filePath);
        const cacheFilePath = path.join(page.url, ('index.' + fileExt));

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
            baseUtil.readFile(absFilePath)
        ]).spread((cache, local) => {
            if(local.state === 'rejected') {
                return Q.reject(local);
            }

            if(cache.state === 'rejected') {
                return onAddedDocument(local);
            }

            if(cache.value !== local.value) {
                return onModifiedDocument(local);
            }

            return Q(page);
        }).then(() => {
            page.contentFile = cacheFilePath;
            return page;
        });
    }

    return () => {
        return baseUtil
            .processPagesAsync(model, hasLocalSource, processPage, 20)
            .thenResolve(model);
    };
};
