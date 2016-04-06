block('promo-footer').mod('site', 'methodology').content()([
    {
        block: 'promo-title',
        mods: { color: 'white' },
        content: [
            'Вы тоже ',
            // 'You should ',
            {
                block: 'promo-highlight',
                content: 'используйте'
                // 'use',
            },
            ' ',
            { block: 'bem' }
            // ' too'
        ]
    },
    {
        block: 'promo-title',
        mods: { color: 'white' },
        content: 'Нет повода не попробовать'
        // 'There are no reason not to do so'
    },
    {
        block: 'promo-action',
        attrs: { href: 'key-concepts/' },
        content: 'Документация'
    }
]);
