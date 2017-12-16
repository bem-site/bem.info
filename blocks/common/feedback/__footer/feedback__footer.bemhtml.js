block('feedback').elem('footer').content()(function() {
    return [
        {
            block: 'button',
            mods: {
                theme: 'islands',
                size: 'l',
                view: 'plain'
            },
            mix: { block: this.block, elem: 'cancel', js: true },
            text: 'Cancel'
        },
        {
            block: 'button',
            mods: {
                theme: 'islands',
                size: 'l',
                view: 'action',
                disabled: true
            },
            mix: { block: this.block, elem: 'submit', js: true },
            text: 'Send'
        }
    ];
});
