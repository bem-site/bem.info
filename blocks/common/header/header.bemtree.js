block('header').content()(function() {
    var data = this.data,
        url = data.page.url,
        siteMod = data.siteMod;

    return [
        {
            block: 'logo',
            mix: { block: 'header', elem: 'logo' },
            url: url !== '/' ? data.root + '/' : undefined
        },
        {
            block: 'breadcrumbs',
            mix: { block: 'header', elem: 'breadcrumbs' }
        },
        url.indexOf('/forum/') === -1 ? {
            elem: 'forum',
            content: 'Форум',   // TODO: i18n
            attrs: { href: data.root + '/forum/' }
        } : undefined,
        {
            block: 'lang-switcher',
            mix: { block: 'header', elem: 'lang' }
        },
        {
            block: 'search'
        }
    ];
});
