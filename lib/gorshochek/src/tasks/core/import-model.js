'use strict';

const path = require('path');
const baseUtil = require('../../util');

/**
 * Import model json file and fill model pages from it
 * @param {Model} model - application model instance
 * @param {Object} [options] - task options object
 * @param {String} [options.modelPath] - model file path
 * @returns {Function}
 */
module.exports = (model, options) => {
    options = options || {};

    if(!options.modelPath) {
        throw new Error('modelPath should be defined in task options');
    }

    return () => {
        return baseUtil.readJSONFile(options.modelPath, [])
            .then(pages => {
                model.setPages(pages);
                return model;
            });
    };
};
