
const nginxServerSkel = require('./nginx_server_template');

function genNginxRedirectDirectives(list) {
    return list.map(item =>
        [
            'rewrite ',
            '"' + item.url.map(url => `^${url}`).join('|') + '"',
            item.now,
            item.code === 302 ? 'redirect' : 'permanent'
        ].join(' ') + ';'
    ).join('\n');
}

module.exports = (lang, redirects) => nginxServerSkel
    .replace(/{LANG}/g, lang)
    .replace(/{REDIRECTS}/g, genNginxRedirectDirectives(redirects));
