block('promo-menu').content()(function(node, ctx) {
    var main = [],
        side = [];

    ctx.data.forEach(function(value) {
        var isMain = !value.additional,
            item = {
            elem: 'item',
            content: {
                elem: 'link',
                attrs: { href: value.url },
                content: [
                    { elem: 'title', content: value.text },
                    { elem: 'subtitle', content: value.subtitle }
                ]
            }
        };

        isMain ? main.push(item) : side.push(item);
    });

    return [
        {
            elem: 'main',
            content: [
                {
                    elem: 'menu',
                    elemMods: { type: 'columns' },
                    content: main
                }
            ]
        },
        side && {
            elem: 'side',
            content: [
                {
                    elem: 'menu-title',
                    content: this.i18n(this.block, ctx.title ? ctx.title.side : ctx.title)
                },
                {
                    elem: 'menu',
                    content: side
                }
            ]
        }
    ]
});
