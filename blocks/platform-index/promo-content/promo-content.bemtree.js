block('promo-content').content()(function() {
    var data = this.data,
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
                            content: this.i18n(this.block, 'text0') // 'платформа'
                        }
                    ]
                },
                {
                    block: 'promo-action',
                    attrs: { href: 'tutorials/quick-start-static/' },
                    content: this.i18n(this.block, 'text1') // 'Быстрый старт'
                },
                {
                    elem: 'text',
                    content: [
                        this.i18n(this.block, 'text2'), // 'Экосистема web-разработки, предоставляющая технологии и библиотеки готовых компонентов.',
                        '<br>',
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
                    title: 'platform',
                    mods: { inverted: true },
                    legos: false,
                    data: data.pages.filter(function(page) {
                        if (!new RegExp('^' + site).test(page.url) || page.nav === false) {
                            return false;
                        }

                        return page.url.split('/').length === site.split('/').length + 1;
                    }).map(function(item) {
                        var title = typeof item.title === 'string' ? item.title : item.title[lang],
                            subtitle = item.subtitle ?
                                (typeof item.subtitle === 'string' ? item.subtitle : item.subtitle[lang]) : '';

                        return {
                            text: title,
                            subtitle: subtitle,
                            url: data.root + item.url
                        }
                    })
                },
                {
                    block: 'promo-features',
                    content: [
                        {
                            elem: 'image',
                            url: 'promo-features__squirrel.svg'
                        },
                        {
                            elem: 'separator'
                        },
                        {
                            elem: 'image',
                            url: 'promo-features__yogi.svg'
                        }
                    ]
                }
            ]
        }
    ]
});
