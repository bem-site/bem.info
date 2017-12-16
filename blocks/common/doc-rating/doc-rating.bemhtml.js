block('doc-rating').js()(true);
block('doc-rating').content()(function() {
    var ctx = this.ctx;

    return [
        {
            elem: 'value'
        },
        {
            block: 'rating-stars',
            mix: { block: this.block, elem: 'stars' }
        },
        {
            elem: 'total',
            content: ctx.total
        },
        {
            block: 'modal',
            mods: { autoclosable: true, theme: 'islands' },
            mix: { block: this.block, elem: 'modal' },
            content: {
                block: 'feedback',
                mix: { block: this.block, elem: 'feedback' }
            }
        }
    ];
});
