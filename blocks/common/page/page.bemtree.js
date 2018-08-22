block('page')(
    match(function() { return this.data.page.type === 'promo'}).addMix()({
        mods: { promo: true }
    }),
    content()(function() {
        var metricaCounterId = '16972024',
            data = this.data,
            page = data.page,
            type = page.type,
            content = type === 'promo' ? { block: 'promo-content', mix: { block: 'page', elem: 'main' } } :
                type === 'lib' ? { block: 'blocks', mix: { block: 'page', elem: 'main' } } :
                [
                    {
                        block: 'page',
                        elem: 'menu',
                        content: {
                            block: 'nav',
                            mix: { block: 'page', elem: 'nav' }
                        }
                    },
                    {
                        block: 'page',
                        elem: 'main',
                        content: [
                            page.isTranslationMissed && { block: 'article-translation-missed' },
                            type === 'articles' ?
                                { block: 'articles', mix: { block: 'page', elem: 'content' } } :
                                { block: 'article', mix: { block: 'page', elem: 'content' } },
                            {
                                block: 'article-rewind',
                                mods: { type: 'static', lang: data.lang },
                                mix: { block: 'article-wrap', elem: 'rewind' }
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
