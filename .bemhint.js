module.exports = {
    // cписок имен папок, которые являются уровнями переопределения
    levels: [
        'common',
        'community',
        'community-index',
        'forum',
        'index',
        'methodology',
        'methodology-index',
        'platform',
        'promo',
        'tools'
    ],

    // список путей, которые будут проигнорированы при проверке
    excludePaths: [
        'node_modules/**',
        'libs/**',
        'blocks/common/article/article.css'
    ],

    // список подключаемых плагинов, плагины подключаются
    // относительно расположения конфигурационного файла
    plugins: {
        'bemhint-css-naming': {
            excludeClasses: [
                'hljs-*',
                'article *'
            ]
        },
        'bemhint-fs-naming': true,
        'bemhint-deps-specification': true
    }
};
