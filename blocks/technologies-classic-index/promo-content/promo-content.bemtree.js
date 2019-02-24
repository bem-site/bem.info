block('promo-content').content()(function() {
    var data = this.data,
        pages = data.pages,
        site = data.page.site,
        lang = data.lang;

    return [
        {
            block: 'promo-header',
            content: [
                {
                    elem: 'header',
                    content: [
                        {
                            block: 'bem',
                            mix: { block: 'promo-header', elem: 'title' }
                        },
                        ' ',
                        {
                            elem: 'subtitle',
                            content: this.i18n(this.block, 'text0') // 'технологии'
                        }
                    ]
                },
                {
                    block: 'promo-action',
                    attrs: { href: '../../tutorials/classic/quick-start-static/' },
                    content: this.i18n(this.block, 'text1') // 'Быстрый старт'
                },
                {
                    elem: 'text',
                    content: [
                        this.i18n(this.block, 'text2'), // 'Экосистема web-разработки, предоставляющая технологии и библиотеки готовых компонентов.',
                        { tag: 'br' },
                        this.i18n(this.block, 'text3') // 'Позволяет быстро создавать, масштабировать и легко поддерживать проекты любой сложности.'
                    ]
                }
            ]
        },
        {
            block: 'promo-section',
            mods: { color: 'black' },
            content: [
                {
                    block: 'promo-menu',
                    title: 'technologies',
                    mods: { inverted: true },
                    legos: false,
                    data: pages.filter(function(page) {
                        if (!new RegExp('^' + site).test(page.url) || page.nav === false) {
                            return false;
                        }

                        return page.url.split('/').length === site.split('/').length + 1;
                    }).map(function(item) {
                        var title = typeof item.title === 'string' ? item.title : item.title[lang];
                        return {
                            text: title,
                            url: data.root + item.url
                        }
                    })
                }
            ]
        }
    ]
});
