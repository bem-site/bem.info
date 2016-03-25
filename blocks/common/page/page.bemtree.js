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
        page.url !== '/forum/' ? { block: 'nav' } : undefined,
        page.type === 'bemjson.js' ? page.content : [
            { block: 'article-rewind' },
            { block: 'article' },
            { block: 'article-amendments' },
            {
                block: 'social-likes',
                params: page.head.meta,
                lang: data.lang
            }
        ],
        {
            block: 'footer',
            mix: { block: 'page-bg' }
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
