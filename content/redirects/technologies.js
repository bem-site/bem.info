module.exports = [
    // bemjson
    {
        exp: '^/technology/(.*)bemjson/',
        now: '/technologies/classic/bemjson/'
    },

    // xjst & bemxjst
    {
        exp: [
            '^/libs/bem-core/(.*)/bemhtml/(.*)',
            '^/libs/bem-core/(.*)/templating/(.*)',
            '^/technology/bemhtml/(.*)',
            '^/articles/bemhtml(.*)',
            '^/technology/bemtree/(.*)',
            '^/tools/templating-engines/(.*)',
            '^/libs/bem-core/bemhtml(.*)'
        ],
        now: '/technologies/classic/bem-xjst/'
    },
    {
        exp: '^/technologies/classic/bem-xjst/6/(.*)',
        now: '/technologies/classic/bem-xjst/8/$1'
    },

    // deps
    {
        exp: [
            '^/tools/bem/bem-tools/deps(.*)',
            '^/tools/bem/depsjs/',
            '^/articles/deps-js-syntax/',
            '^/technology/deps/(.*)',
        ],
        now: '/technologies/classic/deps/'
    },

    // BH
    {
        url: '/technology/bh/v3/changelog/',
        now: {
            ru: 'https://github.com/bem/bh/blob/v3.3.0/CHANGELOG.ru.md',
            en: 'https://github.com/bem/bh/blob/v3.3.0/CHANGELOG.md'
        }
    },
    {
        exp: '^/technology/bh/v3/(.*)',
        now: {
            ru: 'https://github.com/bem/bh/blob/v3.3.0/README.ru.md',
            en: 'https://github.com/bem/bh/blob/v3.3.0/README.md'
        }
    },
    {
        url: '/technology/bh/v4/changelog/',
        now: {
            ru: 'https://github.com/bem/bh/blob/v4.0.0/CHANGELOG.ru.md',
            en: 'https://github.com/bem/bh/blob/v4.0.0/CHANGELOG.md'
        }
    },
    {
        exp: '^/technology/bh/v4/(.*)',
        now: {
            ru: 'https://github.com/bem/bh/blob/v4.0.0/README.ru.md',
            en: 'https://github.com/bem/bh/blob/v4.0.0/README.md'
        }
    },
    {
        url: '/technology/bh/v4.1.0/changelog/',
        now: {
            ru: 'https://github.com/bem/bh/blob/v4.1.0/CHANGELOG.ru.md',
            en: 'https://github.com/bem/bh/blob/v4.1.0/CHANGELOG.md'
        }
    },
    {
        exp: '^/technology/bh/v4.1.0/(.*)',
        now: {
            ru: 'https://github.com/bem/bh/blob/v4.1.0/README.ru.md',
            en: 'https://github.com/bem/bh/blob/v4.1.0/README.md'
        }
    },
    {
        url: '/technology/bh/v4.1.1/changelog/',
        now: {
            ru: 'https://github.com/bem/bh/blob/v4.1.1/CHANGELOG.ru.md',
            en: 'https://github.com/bem/bh/blob/v4.1.1/CHANGELOG.md'
        }
    },
    {
        exp: '^/technology/bh/(.*)',
        now: {
            ru: 'https://github.com/bem/bh/blob/v4.1.1/README.ru.md',
            en: 'https://github.com/bem/bh/blob/v4.1.1/README.md'
        }
    },

    // i-bem
    {
        exp: '^/technology/i-bem/(.*)/i-bem-js-common/',
        now: '/technologies/classic/i-bem/common/'
    },
    {
        exp: '^/technology/i-bem/(.*)/i-bem-html-binding/',
        now: '/technologies/classic/i-bem/html-binding/',
    },
    {
        exp: '^/technology/i-bem/(.*)/i-bem-decl/',
        now: '/technologies/classic/i-bem/declaration/',
    },
    {
        exp: '^/technology/i-bem/(.*)/i-bem-params/',
        now: '/technologies/classic/i-bem/parameters/',
    },
    {
        exp: '^/technology/i-bem/(.*)/i-bem-dom/',
        now: '/technologies/classic/i-bem/dom/',
    },
    {
        exp: '^/technology/i-bem/(.*)/i-bem-mods/',
        now: '/technologies/classic/i-bem/states/',
    },
    {
        exp: '^/technology/i-bem/(.*)/i-bem-events/',
        now: '/technologies/classic/i-bem/events/',
    },
    {
        exp: '^/technology/i-bem/(.*)/i-bem-init/',
        now: '/technologies/classic/i-bem/init/',
    },
    {
        exp: '^/technology/i-bem/(.*)/i-bem-interaction/',
        now: '/technologies/classic/i-bem/interaction/',
    },
    {
        exp: '^/technology/i-bem/(.*)/i-bem-context/',
        now: '/technologies/classic/i-bem/context/',
    },
    {
        exp: '^/technology/i-bem/(.*)/i-bem-context/',
        now: '/technologies/classic/i-bem/extras/',
    },
    {
        exp: [
            '^/technology/i-bem/(.*)',
            '^/libs/bem-core/(.*)i-bem-js/',
        ],
        now: '/technologies/classic/i-bem/',
    },

    // technology
    {
        exp: '^/technology/(.*)',
        now: '/technologies/classic/',
    },

    // platform
    {
        exp: '^/platform/libs/(.*)',
        now: '/libraries/classic/$1',
    },
].concat(
    ['bemjson', 'bem-xjst', 'i-bem', 'deps', 'deps-spec', 'project-stub']
        .reduce((acc, url) => {
            acc.push(
                {
                    exp: '^/platform/' + url + '/(.*)',
                    now: '/technologies/classic/' + url + '/$1',
                },
                {
                    exp: '^/technologies/' + url + '/(.*)',
                    now: '/technologies/classic/' + url + '/$1',
                }
            );

            return acc;
        }, [])
).concat([
    {
        exp: '^/platform/(.*)',
        now: '/technologies/$1',
    }
]);
