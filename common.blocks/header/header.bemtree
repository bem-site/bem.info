block('header').content()(function() {
    var url = this.data.page.url,
        siteMod = this.data.siteMod;

    return [
        {
            block: 'logo',
            mix: { block: 'header', elem: 'logo' },
            mods: { 'site': siteMod },
            url: url !== '/' ? '/' : undefined
        },
        {
            block: 'breadcrumbs',
            mix: { block: 'header', elem: 'breadcrumbs' }
        },
        {
            block: 'lang-switcher',
            mix: { block: 'header', elem: 'lang' }
        },
        {
            block: 'search'
        }
    ];
});
