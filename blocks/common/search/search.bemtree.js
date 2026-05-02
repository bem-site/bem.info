block('search').content()(function() {
    var lang = this.data.lang,
        siteMod = this.data.siteMod;

    return [
        {
            block: 'search',
            elem: 'form',
            elemMods: { site: siteMod },
            content: [
                {
                    block: 'input',
                    mods: { type: 'search' },
                    name: 'q',
                    autocomplete: false,
                    // TODO i18n
                    placeholder: lang === 'ru' ? 'Поиск по сайту' : 'Search the docs'
                },
                {
                    block: 'search',
                    elem: 'submit',
                    content: {
                        block: 'search-icon',
                        mix: { block: 'search', elem: 'submit-icon' }
                    }
                },
                { block: 'search', elem: 'results' }
            ]
        }
    ];
});
