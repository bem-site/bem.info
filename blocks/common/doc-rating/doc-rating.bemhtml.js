block('doc-rating')(
    js()(true),

    elem('total').tag()('span'),
    elem('value').tag()('span'),

    content()(function() {
        var ctx = this.ctx;

        return [
            {
                elem: 'title',
                content: 'Оцените статью', // TODO: i18n
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
                elem: 'value'
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
    })
);
