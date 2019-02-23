function checkUrlForRegexp(url) {
    if (url.includes('.*')) {
        throw new Error(`${url} contains regexp, use 'exp' instead of 'url'`);
    }

    return url;
}

module.exports = function genNginxRedirectDirectives(list) {
    return list.map(item => {
        let oldUrl;

        if (item.exp) {
            oldUrl = Array.isArray(item.exp) ?
                `"${item.exp.join('|')}"` :
                `"${item.exp}"`;
        } else {
            if (Array.isArray(item.url)) {
                const urls = item.url.map(url => {
                        checkUrlForRegexp(url);
                        return url.endsWith('/') ? url.substr(0, url.length - 1) : url;
                    });

                oldUrl = `"^(?:${urls.join('|')})/?$"`;
            } else {
                oldUrl = `"^(?:${checkUrlForRegexp(item.url)})/?$"`;
            }
        }

        return [
            'rewrite ',
            oldUrl,
            item.now,
            item.code === 302 ? 'redirect' : 'permanent'
        ].join(' ') + ';';
    }).join('\n');
}
