'use strict';

const _ = require('lodash');
const deepDiff = require('deep-diff');

/**
 * @desc Application model class
 */
class Model {
    constructor() {
        /**
         * Model changes
         * @type {{added: Array, modified: Array, removed: Array}}
         * @private
         */
        this._changes = {
            added: [],
            modified: [],
            removed: []
        };
        /**
         * Array of model pages
         * @type {Array}
         * @private
         */
        this._pages = [];
    }

    /**
     * Generates map with page urls as keys and page object as values
     * @param {Object[]} pages - array of page objects
     * @returns {Object}
     * @private
     */
    static _generateUrlPageMap(pages) {
        return pages.reduce((prev, page) => {
            prev[page.url] = page;
            return prev;
        }, {});
    }

    /**
     * Generates map with page urls as keys and page order indexes as values
     * @param {Object[]} pages - array of page objects
     * @returns {Object}
     * @private
     */
    static _generateUrlOrderMap(pages) {
        return pages.reduce((prev, page, index) => {
            prev[page.url] = index;
            return prev;
        }, {});
    }

    /**
     * Returns true if model has some non-empty changes of any type
     * @returns {Boolean}
     */
    hasChanges() {
        const changes = this.getChanges();
        return !!changes.added.length || !!changes.modified.length || !!changes.removed.length;
    }

    /**
     * Return model changes
     * @returns {{added: Array, modified: Array, removed: Array}|*}
     */
    getChanges() {
        return this._changes;
    }

    /**
     * Add new item to added changes group
     * @param {Object} item
     * @returns {Model}
     */
    pushChangeToAddedGroup(item) {
        this.getChanges().added.push(item);
        return this;
    }

    /**
     * Add new item to modified changes group
     * @param {Object} item
     * @returns {Model}
     */
    pushChangeToModifiedGroup(item) {
        this.getChanges().modified.push(item);
        return this;
    }

    /**
     * Add new item to removed changes group
     * @param {Object} item
     * @returns {Model}
     */
    pushChangeToRemovedGroup(item) {
        this.getChanges().removed.push(item);
        return this;
    }

    /**
     * Returns array of pages
     * @returns {Array|*}
     */
    getPages() {
        return this._pages;
    }

    /**
     * Sets array of pages
     * @param {Array} pages array
     * @returns {Model}
     */
    setPages(pages) {
        this._pages = pages;
        return this;
    }

    /**
     * Merges models and find differences
     * @param {Array} previousModel
     * @param {Array} currentModel
     * @returns {Model}
     */
    merge(previousModel, currentModel) {
        const modifiedPages = [];
        const nonModifiedPages = [];

        /*
         Для массивов объектов из нового и старого файлов моделей
         вызываем метод _generateUrlPageMap, который строит из данных массивов
         объекты, в которых ключами являются url страниц, а значениями сами объекты
         */
        const generateUrlPageMap = this.constructor._generateUrlPageMap;
        const newModel = generateUrlPageMap(currentModel);
        const oldModel = generateUrlPageMap(previousModel);

        const newPages = _.keys(newModel); // получить все url из новой модели
        let oldPages = _.keys(oldModel); // получить все url из старой модели

        /*
         Добавленные страницы можно получить вычислив разницу между массивом url из новой и старой моделей
         Для удаленных страниц наоборот надо вычислить разницу между массивом url из старой и новой моделей
         */
        const addedPages = _.difference(newPages, oldPages);
        const removedPages = _.difference(oldPages, newPages);

        removedPages.forEach(url => {
            this.pushChangeToRemovedGroup({type: 'page', url});
        });

        // отбрасываем удаленные страницы
        oldPages = _.difference(oldPages, removedPages);

        /*
         страницы в старой модели делятся на 2 группы:
         1. Страницы, мета-информация (набор полей в модели) для которых была изменена
         2. Страницы, которые остались неизменными
         Соответственно вычисляя глубокий diff делим старые страницы на 2 таких группы
         */
        oldPages.forEach(url => {
            deepDiff.diff(newModel[url], oldModel[url]) ?
                modifiedPages.push(url) : nonModifiedPages.push(url);
        });

        /*
         Начинаем строить финальный массив данных для обновленной модели
         Сначала добавляем как есть новые страницы, которых еще не было на сайте
         */
        // add new pages
        this.setPages(
            this.getPages().concat(addedPages.map(url => {
                this.pushChangeToAddedGroup({type: 'page', url});
                return newModel[url];
            }))
        );

        // Добавляем те страницы, которые не были изменены
        // add non-modified pages
        this.setPages(
            this.getPages().concat(nonModifiedPages.map(url => {
                return oldModel[url];
            }))
        );

        // Добавляем измененные страницы, предварительно внедряя изменения, которые
        // пришли, и новой модели
        // merge modifications
        // add modified pages
        this.setPages(
            this.getPages().concat(modifiedPages.map(url => {
                this.pushChangeToModifiedGroup({type: 'page', url});
                return _.merge(oldModel[url], newModel[url]);
            }, this))
        );

        // Restore original pages order in current model
        const orderMap = this.constructor._generateUrlOrderMap(currentModel);
        this.setPages(
            this.getPages().sort((a, b) => {
                return orderMap[a.url] - orderMap[b.url];
            })
        );

        return this;
    }

    /**
     * Normalize model.
     * Sets some default values and fix wrong
     * @returns {Model}
     */
    normalize() {
        /**
         *
         * @param {Object} page - object in model
         * @returns {Object} page
         */
        const normalizePage = (page) => {
            /**
             * В каждом объекте модели есть одно обязательное поле url
             * Для остальных полей нужно провести проверку и выставить значения по умолчанию
             *
             */

            page.aliases || (page.aliases = []); // массив алиасов
            page.published = typeof page.published === 'undefined' ? true : !!page.published;

            return page;
        };

        this.setPages(this.getPages().map(normalizePage));
        return this;
    }
}

module.exports = Model;
