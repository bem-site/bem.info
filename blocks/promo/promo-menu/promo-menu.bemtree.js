block('promo-menu').content()(function(node, ctx) {
    var data = ctx.data;

    return [
        {
            elem: 'main',
            content: [
                ctx.legos && {
                    block: 'legos',
                    mods: ctx.legosMods
                },
                {
                    elem: 'menu-title',
                    content: this.i18n(this.block, ctx.title)
                },
                {
                    elem: 'menu',
                    elemMods: { type: 'columns' },
                    content: data.map(function(value, index) {
                        return {
                            elem: 'item',
                            content: {
                                elem: 'link',
                                attrs: { href: value.url },
                                content: [
                                    { elem: 'number', content: index + 1 },
                                    {
                                        elem: 'link-text',
                                        content: [
                                            { elem: 'title', content: value.text },
                                            { elem: 'subtitle', content: value.subtitle }
                                        ]
                                    }
                                ]
                            }
                        };
                    })
                }
            ]
        }
    ]
});
