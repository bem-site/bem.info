block('promo-content').content()(function() {
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
        }, {
            block: 'promo-section',
            mods: { color: 'black' },
            content: [
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
