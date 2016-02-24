block('root').replace()(function() {
    var data = this.data = this.ctx.data,
        rootUrl = data.page.site,
        siteMod = data.siteMod = rootUrl === '/' ? 'index' : rootUrl.split('/')[1],
        siteBundle = siteMod + (data.page.url === rootUrl && (rootUrl !== '/' && rootUrl !== '/forum/') ? '-index' : '');

    // libs extraction (begin)
    var libs = {};
    data.pages.forEach(function (page) {
        if (page.type === 'lib') {
            var split = page.site.replace(/(.*)\/$/, '$1').split('/'),
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
        title: data.page.head.title,
        head: [
            { elem: 'css', url: '//fonts.googleapis.com/css?family=Open+Sans:300,700&subset=cyrillic' },
            { elem: 'css', url: '/' + siteBundle + '.min.css' }
        ],
        scripts: [
            { elem: 'js', url: '/' + siteBundle + '.min.js' }
        ]
    };
});
