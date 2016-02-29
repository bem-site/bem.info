block('promo-footer').mod('site', 'methodology').content()([
    {
        block : 'promo-title',
        mods:{ color:'white', size :'small' },
        content : [
            'You should ',
            {
                elem: 'highlighted-words',
                content:'use BEM'
            },
            ' too'
            ]
    },
    {
        block : 'promo-title',
        mods:{ color:'white', size :'small' },
        content : 'There are no reason not to do so'
    },
    {
        block : 'promo-action',
        url : 'key-concepts/',
        content : 'Документация'
    }
]);
