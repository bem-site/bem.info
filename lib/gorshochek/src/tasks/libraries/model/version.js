'use strict';

const path = require('path');
const Q = require('q');
const Base = require('./base');
const Document = require('./document');
const Level = require('./level');

/**
 * @exports
 * @class Version
 * @desc version library model class
 */
class Version extends Base {
    /**
     * Version constructor
     * @param {String} baseUrl - base libraries url
     * @param {String} basePath - base path for libraries file inside cache folder
     * @param {String} lib - name of library
     * @param {String} version - name of library version
     * @param {String} language - array of languages
     * @constructor
     */
    constructor(baseUrl, basePath, lib, version, language) {
        super();

        /**
         * Base url for all libraries pages
         * @type {String}
         */
        this.baseUrl = baseUrl;

        /**
         * Base path on cache folder for all libraries data files
         * @type {String}
         */
        this.basePath = basePath;

        /**
         * language
         * @type {String}
         */
        this.language = language;

        /**
         * Name of library
         * @type {String}
         */
        this.lib = lib;

        /**
         * Name of library version
         * @type {String}
         */
        this.version = version.replace(/\//g, '-');
    }

    /**
     * Returns source urls per languages
     * @param {Object} data - document data object
     * @returns {*}
     * @private
     */
    _getSourceUrl(data) {
        if(!data.url) {
            return null;
        }

        const language = this.version.language;
        return language !== 'en' ? `/README.${language}.md` : '/README.md';
    }

    _setSource(data) {
        const readme = data.docs ? data.docs['readme'] : data['readme'];
        const basePath = path.join(this.basePath, this.lib, this.version);
        const filePath = path.join(basePath, 'index.html');
        const content = (readme && readme.content) ? readme.content[this.version.language] : null;

        return this.saveFile(filePath, content, false).then(() => {
            return this.setValue('contentFile',
                [this.baseUrl, this.lib, this.version, 'index.html'].join(path.sep));
        });
    }

    /**
     * Processes all library version documents
     * @param {Object} data - library version data object
     * @returns {Promise}
     * @private
     */
    _processDocuments(data) {
        const documents = data['docs'] || {};
        const promises = Object.keys(documents)
            .filter(item => {
                return item !== 'readme';
            })
            .map(item => {
                return (new Document(this, item)).processData(documents[item]);
            });

        return Q.all(promises);
    }

    /**
     * Processes all block levels
     * @param {Object} data - library version data object
     * @returns {Promise}
     * @private
     */
    _processLevels(data) {
        const levels = data['levels'];

        if(!levels || !levels.length) {
            return Promise.resolve([]);
        }

        return Q.all(levels.map(level => {
            return (new Level(this, level.name).processData(level));
        }));
    }

    /**
     * Saves json content into file in cache folder
     * @param {Object} content data object
     * @returns {Promise}
     * @private
     */
    _saveToCache(content) {
        return this.saveFile(path.join(this.basePath, this.lib, this.version, 'cache.json'), content, true);
    }

    /**
     * Processes version data
     * @param {Object} data - version data object
     * @returns {Promise}
     */
    processData(data) {
        return this
            .setValue('url', `${this.baseUrl}/${this.lib}/${this.version}`)
            .setValue('aliases', []) // алиасы или редиректы
            .setValue('view', 'post') // представление
            .setValue('lib', this.lib) // название библиотеки
            .setValue('version', this.version) // название версии библиотеки
            .setValue('deps', data.deps) // зависимости
            .setValue('title', this.version)
            .setValue('published', true) // флаг о том что страница опубликована
            .setValue('updateDate', +(new Date())) // дата обновления
            .setValue('hasIssues', data.hasIssues) // флаг того, что репозиторий биб-теки имеет раздел issues
            .setValue('source', this._getSourceUrl(data))
            ._setSource(data)
            .then(() => {
                return Q.all([
                    this._processDocuments(data),
                    this._processLevels(data)
                ]);
            })
            .spread((documents, levels) => {
                return [this.getData()].concat(documents).concat(levels);
            })
            .then(this._saveToCache.bind(this));
    }
}

module.export = Version;
