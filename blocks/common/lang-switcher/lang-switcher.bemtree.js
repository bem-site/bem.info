block('lang-switcher').content()(function() {
    var data = this.data,
        page = data.page;

    return [
        data.lang.toUpperCase(),
        {
            block: 'select',
            mods: {
                header: true,
                mode: 'radio-check',
                theme: 'islands',
                size: 'l'
            },
            text: '',
            options: data.langs.reduce(function(acc, lang) {
                var host = process.env.YENV === 'production' ?
                    '//' + lang + '.bem.info' :
                    '/bem.info/' + lang;

                (lang !== data.lang) && acc.push({
                    val: host + page.url,
                    text: {
                        en: 'English',
                        ru: 'Русский',
                        uk: 'Українська'
                    }[lang]
                });

                return acc;
            }, [])
        }
    ];
});
