block('sitemap').content()(function() {
    var data = this.data,
        currentPage = data.page,
        env = process.env,
        sites = Array.isArray(env.sites) ?
            env.sites : env.sites.split(',');

    return sites.map(function(site) {
        var rootSitePage = {},
            rootSiteUrl = '/' + site + '/',
            pages = data.pages.filter(function(page) {
                if (page.site.indexOf(rootSiteUrl) === 0) {
                    if (page.url === rootSiteUrl) {
                        rootSitePage = page;
                        return false;
                    }
                    return true;
                }
                return false;
            });

        return {
            elem: 'section',
            elemMods: { site: site },
            content: [
                {
                    elem: 'title',
                    elemMods: { site: site },
                    content: rootSitePage.url === currentPage.url ? {
                        elem: 'current',
                        content: rootSitePage.title
                    } : {
                        elem: 'link',
                        attrs: { href: rootSitePage.disabled ? undefined : rootSitePage.lang ? 'https://' + rootSitePage.lang + '.bem.info' + rootSitePage.url : data.root + rootSitePage.url },
                        content: rootSitePage.title
                    }
                },
                {
                    elem: 'tree',
                    // TODO: generate nested tree instead of plain list
                    content: pages.map(function(page) {
                        var level = page.level || page.url.split('/').length - 3,
                            title = page.sitemapTitle ?
                                page.sitemapTitle[data.lang] : page.title;

                        return level < 3 && {
                            elem: 'tree-item-' + level,
                            content: page.url === currentPage.url ? {
                                elem: 'current',
                                content: title
                            } : {
                                elem: 'link',
                                attrs: { href: page.disabled ? undefined : page.lang ? 'https://' + page.lang + '.bem.info' + page.url : data.root + page.url },
                                content: title
                            }
                        }
                    })
                }
            ]
        };
    });
});
