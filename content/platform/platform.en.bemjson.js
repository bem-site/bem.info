module.exports = [{
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
                    content: 'платформа'
                }
            ]
        },
        {
            block: 'promo-action',
            attrs: { href: 'tutorials/quick-start-static/' },
            content: 'Быстрый старт'
        },
        {
            elem: 'text',
            content: [
                'Экосистема web-разработки, предоставляющая технологии и библиотеки готовых компонентов. ',
                'Позволяет быстро создавать, масштабировать и легко поддерживать проекты любой сложности.'
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
}]
