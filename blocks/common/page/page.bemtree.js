block('page').content()(function() {
    var page = this.data.page;

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
            { block: 'article' }
        ],
        {
            block: 'footer',
            mix: { block: 'page-bg' }
        }
    ];
});
