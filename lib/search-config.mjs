const SEARCH_LANGUAGES = {
    ru: 'russian',
    uk: 'russian',
    en: 'english'
};

export function searchLanguage(lang) {
    return SEARCH_LANGUAGES[lang] || 'english';
}

export function searchIndexUrl(pathname, lang) {
    const segments = pathname.split('/').filter(Boolean);
    const langIndex = segments.lastIndexOf(lang);
    const langRoot = langIndex === -1
        ? `/${lang}`
        : `/${segments.slice(0, langIndex + 1).join('/')}`;

    return `${langRoot}/_search/index.json`;
}
