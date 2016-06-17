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
            content: 'Швидкий старт'
        },
        {
            elem: 'text',
            content: [
                'Екосистема web-розробки, що надає технології та бібліотеки готових компонентів.<br>',
                'Дозволяє швидко створювати, масштабувати і легко підтримувати проекти будь-якої складності.'
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
