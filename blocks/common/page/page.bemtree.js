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
        page.url !== '/forum/' && page.url !== '/' ? { block: 'nav' } : undefined,
        page.type === 'bemjson.js' ? page.content :  { block: 'article-wrap' },
        {
            block: 'footer',
            mix: { block: 'page-bg' } // TODO: move to methodology-index/footer
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
