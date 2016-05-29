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
                    content: 'інструментарій'
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
                    tag: 'h2',
                    elem: 'heading',
                    elemMods: { heading: 2 },
                    content: 'Сборка'
                },
                {
                    tag: 'p',
                    content: {
                        tag: 'a',
                        attrs: { href: 'enb/', style: 'margin-left: 2em' },
                        content: 'ENB'
                    }
                },
                {
                    tag: 'h2',
                    elem: 'heading',
                    elemMods: { heading: 2 },
                    content: 'Проверка'
                },
                {
                    tag: 'p',
                    content: {
                        tag: 'a',
                        attrs: { href: 'bemhint/', style: 'margin-left: 2em' },
                        content: 'bemhint'
                    }
                },
                {
                    tag: 'h2',
                    elem: 'heading',
                    elemMods: { heading: 2 },
                    content: 'Поддержка в редакторах и терминале'
                },
                {
                    tag: 'p',
                    content: {
                        tag: 'a',
                        attrs: { href: 'bem-tools/', style: 'margin-left: 2em' },
                        content: 'bem-tools'
                    }
                },
                {
                    tag: 'p',
                    content: {
                        tag: 'a',
                        attrs: { href: 'bemmet/', style: 'margin-left: 2em' },
                        content: 'bemmet'
                    }
                },
                {
                    tag: 'h2',
                    elem: 'heading',
                    elemMods: { heading: 2 },
                    content: {
                        tag: 'a',
                        attrs: { href: 'sdk/' },
                        content: 'SDK'
                    }
                },
                {
                    tag: 'p',
                    content: {
                        tag: 'a',
                        attrs: { href: 'sdk/bem-naming/', style: 'margin-left: 2em' },
                        content: 'bem-naming'
                    }
                },
                {
                    tag: 'p',
                    content: {
                        tag: 'a',
                        attrs: { href: 'sdk/bem-config/', style: 'margin-left: 2em' },
                        content: 'bem-config'
                    }
                },
                {
                    tag: 'p',
                    content: {
                        tag: 'a',
                        attrs: { href: 'sdk/bem-fs-scheme/', style: 'margin-left: 2em' },
                        content: 'bem-fs-scheme'
                    }
                },
                {
                    tag: 'p',
                    content: {
                        tag: 'a',
                        attrs: { href: 'sdk/bem-deps/', style: 'margin-left: 2em' },
                        content: 'bem-deps'
                    }
                },
                {
                    tag: 'p',
                    content: {
                        tag: 'a',
                        attrs: { href: 'sdk/bem-walk/', style: 'margin-left: 2em' },
                        content: 'bem-walk'
                    }
                }
            ]
        }
    ]
}]
