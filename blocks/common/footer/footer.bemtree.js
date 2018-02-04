block('footer').content()(function() {
    var lang = this.data.lang;

    if (lang === 'uk') {
        lang = 'ru';
    } else if (lang !== 'ru' && lang !== 'en') {
        lang = 'en';
    }

    return [
        apply('legos'),
        apply('promo'),
        {
            elem: 'layout',
            content: [
                {
                    elem: 'community',
                    content: [
                        {
                            elem: 'channel',
                            url: 'https://telegram.me/bem_' + lang,
                            content: 'Telegram'
                        },
                        lang === 'ru' && {
                            elem: 'channel',
                            url: 'https://web-standards.slack.com/messages/bem/',
                            content: 'Slack'
                        },
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
