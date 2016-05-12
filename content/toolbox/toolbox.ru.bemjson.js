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
                    content: 'инструментарий'
                }
            ]
        }
    ]
}, {
    block: 'promo-section',
    mods: { color: 'white' },
    content: [
        {
            block: 'article',
            content: [
                {
                    tag: 'h1',
                    elem: 'heading',
                    elemMods: { heading: 1 },
                    content: 'Сборка'
                },
                {
                    tag: 'ul',
                    content: [
                        {
                            tag: 'li',
                            content: 'ENB'
                        }
                    ]
                },
            ]
        }
    ]
}]
