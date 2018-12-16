
module.exports = function genNginxRedirectDirectives(list) {
    return list.map(item => {
        const urls = Array.isArray(item.url) &&
            item.url.map(url => url.endsWith('/') ? url.substr(0, url.length - 1) : url);

        const oldUrl = item.isRegexp ?
            `"${item.url}"` :
            `"^(?:${urls.join('|')})/?$"`;

        return [
            'rewrite ',
            oldUrl,
            item.now,
            item.code === 302 ? 'redirect' : 'permanent'
        ].join(' ') + ';';
    }).join('\n');
}
