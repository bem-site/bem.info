block('rating-stars')(
    js()(true),
    tag()('span'),
    content()(function() {
        return [
            {
                elem: 'gray'
            },
            {
                elem: 'yellow',
                attrs: { style: 'width:' + (this.ctx.val || 0) * 20 + '%' }
            }
        ];
    }),
    elem('gray').content()(function() {
        function getItem(i) {
            return {
                elem: 'item',
                js: { val: i + 1 },
                elemMods: { pos: i + 1 },
                content: ['★']
            };
        }

        var prevItem = getItem(0),
            items = [prevItem],
            currentItem;

        for (var i = 1; i < 5; i++) {
            currentItem = getItem(i);
            prevItem.content.push(currentItem);
            prevItem = currentItem;
        }

        return items;
    }),
    elem('item')(
        tag()('span'),
        mix()('i-bem') // temporary hack for bem-xjst bug
    )
);
