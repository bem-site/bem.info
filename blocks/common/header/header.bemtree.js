block('header').content()(function() {
    var data = this.data,
        page = data.page,
        url = page.url;

    return [
        {
            elem: 'layout',
            content: [
                {
                    block: 'logo',
                    mix: { block: 'header', elem: 'logo' },
                    url: url !== '/' ? data.root + '/' : undefined
                },
                {
                    block: 'lang-switcher',
                    mix: { block: 'header', elem: 'lang' }
                },
                {
                    elem: 'forum',
                    content: this.i18n(this.block, 'forum'),
                    attrs: { href: 'https://github.com/bem-site/bem.info/issues' }
                }
            ]
        },
        {
            block: 'search',
            mix: { block: 'header', elem: 'search' }
        },
        {
            block: 'breadcrumbs',
            mix: { block: 'header', elem: 'breadcrumbs' }
        },
        {
            elem: 'toggle'
        }
    ];
});
