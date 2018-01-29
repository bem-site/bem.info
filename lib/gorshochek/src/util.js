'use strict';

const fs = require('fs');
const path = require('path');
const Q = require('q');
const _ = require('lodash');
const got = require('got');
const fsExtra = require('fs-extra');

const debug = require('debug')('util');

/**
 * Returns path to cache folder
 * It can be set as process environment variable
 * By default it is pointed to ./.builder/cache relative to current working directory
 * @returns {String}
 */
exports.getCacheFolder = () => {
    return process.env.GORSHOCHEK_CACHE_FOLDER || './.builder/cache';
};

/**
 * Creates folder for given path if it does not exists yet
 * @param {String} folder - path to folder which should be created
 */
exports.createFolder = (folder) => {
    debug(`create folder: ${folder}`);
    fsExtra.ensureDirSync(folder);
};

/**
 * Copies file from sourcePath to destinationPath
 * @param {String} sourcePath - source file path
 * @param {String} destinationPath - destination file path
 */
exports.copyFile = (sourcePath, destinationPath) => {
    debug(`copy file from: ${sourcePath} to: ${destinationPath}`);
    return Q.denodeify(fsExtra.copy)(sourcePath, destinationPath);
};

/**
 * Reads file from local filesystem.
 * @param {Function} method - function which is used for reading
 * @param {String} filePath - path to file
 * @param {*} [fallbackValue] - value which will be returned if file does not exist on local filesystem
 * @returns {Promise}
 * @private
 */
function _readFile(method, filePath, fallbackValue) {
    return Q.denodeify(method)(filePath, {encoding: 'utf-8'})
        .catch(error => {
            if(fallbackValue && error.code === 'ENOENT') {
                return fallbackValue;
            }
            console.error(`Can\'t read file ${filePath}`);
            throw error;
        });
}

/**
 * Reads file from local filesystem
 * @param {String} filePath - path to file on local filesystem
 * @param {*} [fallbackValue] - value which will be returned if file does not exist on local filesystem
 * @returns {Promise}
 */
exports.readFile = (filePath, fallbackValue) => {
    debug(`read file from: ${filePath}`);
    return _readFile(fs.readFile, filePath, fallbackValue);
};

/**
 * Read JSON file from local filesystem
 * @param {String} filePath - path to file
 * @param {*} [fallbackValue] - value which will be returned if file does not exist on local filesystem
 * @returns {Promise}
 */
exports.readJSONFile = (filePath, fallbackValue) => {
    debug(`read JSON file from: ${filePath}`);
    return _readFile(fsExtra.readJSON, filePath, fallbackValue);
};

/**
 * Reads file from cache folder
 * @param {String} filePath - path to file (relative to cache folder)
 * @param {Object|Array} [fallbackValue] value which will be returned if file does not exist on local filesystem
 * @returns {Promise}
 */
exports.readFileFromCache = (filePath, fallbackValue) => {
    debug(`read file from cache: ${filePath}`);
    return (path.extname(filePath) === '.json' ?
        this.readJSONFile : this.readFile)(path.join(this.getCacheFolder(), filePath), fallbackValue);
};

/**
 * Writes file to cache folder
 * @param {String} filePath - path to file (relative to cache folder)
 * @param {String} content of file
 * @returns {Promise}
 */
exports.writeFileToCache = (filePath, content) => {
    debug(`write file to cache: ${filePath}`);
    return this.writeFile(path.join(this.getCacheFolder(), filePath), content);
};

/**
 * Writes file to local filesystem
 * @param {String} filePath - path to file
 * @param {String} content - content of file
 * @returns {Promise}
 */
exports.writeFile = (filePath, content) => {
    debug(`write file to: ${filePath}`);
    const dirPath = path.dirname(filePath);
    return Q.denodeify(fsExtra.ensureDir)(dirPath)
        .then(() => {
            return Q.denodeify(fs.writeFile)(filePath, content, {encoding: 'utf-8'});
        })
        .catch(error => {
            console.error(`Error occured while saving file ${filePath}`);
            throw error;
        });
};

/**
 * Loads data from given url and pipes as stream to filePath resolved from cache folder
 * Returns promise with fallbackValue on error
 * @param {String} url - url of remote source
 * @param {String} filePath - path for file
 * @param {Object|null} fallbackValue which should be returned on error
 * @returns {Promise}
 */
exports.loadFileToCacheFromUrl = (url, filePath, fallbackValue) => {
    debug(`load file to cache from ${url} to ${filePath}`);

    const fullPath = path.join(this.getCacheFolder(), filePath);
    const defer = Q.defer();

    function onError(error) {
        console.error(`Error occurred while loading: ${url}`);
        console.error(error.stack);
        defer.resolve(fallbackValue);
    }

    got.stream(url)
        .on('error', onError)
        .pipe(fs.createWriteStream(fullPath))
        .on('close', () => defer.resolve(filePath))
        .on('error', onError);

    return defer.promise;
};

exports.isFileExists = (filePath) => {
    debug(`is file exists: ${filePath}`);

    return Q.denodeify(fs.stat)(filePath)
        .then(stats => stats.isFile())
        .catch(error => false);
};

/**
 * Processes all pages in model which satisfies to given criteria function
 * @param {Model} model - application model instance
 * @param {Function} criteria - page criteria function
 * @param {Function} processFunc - function which will be applied to each of pages filtered by criteria
 * @param {Number} portionSize - number of portion of pages for parallel operations
 * @returns {Promise}
 */
exports.processPagesAsync = (model, criteria, processFunc, portionSize) => {
    portionSize = portionSize || 5;
    criteria = criteria || (() => true);

    return _(model.getPages())
        .filter(criteria)
        .chunk(portionSize)
        .reduce((prev, portion, index) => {
            return prev.then(() => {
                debug('process portion of pages in range: %s - %s', index * portionSize, (index + 1) * portionSize);
                return Q.allSettled(portion.map(processFunc.bind(null, model)));
            });
        }, Q());
};

// try to create cache folder on initialization
exports.createFolder(exports.getCacheFolder());
