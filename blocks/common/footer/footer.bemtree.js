block('footer').content()(function() {
    return [
        {
            block: 'legos',
            mods: { color: 'inverted' }
        },
        apply('promo'),
        {
            elem: 'layout',
            content: [
                {
                    elem: 'community',
                    content: [
                        {
                            elem: 'channel',
                            url: 'https://ru.bem.info/forum/',
                            content: 'Форум'
                        },
                        {
                            elem: 'channel',
                            url: 'https://www.facebook.com/groups/bem.info/',
                            content: 'Facebook'
                        },
                        {
                            elem: 'channel',
                            url: 'https://twitter.com/bem_ru/',
                            content: 'Twitter'
                        }
                    ]
                },
                apply('index')
            ]
        }
    ];
});
