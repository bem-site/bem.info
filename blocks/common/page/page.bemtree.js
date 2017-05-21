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
            content: page.type === 'bemjson.js' ? { html: page.content } :
                    page.type === 'lib' ? { block: 'blocks' } :
                    { block: 'article-wrap' }
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
