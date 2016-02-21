block('page').content()(function() {
    var data = this.data,
        page = data.page,
        siteMod = data.siteMod;

    return [
        {
            block: 'header',
            mods: { site: siteMod }
        },
        {
            block: 'sitemap',
            mods: { site: siteMod }
        },
        {
            block: 'nav',
            mods: siteMod === 'index' ? { site: siteMod } : {}
        },
        page.type === 'bemjson.js' ? page.content : { block: 'article' },
        {
            block: 'footer',
            mods: { site: siteMod, promo: page.type === 'bemjson.js' }
        }
    ];
});
