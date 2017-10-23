
module.exports = function genNginxRedirectDirectives(list) {
    return list.map(item => {
        const urls = item.url.map(url => url.endsWith('/') ? url.substr(0, url.length - 1) : url);

        return [
            'rewrite ',
            `"^(?:${urls.join('|')})/?$"`,
            item.now,
            item.code === 302 ? 'redirect' : 'permanent'
        ].join(' ') + ';';
    }).join('\n');
}
