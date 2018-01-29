'use strict';

const util = require('./util');

/**
 * Creates advanced meta-information for search service
 * @param {Model} model - application model instance
 * @returns {Function}
 * @example
 * var Q = require('q');
 * var gorshochek = require('gorshochek');
 * var model = gorshochek.createModel();
 * Q()
 *    .then(tasks.core.mergeModels(model, {modelPath: './examples/model.ru.json'}))
 *    .then(tasks.page.createSearchMeta(model))
 *    .then(tasks.core.saveModel(model))
 *    .then(tasks.core.rsync(model, {
 *        dest: './data',
 *        exclude: ['*.meta.json', 'model.json', '*.md']
 *    }))
 *    .done();
 */
module.exports = (model) => {
    return util.getExecFunction(model, (map, page) => {
        const urlSet = util.getParentUrls(page);
        page.meta = {
            breadcrumbs: urlSet.map(url => ({url, title: map[url]})),
            fields: {type: 'doc', keywords: page.tags || []}
        };
    });
};
