'use strict';

const path = require('path');
const Q = require('q');
const GitHub = require('./github/index');
const baseUtil = require('../../util');

const debug = require('debug')('docs github load');

/**
 * Loads pages embedded sources from github via github API
 * @param {Model} model - application model instance
 * @param {Object} [options] - task options object
 * @param {String} [options.token] - github token. (needs for increasing github requests limit up to 5000 rph)
 * @param {Boolean} [options.updateDate] - if set to true then advanced meta-information
 * about last file modification date also will be loaded
 * @param {Boolean} [options.hasIssues] - if set to true then advanced meta-information about
 * issues section existence will be loaded
 * @param {Boolean} [options.branch] - if set to true then advance meta-information about source branch will be loaded.
 * If source is corresponded to tag reference then default repository branch name will be loaded
 * @returns {Function}
 * @example
 * var Q = require('q');
 * var gorshochek = require('gorshochek');
 * var model = gorshochek.createModel();
 * Q()
 *    .then(tasks.core.mergeModels(model, {modelPath: './examples/model.ru.json'}))
 *    .then(tasks.docs.loadSourcesFromGithub(model, {
 *        token: 'your github token',
 *        githubHosts: [{ host: 'api.github.company.com', url: 'github.company.com' }],
 *        updateDate: true,
 *        hasIssues: true,
 *        branch: true
 *    }))
 *    .then(tasks.core.saveModel(model))
 *    .then(tasks.core.rsync(model, {
 *        dest: './data',
 *        exclude: ['*.meta.json', 'model.json', '*.md']
 *    }))
 *    .done();
 */
