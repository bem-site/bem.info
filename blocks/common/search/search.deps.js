({
    shouldDeps: [
        'form',
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
                // 'has-clear': true
            }
        },
        { elems: ['submit', 'open', 'close'] }
    ]
})
