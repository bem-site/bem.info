'use strict';

const Q = require('q');
const Base = require('./base');
const Block = require('./block');

/**
 * @exports
 * @class Level
 * @desc level library model class
 */
class Level extends Base {
    /**
     * Level constructor
     * @param {Object} version data object
     * @param {String} version.language - language
     * @param {String} version.baseUrl - base libraries url
     * @param {String} version.basePath - base path for libraries file inside cache folder
     * @param {String} version.lib - name of library
     * @param {String} version.version - name of library version
     * @param {String} level - name of block level
     * @constructor
     */
    constructor(version, level) {
        super();

        /**
         * Library version data object
         * @type {{language: String, baseUrl: String, basePath: String, lib: String, version: String}}
         */
        this.version = version;

        /**
         * Name of blocks level
         * @type {String}
         */
        this.level = level.replace('.docs', '').replace('.sets', '');
    }

    /**
     * Processes blocks level data
     * @param {Object} data - level data object
     * @returns {Promise}
     */
    processData(data) {
        const version = this.version;

        this.setValue('url', [version.baseUrl, version.lib, version.version, this.level].join('/'))
            .setValue('aliases', []) // алиасы или редиректы
            .setValue('view', 'level') // представление
            .setValue('lib', version.lib) // название библиотеки
            .setValue('version', version.version) // название версии библиотеки
            .setValue('level', this.level) // имя уровня переопредления
            .setValue('title', this.level) // имя уровня переопределения
            .setValue('published', true) // флаг о том что страница опубликована
            .setValue('updateDate', +(new Date())); // дата обновления

        // нужно создать данные для всех блоков данного уровня переопределения
        // сохранить файлы с документацией и jsdoc для каждого блока
        // и вернуть данные страниц блоков. После чего эти данные склеиваются друг с другом
        // и данными самого уровня переопределения в единый массив
        return Q.all(data.blocks.map(block => {
            return (new Block(this, block.name)).processData(block);
        }))
        .then(blocks => {
            return blocks.reduce((prev, item) => {
                return prev.concat(item);
            }, [this.getData()]);
        });
    }
}

module.export = Level;
