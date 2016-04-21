block('footer').content()(function() {
    var lang = this.data.lang;

    return [
        {
            block: 'legos',
            mods: { inverted: true }
        },
        apply('promo'),
        {
            elem: 'layout',
            content: [
                {
                    elem: 'community',
                    content: [
                        lang === 'ru' ? {
                            elem: 'channel',
                            url: 'https://web-standards.slack.com/messages/bem/',
                            content: 'Slack'
                        } : undefined,
                        {
                            elem: 'channel',
                            url: 'https://www.facebook.com/groups/bem.info/',
                            content: 'Facebook'
                        },
                        {
                            elem: 'channel',
                            url: 'https://twitter.com/bem_' + lang + '/',
                            content: 'Twitter'
                        }
                    ]
                },
                apply('index')
            ]
        }
    ];
});
