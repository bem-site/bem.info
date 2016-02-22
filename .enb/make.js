var techs = {
        // essential
        fileProvider: require('enb/techs/file-provider'),
        fileMerge: require('enb/techs/file-merge'),

        // optimization
        borschik: require('enb-borschik/techs/borschik'),

        // css
        css: require('enb/techs/css'),

        // js
        browserJs: require('enb-js/techs/browser-js'),

        // bemtree
        bemtree: require('enb-bemxjst/techs/bemtree'),

        // bemhtml
        bemhtml: require('enb-bemxjst/techs/bemhtml')
    },
    enbBemTechs = require('enb-bem-techs'),
    libLevels = [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/desktop.blocks', check: false },
        { path: 'libs/bem-components/common.blocks', check: false },
        { path: 'libs/bem-components/desktop.blocks', check: false },
        { path: 'libs/bem-components/design/common.blocks', check: false },
        { path: 'libs/bem-components/design/desktop.blocks', check: false },
        'blocks/common'
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
            [techs.css, { target: '?.css' }],

            // bemtree
            [techs.bemtree, {
                sourceSuffixes: ['bemtree.js', 'bemtree']
            }],

            // bemhtml
            [techs.bemhtml, {
                sourceSuffixes: ['bemhtml.js', 'bemhtml']
            }],

            // js
            [techs.browserJs, { includeYM: true }],

            // borschik
            [techs.borschik, { sourceTarget: '?.browser.js', destTarget: '?.min.js', minify: isProd }],
            [techs.borschik, { sourceTarget: '?.css', destTarget: '?.min.css', tech: 'cleancss', minify: isProd }]
        ]);

        nodeConfig.addTargets(['?.bemtree.js', '?.bemhtml.js', '?.min.css', '?.min.js']);
    });
}

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';

    configNodes(config, isProd, 'bundles/index', [ 'blocks/index' ]);

    configNodes(config, isProd, 'bundles/methodology-index', [ 'blocks/promo', 'blocks/methodology' ]);
    configNodes(config, isProd, 'bundles/methodology', [ 'blocks/methodology' ]);

    configNodes(config, isProd, 'bundles/platform-index', [ 'blocks/promo', 'blocks/platform' ]);
    configNodes(config, isProd, 'bundles/platform', [ 'blocks/platform' ]);

    configNodes(config, isProd, 'bundles/community-index', [ 'blocks/promo', 'blocks/community' ]);
    configNodes(config, isProd, 'bundles/community', [ 'blocks/community' ]);
};
