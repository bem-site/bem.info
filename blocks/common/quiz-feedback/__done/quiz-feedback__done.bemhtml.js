block('quiz-feedback').elem('done').content()(function() {
    return [
        {
            block: 'heading',
            mods: { level: 2 },
            content: this.i18n(this.block, 'thank-you')
        },
        {
            block: 'button',
            mods: {
                theme: 'islands',
                size: 'l',
                view: 'action'
            },
            mix: { block: this.block, elem: 'close', js: true },
            text: this.i18n(this.block, 'button-close')
        }
    ]
});
