block('feedback').elem('body').content()(function() {
    return [
        {
            block: 'radio-group',
            mods: {
                theme: 'islands',
                size: 'l',
                type: 'button'
            },
            mix: { block: this.block, elem: 'radio-group' },
            name: 'val',
            val: 5,
            options: [1, 2, 3, 4, 5].map(function(i) {
                return {
                    val: i,
                    text: i
                };
            })
        },
        {
            block: 'textarea',
            mods: {
                theme: 'islands',
                size: 'l',
                width: 'available'
            },
            mix: { block: this.block, elem: 'textarea' }
        }
    ];
});
