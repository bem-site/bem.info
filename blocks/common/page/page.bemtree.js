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
            content: page.type === 'bemjson.js' ? page.content :
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
        },
        {
            tag: 'script',
            content: '(function(w){if(w.performance&&w.performance.timing&&w.performance.navigation){var s=document.createElement("script");s.async=true;s.setAttribute("src","//static.site24x7rum.com/beacon/site24x7rum-min.js?appKey=8d3973954a2e5ad62df100a01125fb4f");document.body.appendChild(s)}})(window)'
        }
    ];
});
