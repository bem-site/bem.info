block('root').replace()(function() {
    var data = this.data = this.ctx.data,
        page = data.page,
        siteBundle = page.bundle;

    // libs extraction (begin)
    var libs = {};
    data.pages.forEach(function(pageData) {
        if (pageData.type === 'lib' || pageData.type === 'versioned') {
            var split = pageData.site.replace(/(.*)\/$/, '$1').split('/'),
                version = split.pop(),
                name = split.pop();

            libs[name] || (libs[name] = []);

            libs[name].indexOf(version) < 0 && libs[name].push(version);
        }
    });

    data.libs = libs;
    // libs extraction (end)

    var staticVersion = Math.random().toString().substr(2, 4);

    return {
        block: 'page',
        title: page.head.title,
        head: [
            { elem: 'css', url: data.root + '/' + siteBundle + '.min.css?' + staticVersion },
            { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width,initial-scale=1' } },
            { elem: 'meta', attrs: { property: 'og:image', content: data.root + '/og_image/' } },
            Object.keys(page.head.meta).reduce(function(prev, field) {
                (field.indexOf('og') !== -1) && prev.push({ elem: 'meta', attrs: { property: 'og:' + field.toLowerCase().replace('og', ''), content: page.head.meta[field] } });
                return prev
            }, [])
        ],
        favicon: data.root + '/favicon.ico',
        scripts: [
            { elem: 'js', url: data.root + '/' + siteBundle + '.' + data.lang + '.min.js?' + staticVersion }
        ]
    };
});
