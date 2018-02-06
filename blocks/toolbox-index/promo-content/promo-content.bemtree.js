block('promo-content').content()(function() {
    var data = this.data,
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
                            content: this.i18n(this.block, 'text0') // 'инструментарий'
                        }
                    ]
                }
            ]
        }, {
            block: 'promo-section',
            mods: { color: 'white' },
            content: {
                block: 'promo-article',
                content: [
                    {
                        elem: 'heading',
                        content: this.i18n(this.block, 'text1') //'Сборка'
                    },
                    {
                        elem: 'link',
                        attrs: { href: 'enb/' },
                        content: 'ENB'
                    },
                    // TODO: док-ия bemhint не переведена на англ, убрать проверку как появится перевод
                    lang !== 'en' && [
                        {
                            elem: 'heading',
                            content: this.i18n(this.block, 'text2') // 'Проверка'
                        },
                        {
                            elem: 'link',
                            attrs: { href: 'bemhint/' },
                            content: 'bemhint'
                        }
                    ],
                    {
                        elem: 'heading',
                        content: this.i18n(this.block, 'text3') // 'Поддержка в редакторах и терминале'
                    },
                    {
                        elem: 'link',
                        attrs: { href: 'bem-tools/' },
                        content: 'bem-tools'
                    },
                    {
                        elem: 'link',
                        attrs: { href: 'bemmet/' },
                        content: 'bemmet'
                    },
                    {
                        elem: 'heading',
                        content: {
                            elem: 'link',
                            attrs: { href: 'sdk/' },
                            content: 'SDK'
                        }
                    },
                    [
                        'bem-walk',
                        'bem-config',
                        'bem-bemjson-node',
                        'bem-entity-name',
                        'bem-naming-entity',
                        'bem-naming-cell-stringify',
                        'bem-naming-cell-pattern-parser',
                        'bem-naming-file-stringify',
                        'bem-decl',
                        'bem-bemjson-to-decl',
                        'bem-bemjson-to-jsx',
                        'bem-import-notation',
                        'bem-graph',
                        'bem-deps',
                        'bem-cell',
                        'bem-file',
                        'bem-bundle'
                    ].map(item => ({
                        elem: 'link',
                        attrs: { href: 'sdk/' + item + '/' },
                        content: item
                    }))
                ]
            }
        }
    ]
});
