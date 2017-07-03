module.exports = function(pageCommon, pages, versions, currentVersion) {
    var result = [];

    result.push(Object.assign({
        level: 3 // 3 не показывается в sitemap
    }, pageCommon));

    versions.forEach(version => {
        pages.forEach(pageStub => {
            const page = Object.assign({}, pageCommon);
            const versionStr = String(version.number);
            const url = page.url + versionStr + '/' + pageStub.url;
            const isCurrentVersion = version.number === currentVersion;

            // add redirect to current library version
            if (isCurrentVersion) {
                result.push({
                    url: page.url + pageStub.url,
                    now: url,
                    code: 302
                });
            }

            page.url = url;
            page.site += versionStr + '/';
            page.version = versionStr;
            page.prev = pageStub.prev;
            page.next = pageStub.next;

            if (pageStub.title) {
                page.title = pageStub.title;
                page.level = isCurrentVersion ? 2 : 3; // 3 не показывается в sitemap
            } else { // root page
                page.title = versionStr;

                if (isCurrentVersion) {
                    page.sitemapTitle = pageCommon.title;
                    page.level = 1;
                } else {
                    page.level = 3; // 3 не показывается в sitemap
                }
            }

            page.source = {};

            Object.keys(pageStub.source).forEach(lang => {
                page.source[lang] = 'https://github.com/bem/bem-xjst/blob/' +
                    `${version.path}/docs/${lang}/${pageStub.source[lang]}`;
            });

            result.push(page);
        });
    });

    return result;
}
