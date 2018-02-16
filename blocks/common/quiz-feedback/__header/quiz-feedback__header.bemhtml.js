block('quiz-feedback').elem('header').content()(function() {
    return [
        {
            block: 'heading',
            mods: { level: 2 },
            content: this.i18n(this.block, 'subtitle')
        }
    ];
});
