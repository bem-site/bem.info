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
            content: [
                {
                    block: 'input',
                    mods: { type: 'search' },
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
                    content: {
                        block: 'search-icon',
                        mix: { block: 'search', elem: 'submit-icon' }
                    }
                }
            ]
        }
    ]
});
