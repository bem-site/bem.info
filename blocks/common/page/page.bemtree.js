block('page').content()(function() {
    var metricaCounterId = '16972024',
        data = this.data,
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
});
