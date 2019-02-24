var langs = ['ru', 'uk', 'en'],
    techs = {
        // essential
        fileProvider: require('enb/techs/file-provider'),
        fileMerge: require('enb/techs/file-merge'),

        // optimization
        borschik: require('enb-borschik/techs/borschik'),

        // css
        css: require('enb-css/techs/css'),

        // js
        prependYm: require('enb-modules/techs/prepend-modules'),
        browserJs: require('enb-js/techs/browser-js'),

        // i18n
        keysets: require('enb-bem-i18n/techs/keysets'),
        i18n: require('enb-bem-i18n/techs/i18n'),

        // bemtree
        bemtree: require('enb-bemxjst-i18n/techs/bemtree-i18n'),

        // bemhtml
        bemhtml: require('enb-bemxjst-i18n/techs/bemhtml-i18n')
    },
    enbBemTechs = require('enb-bem-techs'),
    libLevels = [
        { path: 'node_modules/bem-core/common.blocks', check: false },
        { path: 'node_modules/bem-core/desktop.blocks', check: false },
        { path: 'node_modules/bem-stat-counters/common.blocks', check: false },
        { path: 'node_modules/bem-components/common.blocks', check: false },
        { path: 'node_modules/bem-components/desktop.blocks', check: false },
        { path: 'node_modules/bem-components/design/common.blocks', check: false },
        { path: 'node_modules/bem-components/design/desktop.blocks', check: false },
    ];

function configNodes(config, isProd, bundle, levels) {
    config.nodes(bundle, function(nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: libLevels.concat(levels) }],
            [techs.fileProvider, { target: '?.bemdecl.js' }],
            [enbBemTechs.deps],
            [enbBemTechs.files],

            // css
            [techs.css, {
                target: '?.css',
                autoprefixer: { browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%'] }
            }],

            // i18n
            [techs.keysets, { lang: '{lang}' }],
            [techs.i18n, {
                exports: { ym: true, commonJS: true },
                lang: '{lang}'
            }],

            // bemtree
            [techs.bemtree, {
                sourceSuffixes: ['bemtree.js', 'bemtree'],
                target: '?.{lang}.bemtree.js',
                engineOptions: { escapeContent: false },
                lang: '{lang}'
            }],

            // bemhtml
            [techs.bemhtml, {
                sourceSuffixes: ['bemhtml.js', 'bemhtml'],
                target: '?.{lang}.bemhtml.js',
                engineOptions: { escapeContent: false },
                lang: '{lang}'
            }],

            // js
            [techs.browserJs],

            [techs.fileMerge, {
                target: '?.pre.{lang}.js',
                sources: ['?.lang.{lang}.js', '?.browser.js'],
                lang: '{lang}'
            }],

            [techs.prependYm, {
                source: '?.pre.{lang}.js',
                target: '?.{lang}.js'
            }],

            // borschik
            [techs.borschik, { sourceTarget: '?.{lang}.js', destTarget: '?.{lang}.min.js', minify: isProd }],
            [techs.borschik, { sourceTarget: '?.css', destTarget: '?.min.css', minify: isProd }]
        ]);

        nodeConfig.addTargets(['?.{lang}.bemtree.js', '?.{lang}.bemhtml.js', '?.min.css', '?.{lang}.min.js']);
    });
}

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';

    config.setLanguages(langs);
    configNodes(config, isProd, 'bundles/index', [ 'blocks/common', 'blocks/promo/', 'blocks/index' ]);

    configNodes(config, isProd, 'bundles/methodology-index', [ 'blocks/common', 'blocks/promo', 'blocks/methodology', 'blocks/methodology-index' ]);
    configNodes(config, isProd, 'bundles/methodology', [ 'blocks/common', 'bundles/methodology/blocks', 'blocks/methodology' ]);

    configNodes(config, isProd, 'bundles/toolbox-index', [ 'blocks/common', 'blocks/promo', 'blocks/toolbox', 'blocks/toolbox-index' ]);
    configNodes(config, isProd, 'bundles/toolbox', [ 'blocks/common', 'bundles/toolbox/blocks', 'blocks/toolbox' ]);

    configNodes(config, isProd, 'bundles/technologies-index', [ 'blocks/common', 'blocks/promo', 'blocks/technologies', 'blocks/technologies-index' ]);
    configNodes(config, isProd, 'bundles/technologies-classic-index', [ 'blocks/common', 'blocks/promo', 'blocks/technologies', 'blocks/technologies-index', 'blocks/technologies-classic-index' ]);
    configNodes(config, isProd, 'bundles/technologies', [ 'node_modules/bem-lib-site-view/lib-view.blocks', 'blocks/common', 'bundles/technologies/blocks', 'blocks/technologies' ]);

    configNodes(config, isProd, 'bundles/community-index', [ 'blocks/common', 'blocks/promo', 'blocks/community', 'blocks/community-index' ]);

    configNodes(config, isProd, 'bundles/forum', [ 'blocks/common', 'blocks/forum' ]);
};
