'use strict';

const _ = require('lodash');
const Api = require('github');

const debug = require('debug')('github api');

class Github {
    /**
     * Constructor
     * @param {Object} options object
     */
    constructor(options) {
        options = options || {};
        const defaultParams = {
            version: '3.0.0',
            protocol: 'https',
            timeout: 60000,
            debug: false
        };

        const githubHosts = options.githubHosts || [];
        this._apis = githubHosts.reduce((prev, item) => {
            const url = item.url;
            delete item.url;

            prev[url] = new Api(_.extend(item, defaultParams));

            options.token ?
                prev[url].authenticate({type: 'oauth', token: options.token}) :
                console.warn(`No github authorization token were set.
                    Number of requests will be limited by 60 requests per hour according to API rules`);

            return prev;
        }, {public: this._initPublicAPI(options, defaultParams)});
    }

    /**
     * Initialize public github API
     * @param {Object} options object
     * @param {Object} options.token - github auth token
     * @param {Object} defaultParams - default github options
     * @private
     */
    _initPublicAPI(options, defaultParams) {
        const publicAPI = new Api(_.extend({host: 'api.github.com'}, defaultParams));
        const token = options.token;

        token ?
            publicAPI.authenticate({type: 'oauth', token}) :
            console.warn(`No github authorization token were set.
                Number of requests will be limited by 60 requests per hour according to API rules`);

        return publicAPI;
    }

    /**
     * Executes given github API method with given options and headers
     * @param {String} method - name of github method
     * @param {Object} options
     * @param {Object} headers - github request headers
     * @param {Function} callback function
     * @public
     */
    executeAPIMethod(method, options, headers, callback) {
        // максимальное число допустимых повторных обращений к github в случае возникновения ошибки
        const ATTEMPTS = 5;

        debug(`github API call for ${method} with options:`);
        debug(' - host: ' + options.host);
        debug(' - user: ' + options.user);
        debug(' - repo: ' + options.repo);
        debug(' - ref: ' + options.ref);
        debug(' - path: ' + options.path);

        const api = this._apis[options.host] || this._apis.public;
        const requestFunc = (count) => {
            debug(`attempt #${count}`);
            return api.repos[method](_.extend(headers ? {headers} : {}, options),
                (error, result) => {
                    if(!error) {
                        return callback(null, result);
                    }

                    // если число попыток не превысило максимально возможное, то повторно запрашиваем данные
                    if(count < ATTEMPTS) {
                        return requestFunc(++count);
                    }

                    // выводим сообщение об ошибке
                    console.error(`GH: ${method} failed with ${error.message}`);
                    console.error(`host: => ${options.host}`);
                    console.error(`user: => ${options.user}`);
                    console.error(`repo: => ${options.repo}`);

                    options.ref && console.error(`ref: => ${options.ref}`);
                    options.path && console.error(`path: => ${options.path}`);

                    // отправляем callback с ошибкой если все попытки завершились с ошибкой
                    callback(error);
                });
        };

        requestFunc(0);
    }
}

module.exports = Github;
