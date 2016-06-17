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
                    content: 'platform'
                }
            ]
        },
        {
            block: 'promo-action',
            attrs: { href: 'tutorials/quick-start-static/' },
            content: 'Quick start'
        },
        {
            elem: 'text',
            content: [
                'A ecosystem of web development, providing technology and ready-made components libraries.<br>',
                'Allows quickly create, easily scale and support projects of any complexity.'
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
