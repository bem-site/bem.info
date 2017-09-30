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
                if (page.type === 'bemjson.js') {
                    return { html: page.content };
                } else if (page.type === 'lib') {
                    return { block: 'blocks' }
                } else if (page.type === 'promo') {
                    return { block: 'promo-content' };
                } else {
                    return { block: 'article-wrap' };
                }
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
