const SEARCH_LANGUAGES = {
    ru: 'russian',
    uk: 'russian',
    en: 'english'
};

export function searchLanguage(lang) {
    return SEARCH_LANGUAGES[lang] || 'english';
}

export function searchIndexUrl(siteRoot) {
    return siteRoot.replace(/\/?$/, '/') + '_search/index.json';
}

export function searchResultUrl(url, siteRoot) {
    return new URL(url.replace(/^\//, ''), siteRoot).href;
}
