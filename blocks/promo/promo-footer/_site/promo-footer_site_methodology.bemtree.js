block('promo-footer').mod('site', 'methodology').content()([
    {
        block: 'promo-title',
        mods: { color: 'white' },
        content: [
            'Вы тоже используйте ',
            // 'You should ',
            {
                elem: 'highlighted',
                content: [
                    // 'use ',
                    { block: 'bem' }
                ]
            }
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
