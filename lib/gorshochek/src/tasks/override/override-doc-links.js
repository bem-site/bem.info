'use strict';

const Path = require('path');
const Url = require('url');
const _ = require('lodash');
const Q = require('q');
const cheerio = require('cheerio');
const baseUtil = require('../../util');
const util = require('./util');

const debug = require('debug')('override-doc-links');

/**
 * Override links in *.html source files
 * @param {Model} model - application model instance
 * @returns {Function}
 * @example
 * var Q = require('q');
 * var gorshochek = require('gorshochek');
 * var model = gorshochek.createModel();
 * Q()
 *    .then(tasks.core.mergeModels(model, {modelPath: './examples/model.ru.json'}))
 *    .then(tasks.docs.loadSourcesFromLocal(model))
 *    .then(tasks.docs.transformMdToHtml(model))
 *    .then(tasks.override.overrideDocLinks(model, {host: 'https://en.bem.info', root: '/bem.info/en'}))
 *    .then(tasks.core.saveModel(model))
 *    .then(tasks.core.rsync(model, {
 *        dest: './data',
 *        exclude: ['*.meta.json', 'model.json', '*.md']
 *    }))
 *    .done();
 */
module.exports = (model, params) => {
    /**
     * Returns true if page satisfies criteria. Otherwise returns fals
     * @param {Object} page - model page object
     * @returns {Boolean}
     */
    function isHtmlContentFile(page) {
        return !!page.contentFile && _.includes(page.contentFile, '.html');
    }

    /**
     * Parses github url
     * @param {Object} url - parsed url object
     * @returns {{host: *, user: *, repo: *, ref: *, path: *}}
     */
    function parseSourceUrl(url) {
        const repoInfo = url.match(/^https?:\/\/(.+?)\/(.+?)\/(.+?)\/(tree|blob)\/(.+?)\/(.+)/);
        return repoInfo ? {
            host: repoInfo[1],
            user: repoInfo[2],
            repo: repoInfo[3],
            ref: repoInfo[5],
            path: repoInfo[6]
        } : null;
    }

    /**
     * Resolves full github url by source of doc and relative link to another doc
     * @param {String} href - link to another doc
     * @param {String} baseUrl - source url of doc
     */
    function resolveFullGithubUrl(href, baseUrl) {
        const repo = parseSourceUrl(baseUrl);
        return repo ? Url.resolve('https://' +
        Path.join(repo.host, repo.user, repo.repo, 'blob', repo.ref, repo.path || ''), href) : href;
    }

    function findLinkHrefReplacement(linkHref, page, sourceUrlsMap, existedUrls) {
        const _linkHref = linkHref;

        // If URL starts with `https://${lang}.bem.info` replace it with `root`
        if(params && params.host && linkHref.indexOf(params.host) === 0) {
            return linkHref.replace(params.host, params.root)
        }

        // Не уверен, что этот код понадобиться.
        // Пока оставлю его здесь
        /*
        linkHref = linkHref.replace(/&#(x?)([0-9a-fA-F]+);?/g, (str, bs, match) => {
            return String.fromCharCode(parseInt(match, bs === 'x' ? 16 : 10));
        });
        */

        const url = Url.parse(linkHref);

        // якорная ссылка типа #some-anchor
        // ссылки с неподдерживаемыми протоколами, например mail:// git://
        // ссылка которая уже ведет на сайт
        if(util.isOnlyAnchor(url) ||
            util.hasUnsupportedProtocol(url) ||
            util.isNativeWebsiteUrl(url, existedUrls)) {
            return linkHref;
        }

        if(util.isAbsoluteHttpUrl(url) && !util.isGithubUrl(url)) {
            return linkHref;
        }

        const variants = [];
        const anchor = url.hash;
        linkHref = Url.format(_.omit(url, 'hash'));

        util.isGithubUrl(url) ?
            variants.push(linkHref) :
            variants.push(resolveFullGithubUrl(linkHref, page.source));

        const replacement = util.findReplacement(variants, sourceUrlsMap, existedUrls);

        if(replacement) {
            linkHref = params && params.root ? params.root + replacement : replacement;
            debug(`Replace from: ${_linkHref} to: ${linkHref}`);
        }

        if(anchor) {
            linkHref = Url.format(_.merge(Url.parse(linkHref), {hash: anchor}));
        }
        return linkHref;
    }

    /**
     * Find replacement for img src attribute
     * @param {String} imgSrc - original image source
     * @param {Object} page - model page object
     * @returns {String} replacement
     * @private
     */
    /*
    function findImageSourceReplacement(imgSrc, page) {
        if(!imgSrc) {
            return;
        }

        const url = Url.parse(imgSrc);
        if(util.isAbsoluteHttpUrl(url)) {
            return imgSrc;
        }

        const source = Url.parse(page.source);

        if(util.isGithubUrl(source)) {
            source.host = 'raw.githubusercontent.com';
            source.path = source.path
                .replace(/\/tree/, '')
                .replace(/\/blob/, '');

            source.pathname = source.pathname
                .replace(/\/tree/, '')
                .replace(/\/blob/, '');
        }

        const result = Url.resolve(Url.format(source), imgSrc);
        debug(imgSrc + ' => ' + result);
        return result;
    }
    */

    /**
     * Parses html source with help of cheerio model.
     * Finds all "a" and "img" tags with their href and srt attributes.
     * Iterates over founded tags and finds replacement for each of href or src attributes
     * @see https://www.npmjs.com/package/cheerio
     * @param {Object} page - model page object
     * @param {Map} sourceUrlsMap - map of page sourceUrls as keys and page urls as values
     * @param {Array} existedUrls - array of all page urls in model
     * @param {String} source - page source html string
     * @returns {String}
     */
    function override(page, sourceUrlsMap, existedUrls, source) {
        const $ = cheerio.load(source, {decodeEntities: false});
        $('a').each(function() {
            const href = $(this).attr('href');
            href && $(this).attr('href', findLinkHrefReplacement(href, page, sourceUrlsMap, existedUrls));
        });
        /*
        $('img').each(function() {
            $(this).attr('src', findImageSourceReplacement($(this).attr('src'), page));
        });
        */
        return $.html().replace(/ —/g, ' —'); // TODO: move to separate task
    }

    /**
     * Returns page processing function
     * @param {Model} model - application model instance
     * @returns {Function}
     */
    function createProcessPageFunc(model) {
        const sourceUrlsMap = util.createSourceUrlsMap(model.getPages());
        const existedUrls = util.createArrayOfModelPageUrls(model.getPages());

        return (model, page) => {
            const sourceFilePath = page.contentFile;

            debug(`override links for: ${page.url}`);
            return Q(sourceFilePath)
                .then(baseUtil.readFileFromCache.bind(baseUtil))
                .then(override.bind(null, page, sourceUrlsMap, existedUrls))
                .then(baseUtil.writeFileToCache.bind(baseUtil, sourceFilePath))
                .thenResolve(page);
        };
    }

    return () => {
        return baseUtil
            .processPagesAsync(model, isHtmlContentFile, createProcessPageFunc(model), 20)
            .thenResolve(model);
    };
};
