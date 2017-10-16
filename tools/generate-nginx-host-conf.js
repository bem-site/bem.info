
module.exports = function genNginxRedirectDirectives(list) {
    return list.map(item => [
            'rewrite ',
            '"' + item.url.map(url => `^${url}`).join('|') + '"',
            item.now,
            item.code === 302 ? 'redirect' : 'permanent'
        ].join(' ') + ';'
    ).join('\n');
}
