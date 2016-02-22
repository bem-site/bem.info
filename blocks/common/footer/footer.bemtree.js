block('footer').content()(function() {
    var siteMod = this.data.siteMod,
        indexContent = siteMod === 'index' ? [
            {
                elem: 'domain',
                content: 'Jadwiga and Jacek Duniec thank you for domain!'
            },
            {
                elem: 'copyright',
                content: [
                    {
                        tag: 'strong',
                        content: 'BEM'
                    },
                    ' is proudly made by ',
                    {
                        elem: 'copyright-logo',
                        url: 'https://yandex.com/company/',
                        content: 'Yandex'
                    }
                ]
            }
        ] : [];

    return [
        {
            block: 'legos',
            mods: { color: 'inverted' }
        },
        apply('extra'),
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
                indexContent
            ]
        }
    ];
});
