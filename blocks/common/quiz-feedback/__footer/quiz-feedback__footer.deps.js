({
    mustDeps: { block: 'i-bem-dom' },
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
