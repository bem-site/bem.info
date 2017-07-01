const CURRENT_VERSION = 8;

const VERSIONS = [
    { number: 6, path: 'v6.x' },
    { number: 7, path: 'v7.x' },
    { number: 8, path: 'master' },
];

const PAGES = [
    {
        url: '',
        // title: version-will-be-here
        source: {
            ru: '1-about.md',
            en: '1-about.md',
        }
    },
    {
        url: 'quick-start/',
        title: {
          ru: 'Быстрый старт',
          uk: 'Швидкий старт',
          en: 'Quick start',
        },
        source: {
            ru: '2-quick-start.md',
            en: '2-quick-start.md',
        }
    },
    {
        url: 'api/',
        title: 'API',
        source: {
            ru: '3-api.md',
            en: '3-api.md',
        }
    },
    {
        url: 'templates-syntax/',
        title: {
          ru: 'Синтаксис шаблонов',
          uk: 'Синтаксис шаблонів',
          en: 'Templates syntax',
        },
        source: {
            ru: '5-templates-syntax.md',
            en: '5-templates-syntax.md',
        }
    },
    {
        url: 'templates-context/',
        title: {
          ru: 'Контекст',
          uk: 'Контекст',
          en: 'Context',
        },
        source: {
          ru: '6-templates-context.md',
          en: '6-templates-context.md',
        }
    },
    {
        url: 'runtime/',
        title: 'Runtime',
        source: {
          ru: '7-runtime.md',
          en: '7-runtime.md',
        }
    }
];

module.exports = function(pageCommon) {
    var result = [];

    result.push(Object.assign({
        level: 3 // 3 не показывается в sitemap
    }, pageCommon));

    VERSIONS.forEach(version => {
        PAGES.forEach(pageStub => {
            const page = Object.assign({}, pageCommon);
            const versionStr = String(version.number);
            const url = page.url + versionStr + '/' + pageStub.url;
            const isCurrentVersion = version.number === CURRENT_VERSION;

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
