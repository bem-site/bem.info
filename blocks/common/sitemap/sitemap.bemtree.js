block('sitemap').content()(function() {
    var data = this.data,
        currentPage = data.page;

    return ['methodology', 'toolbox', 'platform', 'community'].map(function(site) {
        var rootSitePage,
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
            content: [
                {
                    elem: 'title',
                    elemMods: { site: site },
                    content: rootSitePage.url === currentPage.url ? {
                        elem: 'current',
                        content: rootSitePage.title
                    } : {
                        elem: 'link',
                        attrs: { href: rootSitePage.disabled ? undefined : data.root + rootSitePage.url },
                        content: rootSitePage.title
                    }
                },
                {
                    elem: 'tree',
                    // TODO: generate nested tree instead of plain list
                    content: pages.map(function(page) {
                        var level = page.level || page.url.split('/').length - 3;

                        return level > 3 ? undefined : {
                            elem: 'tree-item-' + level,
                            content: page.url === currentPage.url ? {
                                elem: 'current',
                                content: page.title
                            } : {
                                elem: 'link',
                                attrs: { href: page.disabled ? undefined : data.root + page.url },
                                content: page.title
                            }
                        }
                    })
                }
            ]
        };
    });
});
