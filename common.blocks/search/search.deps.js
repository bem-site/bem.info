({
    shouldDeps: [
        { elems: ['switcher', 'icon'] },
        'form',
        'control-group',
        'querystring',
        {
            block: 'input',
            mods: {
                theme: 'islands',
                size: 'l',
                type: 'search',
                'has-clear': true
            }
        },
        {
            block: 'button',
            mods: {
                theme: 'islands',
                size: 'l',
                type: 'submit',
                view: 'action'
            }
        },
        {
            block: 'icon',
            mods: { type: 'search' }
        }
    ]
})
