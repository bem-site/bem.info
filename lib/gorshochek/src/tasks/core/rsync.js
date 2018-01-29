'use strict';

const Q  = require('q');
const baseUtil = require('../../util');
const rsyncSlim = require('rsync-slim');

const debug = require('debug')('rsync');

/**
 * Synchronize files between different folders
 * @param {Model} model - application model instance
 * @param {Object} [options] - task options object
 * @param {String} [options.src] - source path. (cache folder by default)
 * @param {String} [options.dest] - destination path. (./data folder by default)
 * @param {String} [options.options] - rsync options.
 * @param {String[]} [options.exclude] - array of exclude patterns. Empty array by default
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
module.exports = function(model, options) {
    options = options || {};

    /**
     * Returns rsync options object
     * @returns {{src: (String), dest: (String), sync: Boolean, options: (String)}}
     */
    function prepareRsyncOptions() {
        const src = options.src || baseUtil.getCacheFolder() + '/';
        const dest = options.dest || './data';
        let rawOptions = options.options || '-rd --delete --delete-excluded --force';

        if(options.exclude) {
            rawOptions = options.exclude.reduce((prev, pattern) => {
                prev += ' --exclude \'' + pattern + '\'';
                return prev;
            }, rawOptions);
        }

        const rsyncOptions = {src, dest, sync: false, options: rawOptions};

        debug(rsyncOptions);
        return rsyncOptions;
    }

    return function() {
        return Q.denodeify(rsyncSlim)(prepareRsyncOptions())
            .thenResolve(model)
            .catch(error => {
                console.error('file synchronization failed');
                console.error(error.stack);
                throw error;
            });
    };
}
