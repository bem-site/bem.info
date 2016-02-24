block('page').content()(function() {
    var data = this.data,
        page = data.page,
        siteMod = data.siteMod;

    return [
        {
            block: 'header'
        },
        {
            block: 'sitemap',
            mods: { site: siteMod }
        },
        page.url !== '/forum/' ? {
            block: 'nav',
            mods: siteMod === 'index' ? { site: siteMod } : {}
        } : undefined,
        page.type === 'bemjson.js' ? page.content : { block: 'article' },
        {
            block: 'footer',
            mix: { block: 'page-bg', mods: { site: siteMod }}
        }
    ];
});
