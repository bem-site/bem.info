({
    mustDeps: ['i-bem-dom', 'i18n'],
    shouldDeps: [
        'heading',
        'quiz-feedback',
        {
            elems: ['inner', 'table', 'title', 'accept', 'decline', 'close']
        },
        {
            block: 'button',
            mods: { theme: 'islands', size: 'l', view: 'action' }
        },
        {
            block: 'modal',
            mods: { theme: 'islands', autoclosable: true, 'has-close': true }
        }
    ]
})
