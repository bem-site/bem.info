module.exports = {
    options : {
        boss : true,
        eqeqeq : true,
        evil : true,
        expr : true,
        forin : true,
        immed : true,
        loopfunc : true,
        maxdepth : 4,
        maxlen : 120,
        noarg : true,
        noempty : true,
        onecase : true,
        quotmark : 'single',
        sub : true,
        supernew : true,
        undef : true,
        unused : true
    },

    groups : {
        browserjs : {
            options : {
                browser : true,
                predef : [
                    'console',
                    'modules',
                    'Promise',
                    'confirm'
                ]
            },
            //includes : ['common.blocks/**/*.js'],
            excludes : [
                '**/*.i18n/*.js',
                '**/*.bem/*.js',
                '**/*.min.js',
                '**/*.bh.js',
                '**/*.spec.js',
                '**/*.deps.js',
                '**/*.bemjson.js',
                '**/*.bemhtml.js',
                '**/*.bemtree.js'
            ]
        },

        bemhtml : {
            options : {
                predef : [
                    'oninit',
                    'apply',
                    'applyCtx',
                    'applyNext',
                    'attrs',
                    'BEM',
                    'bem',
                    'block',
                    'cls',
                    'content',
                    'def',
                    'elem',
                    'extend',
                    'js',
                    'local',
                    'match',
                    'mix',
                    'mod',
                    'mode',
                    'once',
                    'replace',
                    'tag',
                    'wrap'
                ]
            }
            //includes : ['common.blocks/**/*.bemhtml.js']
        },

        bemtree : {
            options : {
                predef : [
                    'oninit',
                    'apply',
                    'applyCtx',
                    'applyNext',
                    'attrs',
                    'BEM',
                    'bem',
                    'block',
                    'cls',
                    'console',
                    'content',
                    'def',
                    'elem',
                    'exports',
                    'js',
                    'local',
                    'match',
                    'mix',
                    'mod',
                    'mode',
                    'req',
                    'require',
                    'replace',
                    'tag',
                    '_'
                ]
            }
            //includes : ['common.blocks/**/*.bemtree.js']
        }
    }
};
