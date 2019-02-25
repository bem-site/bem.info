block('page')(
    match(function() { return this.data.page.type === 'promo'}).addMix()({
        mods: { promo: true }
    }),
    content()(function() {
        var path = require('path'),
            metricaCounterId = '16972024',
            data = this.data,
            page = data.page,
            type = page.type,
            content = type === 'promo' ? {
                    block: 'promo-content',
                    mix: { block: 'page', elem: 'main' }
                } :
                [
                    {
                        block: 'page',
                        elem: 'menu',
                        content: {
                            block: 'nav',
                            mix: { block: 'page', elem: 'nav' },
                            items: type === 'lib' ? {
                                block: 'block-list',
                                mix: { block: 'blocks', elem: 'list' }
                            } : undefined
                        }
                    },
                    {
                        block: 'page',
                        elem: 'main',
                        content: [
                            page.isTranslationMissed && { block: 'article-translation-missed' },
                            type === 'articles' ?
                                { block: 'articles', mix: { block: 'page', elem: 'content' } } :
                                page.block ? {
                                    block: 'block-info',
                                    mix: [
                                        { block: 'blocks', elem: 'data' },
                                        { block: 'article' },
                                        { block: 'page', elem: 'content' }
                                    ],
                                    data: Object.assign({
                                            lang: data.lang,
                                            examplesUrlPrefix: '//' + data.lang + '.bem.info/_st_/' + page.library + '-examples/' + page.version,
                                            outputLibFolder: path.join('output', 'bem.info', page.library), // FIXME: адовый костыль
                                            setName: page.setName
                                        }, page.block)
                                } : {
                                    block: 'article',
                                    mix: { block: 'page', elem: 'content' }
                                },
                            page.block || {
                                block: 'article-rewind',
                                mods: { type: 'static', lang: data.lang },
                                mix: { block: 'article', elem: 'rewind' }
                            }
                        ]
                    },
                    {
                        block: 'page',
                        elem: 'side',
                        content: {
                            block: 'aside',
                            mix: { block: 'page', elem: 'aside' }
                        }
                    },
                ];

        return [
            {
                block: 'header',
                mix: { block: 'page', elem: 'head' }
            },
            {
                block: 'sitemap',
                mix: { block: 'page', elem: 'sitemap' }
            },
            content,
            {
                block: 'footer',
                mix: { block: 'page', elem: 'foot' }
            },
            {
                block: 'yandex-metrica',
                params: {
                    id: metricaCounterId,
                    webvisor: true,
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true
                }
            },
            {
                block: 'yandex-metrica-api',
                js: { counterId: metricaCounterId }
            }
        ];
    })
)
