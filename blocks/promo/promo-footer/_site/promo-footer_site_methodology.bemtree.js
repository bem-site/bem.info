block('promo-footer').mod('site', 'methodology').content()([
    {
        block : 'promo-title',
        mix: { block: 'promo-footer', elem: 'title' },
        mods:{ color:'white'},
        content : [
            'You should ',
            {
                elem: 'highlighted',
                content:'use BEM'
            },
            ' too'
            ]
    },
    {
        block : 'promo-title',
        mix: { block: 'promo-footer', elem: 'title' },
        mods:{ color:'white', size :'small' },
        content : 'There are no reason not to do so'
    },
    {
        block : 'promo-action',
        url : 'key-concepts/',
        content : 'Документация'
    }
]);