module.exports = (model, options) => {
    options = options || {};

    const GITHUB_URL_REGEXP = /^https?:\/\/(.+?)\/(.+?)\/(.+?)\/(tree|blob)\/(.+?)\/(.+)/;
    const githubOptions = {token: options.token};

    if (options.githubHosts) {
        githubOptions.githubHosts = options.githubHosts;
    }

    const api = new GitHub(githubOptions);

    /**
     * Checks if given page source is GH
     * @param {Object} page - page model object
     * @returns {Boolean}
     */
    function hasGithubSource(page) {
        return !!(page.source && GITHUB_URL_REGEXP.test(page.source));
    }

    /**
     * Return request headers depending on cache content
     * @param {Object} cache - cache content
     * @returns {Object|null}
     */
    function getHeadersByCache(cache) {
        return (cache && cache.etag) ? {'If-None-Match': cache.etag} : null;
    }

    /**
     * Parses https github url to source
     * @param {String} url - https github url
     * @returns {{host: *, user: *, repo: *, ref: *, path: *}}
     */
    function parseSourceUrl(url) {
        // TODO: check if it is possible to use ES6
        const repoInfo = url.match(GITHUB_URL_REGEXP);

        return {
            host: repoInfo[1],
            user: repoInfo[2],
            repo: repoInfo[3],
            ref: repoInfo[5],
            path: repoInfo[6]
        };
    }

    /**
     * Returns path to source file in local cache
     * @param {Object} page - model page object
     * @param {Object} result
     * @returns {String|*}
     */
    function getCacheFilePath(page, result) {
        return path.join(page.url, 'index' + path.extname(result.name));
    }

    /**
     * Read source meta.json file from local cache
     * @param {Object} page - model page object
     * @returns {Promise.<T>}
     */
    function readMetaFromCache(page) {
        return baseUtil
            .readFileFromCache(path.join(page.url, 'index.meta.json'), {})
            .catch(() => ({}));
    }

    /**
     * Write source meta.json file to local cache
     * @param {Object} page - model page object
     * @param {Object} result
     * @returns {Promise}
     */
    function writeMetaToCache(page, result) {
        return baseUtil.writeFileToCache(path.join(page.url, 'index.meta.json'),
            JSON.stringify({
                etag: result.meta.etag,
                sha: result.sha,
                fileName: getCacheFilePath(page, result)
            }, null, 4));
    }

    /**
     * Save loaded content to local cache
     * @param {Object} page - model page object
     * @param {String} content - base64 encoded content of file
     * @returns {Promise}
     */
    function saveContentToFile(page, content) {
        const filePath = getCacheFilePath(page, content);
        return baseUtil
            .writeFileToCache(filePath, new Buffer(content.content, 'base64').toString())
            .thenResolve(filePath);
    }

    /**
     * Loads content from github repository via github API
     */
    function getContentFromGithubSource(options, headers) {
        return Q.denodeify(api.executeAPIMethod.bind(api))('getContent', options, headers);
    }

    /**
     * Returns timestamp of last commit for given source
     * @returns {*|Promise.<T>}
     * @returns {Promise}
     */
    function getSourceLastUpdateDate(options, headers) {
        return Q.denodeify(api.executeAPIMethod.bind(api))('getCommits', options, headers)
            .catch(() => null)
            .then(commits => {
                return (commits && commits.length) ?
                    (new Date(commits[0].commit.committer.date)).getTime() : null;
            });
    }

    /**
     * Returns information about repo issues section existence
     * @returns {*|Promise.<T>}
     */
    function hasRepoIssues(options, headers) {
        return Q.denodeify(api.executeAPIMethod.bind(api))('get', options, headers)
            .get('has_issues')
            .catch(() => null);
    }

    /**
     * Tries to retrieve repository branch meta-information
     * On success returns promise with branch name
     * On error tries to find name of default branch in repository
     * @param {Object} options - options for github call
     * @param {Object} headers - optional gh request headers
     * @returns {*|Promise.<T>}
     */
    function getSourceBranchOrRepoDefault(options, headers) {
        options.branch = options.branch || options.ref;
        return Q.denodeify(api.executeAPIMethod.bind(api))('getBranch', options, headers)
            .thenResolve(options.branch)
            .catch(() => {
                return Q.denodeify(api.executeAPIMethod.bind(api))('get', options, headers)
                    .catch(() => null)
                    .get('default_branch');
            });
    }

    /*
     Дополнительно загружается некоторая мета-информация
     1. Дата обновления документа как дата последнего коммита
     2. Инфо о том имеет ли данный репозиторий раздел issues или нет
     3. Ветку из которой был загружен документ. Если загрузка была
     произведена из тега - то ссылку на основную ветку репозитория
     */
    /**
     * Loads advanced meta-information about github source
     * @param {Object} page - page model object
     * @param {Object} repoInfo - parsed github url
     * @param {Object} cache - cache file content
     * @returns {Function|*}
     */
    function loadAdvancedMetaInformation(page, repoInfo, cache) {
        const getUpdateDate = options.updateDate ?
            getSourceLastUpdateDate(repoInfo, getHeadersByCache(cache)) : Q(null);
        const checkForIssues = options.hasIssues ?
            hasRepoIssues(repoInfo, getHeadersByCache(cache)) : Q(null);
        const getBranch = options.branch ?
            getSourceBranchOrRepoDefault(repoInfo, getHeadersByCache(cache)) : Q(null);

        return Q.allSettled([getUpdateDate, checkForIssues, getBranch])
            .spread((updateDate, hasIssues, branch) => {
                page.updateDate = updateDate.value;
                page.hasIssues = hasIssues.value;
                page.branch = branch.value;
            });
    }

    /**
     * Synchronize docs for all page language version
     * @param {Model} model - data model
     * @param {Object} page - page model object
     * @returns {*|Promise.<T>}
     */
    function processPage(model, page) {
        debug(`Load doc file for page with url: => ${page.url}`);
        const repoInfo = parseSourceUrl(page.source);
        return readMetaFromCache(page)
            .then(cache => Q.all([
                getContentFromGithubSource(repoInfo, getHeadersByCache(cache)),
                cache
            ]))
            .spread((result, cache) => {
                if(result.meta.status === '304 Not Modified' || cache.sha === result.sha) {
                    debug('Document was not changed: %s', page.url);
                    return Q(cache.fileName);
                } else if(!cache.sha) {
                    debug('Doc added: %s %s', page.url, page.title);
                    model.pushChangeToAddedGroup({type: 'doc', url: page.url, title: page.title});
                } else {
                    debug('Doc modified: %s %s %s', page.url, page.title);
                    model.pushChangeToModifiedGroup({type: 'doc', url: page.url, title: page.title});
                }

                return Q()
                    .then(() => loadAdvancedMetaInformation(page, repoInfo, cache))
                    .then(() => writeMetaToCache(page, result))
                    .then(() => saveContentToFile(page, result));
            })
            .then(filePath => {
                page.contentFile = filePath;
                return page;
            });
    }

    return () => {
        return baseUtil
            .processPagesAsync(model, hasGithubSource, processPage, 5)
            .thenResolve(model);
    };
};
