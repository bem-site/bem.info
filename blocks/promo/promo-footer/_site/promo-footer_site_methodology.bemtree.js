block('promo-footer').mod('site', 'methodology').content()([
    {
        block: 'promo-title',
        mods: { color: 'white' },
        content: [
            'You should ',
            {
                elem: 'highlighted',
                content: [
                    'use ',
                    { block: 'bem' }
                ]
            },
            ' too'
        ]
    },
    {
        block: 'promo-title',
        mods: { color: 'white' },
        content: 'There are no reason not to do so'
    },
    {
        block: 'promo-action',
        url: 'key-concepts/',
        content: 'Документация'
    }
]);
