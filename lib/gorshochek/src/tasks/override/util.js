'use strict';

/**
 * Returns true if given url is absolute and has http(s) protocol. Otherwise returns false.
 * @param {Object} url - parsed url
 * @returns {Boolean}
 */
exports.isAbsoluteHttpUrl = (url) => {
    // url.protocol is not defined for relative links
    return !!url.protocol && /^https?/.test(url.protocol)
};

/**
 * Returns true if given url is absolute and has not http(s) protocol
 * @param {Object} url - parsed url
 * @returns {Boolean}
 */
exports.hasUnsupportedProtocol = (url) => {
    return !!url.protocol && !this.isAbsoluteHttpUrl(url);
};

/**
 * Returns true if given url is anchor url. (Has only hash attribute)
 * @param {Object} url - parsed url
 * @returns {Boolean}
 */
exports.isOnlyAnchor = (url) => {
    return url.hash && !url.protocol && !url.host && !url.path;
};

/**
 * Returns true if given url is github url.
 * (Hostname attribute should contain word 'github')
 * @param {Object} url - parsed url
 * @returns {Boolean}
 */
exports.isGithubUrl = (url) => {
    return url.hostname && url.hostname.indexOf('github') > -1;
};

/**
 * Returns true if given url is native website url. Otherwise returns false
 * @param {Object} url - parsed url
 * @param {Array} existedUrls - array of existed model urls
 * @returns {Boolean}
 */
exports.isNativeWebsiteUrl = (url, existedUrls) => {
    return existedUrls.indexOf(url.path.replace(/\/$/, '')) > -1;
};

/**
 * Tries to find link replacement from urlHash and site existed urls array for given variants
 * @param {String[]} variants - array of link variants
 * @param {Object} urlHash - hash of page source -> page url
 * @param {String[]} existedUrls - array of site existed urls
 * @returns {String|null}
 */
exports.findReplacement = (variants, urlHash, existedUrls) => {
    let replacement = null;

    variants.some(item => {
        const alterItem = item + '/README.md';

        if(urlHash.has(item)) {
            replacement = urlHash.get(item);
            return true;
        }
        if(urlHash.has(alterItem)) {
            replacement = urlHash.get(alterItem);
            return true;
        }
        if(existedUrls.indexOf(item) > -1) {
            replacement = item;
            return true;
        }
        return false;
    });

    return replacement;
};

/**
 * Creates array of urls of all model pages
 * @param {Object[]} pages - array of model pages
 * @returns {String[]}
 */
exports.createArrayOfModelPageUrls = (pages) => {
    return pages.map(page => page.url);
};

/**
 * Creates map with pages sourceUrls as keys and pages urls as values
 * @param {Object[]} pages - array of model pages
 * @returns {Map}
 */
exports.createSourceUrlsMap = (pages) => {
    return pages.reduce((prev, page) => {
        if(page.published && page.source) {
            prev.set(page.source, page.url);
        }
        return prev;
    }, new Map());
};
