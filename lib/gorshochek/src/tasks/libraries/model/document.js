'use strict';

const path = require('path');
const Base = require('./base');

/**
 * @exports
 * @class Document
 * @desc library document model class
 */
class Document extends Base {
    /**
     * Document constructor
     * @param {Object}    version data object
     * @param {String}    version.language - language
     * @param {String}    version.baseUrl - base libraries url
     * @param {String}    version.basePath - base path for libraries file inside cache folder
     * @param {String}    version.lib - name of library
     * @param {String}    version.version - name of library version
     * @param {String}    document - name of document
     * @constructor
     */
    constructor(version, document) {
        super();

        /**
         * Library version data object
         * @type {{language: String, baseUrl: String, basePath: String, lib: String, version: String}}
         */
        this.version = version;

        /**
         * Name of document
         * @type {String}
         */
        this.document = document;
    }

    /**
     * Returns title for document
     * @param {Object} data - document data object
     * @returns {String}
     */
    getTitle(data) {
        const language = this.version.language;
        const TITLES = {
            changelog: {en: 'Changelog', ru: 'История изменений'},
            migration: {en: 'Migration', ru: 'Миграция'},
            notes: {en: 'Release Notes', ru: 'Примечания к релизу'}
        };

        if(!data.title || !data.title[language]) {
            return TITLES[this.document][language];
        }

        return data.title[language];
    }

    /**
     * Returns source url for document on github
     * @param {Object} data - document data object
     * @returns {String|Null}
     * @private
     */
    _getSourceUrl(data) {
        const language = this.version.language;
        return (data.url && data.url[language]) ? data.url[language] : null;
    }

    /**
     * Saves document content into linked file
     * @param {Object} data - document data object
     * @returns {Promise}
     * @private
     */
    _setSource(data) {
        const {basePath, baseUrl, lib, version, language} = this.version;
        const sourcePath = path.join(basePath, lib, version, this.document);
        const filePath = path.join(sourcePath, 'index.html');
        const contentFilePath = [baseUrl, lib, version, this.document, 'index.html'].join(path.sep);

        const content = data.content ? data.content[language] : null;
        if(!content) {
            this.setValue('published', false);
        }

        return this.saveFile(filePath, content, false).then(() => {
            return this.setValue('contentFile', contentFilePath);
        });
    }

    /**
     * Processes document data
     * @param {Object} data - document data object
     * @returns {Promise}
     */
    processData(data) {
        const version = this.version;

        return this
            .setValue('url', [version.baseUrl, version.lib, version.version, this.document].join('/'))
            .setValue('aliases', []) // алиасы или редиректы
            .setValue('view', 'post') // представление
            .setValue('lib', version.lib) // название библиотеки
            .setValue('version', version.version) // название версии библиотеки
            .setValue('document', this.document) // имя уровня переопредления WTF?
            .setValue('title', this.getTitle(data)) // имя уровня переопределения
            .setValue('published', true) // флаг о том что страница опубликована
            .setValue('updateDate', +(new Date())) // дата обновления
            .setValue('source', this._getSourceUrl(data))
            ._setSource(data)
            .then(this.getData.bind(this));
    }
}

module.export = Document;
