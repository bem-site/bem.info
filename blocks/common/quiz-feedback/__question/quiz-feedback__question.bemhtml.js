block('quiz-feedback').elem('question').content()(function() {
    const ctx = this.ctx;
    return [
        {
            block: 'heading',
            mods: { level: 3 },
            mix: { block: this.block, elem: 'text' },
            content: ctx.text
        },
        {
            block: 'radio-group',
            mods: { theme: 'islands', size: 'm' },
            mix: { block: this.block, elem: 'radio-group'},
            name: ctx.name,
            options: ctx.options
        }
    ];
});
