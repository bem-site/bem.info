block('header').content()(function() {
    var url = this.data.page.url,
        siteMod = this.data.siteMod;

    return [
        {
            block: 'logo',
            mix: { block: 'header', elem: 'logo' },
            url: url !== '/' ? '/' : undefined
        },
        {
            block: 'breadcrumbs',
            mix: { block: 'header', elem: 'breadcrumbs' }
        },
        url.indexOf('/forum/') === -1 ? {
            elem: 'forum',
            content: 'Форум',   // TODO: i18n
            url: '/forum/'
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
