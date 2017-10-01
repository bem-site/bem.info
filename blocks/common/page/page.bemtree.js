block('page').content()(function() {
    var data = this.data,
        page = data.page;

    return [
        {
            block: 'header'
        },
        {
            block: 'sitemap'
        },
        {
            block: 'content',
            content: function() {
                if (page.type === 'promo') {
                    return { block: 'promo-content' };
                }

                if (page.type === 'lib') {
                    return { block: 'blocks' };
                }

                return [
                    {
                        elem: 'wrap',
                        content: [
                            { block: 'nav' },
                            { block: 'article-wrap' }
                        ]
                    },
                    {
                        block: 'article-rewind',
                        mods: { type: 'static', lang: data.lang }
                    }
                ];
            }()
        },
        {
            block: 'footer'
        },
        {
            block: 'yandex-metrica',
            params: {
                id: '16972024',
                webvisor: true,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true
            }
        }
    ];
});
