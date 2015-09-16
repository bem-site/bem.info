block('search').content()(function() {
    return [
        {
            elem: 'switcher',
            mix: { elem: 'icon' }
        },
        {
            block: 'form',
            mix: [
                { block: 'search', elem: 'form' },
                { block: 'control-group' }
            ],
            content: [
                {
                    block: 'input',
                    mix: { block: 'search', elem: 'input' },
                    mods: {
                        theme: 'islands',
                        size: 'l',
                        type: 'search',
                        'has-clear': true
                    },
                    name: 'q'
                },
                {
                    block: 'button',
                    mods: {
                        theme: 'islands',
                        size: 'l',
                        type: 'submit',
                        view: 'action'
                    },
                    icon: {
                        block: 'icon',
                        mix: { block: 'search', elem: 'icon' }
                    }
                }
            ]
        }
    ]
});
