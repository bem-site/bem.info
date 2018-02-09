block('feedback').elem('header').content()(function() {
    return [
        {
            block: 'heading',
            mods: { level: 3 },
            content: this.i18n('feedback', 'send') // 'Send feedback'
        }
    ];
});
