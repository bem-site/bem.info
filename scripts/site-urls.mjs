/**
 * Keep language-domain links absolute; make local paths portable between
 * a Pages project URL and the root of a custom domain.
 */
export function rewriteSiteUrls(html, { lang, relativeRoot, config }) {
    return html.replace(
        /\b(href|src|action|content)=(["'])(https?:\/\/[^"']*|\/\/[^"']*|\/(?!\/)[^"']*)\2/g,
        (match, attribute, quote, value) => {
            if (value.startsWith('/') && !value.startsWith('//')) {
                return `${attribute}=${quote}${relativeRoot}${value}${quote}`;
            }
            let url;
            try { url = new URL(value, config.apex); }
            catch { return match; }
            const language = url.hostname.match(/^(ru|en)(?:-test)?(?:\.beta)?\.bem\.info$/);
            if (language) {
                return `${attribute}=${quote}${config.origins[language[1]]}${url.pathname}${url.search}${url.hash}${quote}`;
            }
            if (/^(?:www\.|test\.)?bem\.info$/.test(url.hostname)) {
                const prefix = url.pathname.match(/^\/(ru|en)(?=\/|$)/);
                const targetLang = prefix ? prefix[1] : lang;
                const pathname = prefix ? url.pathname.slice(prefix[0].length) || '/' : url.pathname;
                return `${attribute}=${quote}${config.origins[targetLang]}${pathname}${url.search}${url.hash}${quote}`;
            }
            return match;
        }
    );
}
