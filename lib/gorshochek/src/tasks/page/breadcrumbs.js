'use strict';

const util = require('./util');

/*
 Для каждой страницы создаем
 поле breadcrumbs (хлебные крошки). В это поле записывается массив объектов типа
 [
    { url: '/', title: 'main page title' },
    { url: '/url1', title: 'url1 title' },
    { url: '/url1/url2', title: 'url2 title' }
 ]
 */

/**
 * Returns execution function for page breadcrumbs creation
 * @param {Model} model - application model instance
 * @returns {Function}
 * @example
 * var Q = require('q');
 * var gorshochek = require('gorshochek');
 * var model = gorshochek.createModel();
 * Q()
 *    .then(tasks.core.mergeModels(model, {modelPath: './examples/model.ru.json'}))
 *    .then(tasks.page.createBreadcrumbs(model))
 *    .then(tasks.core.saveModel(model))
 *    .then(tasks.core.rsync(model, {
 *        dest: './data',
 *        exclude: ['*.meta.json', 'model.json', '*.md']
 *    }))
 *    .done();
 */
module.exports = (model) => {
    return util.getExecFunction(model, (map, page) => {
        page.breadcrumbs = util
            .getParentUrls(page)
            .map(url => ({url, title: map[url]}));
    });
};
