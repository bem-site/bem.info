block('header').content()(function() {
    var data = this.data,
        page = data.page,
        url = page.url,
        lang = data.lang,
        forumUrl;

    if (lang === 'ru' || lang === 'en') {
        forumUrl = data.root + '/forum/';
    } else if (lang === 'uk') {
        forumUrl = 'https://ru.bem.info/forum/';
    } else {
        forumUrl = 'https://en.bem.info/forum/';
    }

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
                url.indexOf('/forum/') === -1 && {
                    elem: 'forum',
                    content: this.i18n(this.block, 'forum'), // Forum
                    attrs: { href: forumUrl }
                }
            ]
        },
        {
            block: 'search',
            mix: { block: 'header', elem: 'search' }
        },
        {
            elem: 'menu',
            content: [
                {
                    block: 'breadcrumbs',
                    mix: { block: 'header', elem: 'breadcrumbs' }
                }
            ]
        },
        {
            elem: 'toggle'
        }
    ];
});
