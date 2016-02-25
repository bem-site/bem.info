block('search').content()(function() {
    var lang = this.data.lang,
        siteMod = this.data.siteMod;

    return [
        {
            block: 'form',
            mix: [
                { block: 'search', elem: 'form', elemMods: { site: siteMod } }
            ],
            action: 'https://yandex.' + (lang === 'ru' ? 'ru' : 'com') + '/sitesearch',
            attrs: { target: '_blank' },
            content: [
                {
                    block: 'input',
                    mix: { block: 'search', elem: 'input' },
                    mods: {
                        theme: 'islands',
                        size: 'l',
                        type: 'search'
                    },
                    name: 'text',
                    autocomplete: false,
                    // TODO i18n
                    placeholder: lang === 'ru' ? 'Искать' : 'Search'
                },
                {
                    tag: 'input', attrs: { type: 'hidden', name: 'reqenc' }
                },
                {
                    tag: 'input', attrs: { type: 'hidden', name: 'searchid', value: '1944806' }
                },
                {
                    tag: 'input', attrs: { type: 'hidden', name: 'l10n', value: lang }
                },
                {
                    block: 'search',
                    elem: 'submit',
                    tag: 'button',
                    attrs: { type: 'submit' }
                }
            ]
        },
        {
            elem: 'open'
        },
        {
            elem: 'close'
        }
    ]
});
