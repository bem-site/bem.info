'use strict';

const path = require('path');
const baseUtil = require('../../util');

/**
 * Saves model to JSON file
 * @param {Model} model - application model instance
 * @param {Object} [options] - task options object
 * @param {String} [options.dataPath] - destination file path for model saving
 * @returns {Function}
 * @example
 * var Q = require('q');
 * var gorshochek = require('gorshochek');
 * var model = gorshochek.createModel();
 * Q()
 *    .then(tasks.core.mergeModels(model, {modelPath: './examples/model.ru.json'}))
 *    .then(tasks.core.saveModel(model))
 *    .then(tasks.core.rsync(model, {
 *        dest: './data',
 *        exclude: ['*.meta.json', 'model.json', '*.md']
 *    }))
 *    .done();
 */
module.exports = (model, options) => {
    options = options || {};
    return () => {
        const destinationPath = path.join(options.dataPath || baseUtil.getCacheFolder(), 'data.json');
        return baseUtil.writeFile(destinationPath, JSON.stringify(model.getPages()))
            .thenResolve(model)
            .catch(error => {
                console.error('Error occured while saving model to file');
                console.error(error.stack);
                throw error;
            });
    };
};
