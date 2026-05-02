({
    shouldDeps: [
        'events',
        'header',
        'search-icon',
        {
            block: 'keyboard',
            elem: 'codes'
        },
        {
            block: 'input',
            mods: {
                type: 'search'
            }
        },
        { elems: ['submit', 'open', 'close', 'results'] }
    ]
})
