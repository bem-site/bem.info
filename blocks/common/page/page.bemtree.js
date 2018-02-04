block('page').content()(function() {
    var data = this.data,
        page = data.page,
        content = page.type === 'promo' ? { block: 'promo-content' } :
            page.type === 'lib' ? { block: 'blocks' } :
            [
                { block: 'nav' },
                { block: 'article-wrap' }
            ];

    return [
        {
            block: 'header'
        },
        {
            block: 'sitemap'
        },
        content,
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
