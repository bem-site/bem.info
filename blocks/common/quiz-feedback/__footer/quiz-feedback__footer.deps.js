({
    mustDeps: ['i-bem-dom', 'i18n'],
    shouldDeps: [
        {
            block: 'button',
            mods: ['action', 'plain'].map((view) => {
                return {
                    theme: 'islands',
                    size: 'l',
                    view: view
                };
            })
        }
    ]
})
