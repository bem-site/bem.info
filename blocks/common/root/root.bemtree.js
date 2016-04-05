block('root').replace()(function() {
    var data = this.data = this.ctx.data,
        page = data.page,
        rootUrl = page.site,
        siteMod = data.siteMod = rootUrl === '/' ? 'index' : rootUrl.split('/')[1],
        siteBundle = siteMod + (page.url === rootUrl && (rootUrl !== '/' && rootUrl !== '/forum/') ? '-index' : '');

    // libs extraction (begin)
    var libs = {};
    data.pages.forEach(function(pageData) {
        if (pageData.type === 'lib') {
            var split = pageData.site.replace(/(.*)\/$/, '$1').split('/'),
                version = split.pop(),
                name = split.pop();

            libs[name] || (libs[name] = []);

            libs[name].indexOf(version) < 0 && libs[name].push(version);
        }
    });

    data.libs = libs;
    // libs extraction (end)

    return {
        block: 'page',
        title: page.head.title,
        head: [
            { elem: 'css', url: '//fonts.googleapis.com/css?family=Open+Sans:300,600,700&subset=cyrillic' },
            { elem: 'css', url: data.root + '/' + siteBundle + '.min.css' },
            { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width' } },
            { elem: 'meta', attrs: { property: 'og:image', content: 'https://ru.bem.info/og_image/logo_theme_stripe.png' } }, // TODO: implement via block with images; implement random
            Object.keys(page.head.meta).reduce(function(prev, field) {
                (field.indexOf('og') !== -1) && prev.push({ elem: 'meta', attrs: { property: 'og:' + field.toLowerCase().replace('og', ''), content: page.head.meta[field] } });
                return prev
            }, [])
        ],
        scripts: [
            { elem: 'js', url: data.root + '/' + siteBundle + '.' + data.lang + '.min.js' }
        ]
    };
});
