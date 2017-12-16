block('lang-switcher').content()(function() {
    var data = this.data;

    return [
        data.lang.toUpperCase(),
        {
            elem: 'change',
            js: { lang: data.lang },
            mix: [
                'i-bem' // TODO: get rid of mix with i-bem
            ],
            content: {
                block: 'select',
                mods: {
                    header: true,
                    mode: 'radio-check',
                    theme: 'islands',
                    size: 'm'
                },
                text: '',
                options: data.langs.reduce(function(acc, lang) {
                    (lang !== data.lang) && acc.push({
                        val: lang,
                        text: {
                            en: 'English',
                            ru: 'Русский',
                            uk: 'Українська'
                        }[lang]
                    });

                    return acc;
                }, [])
            }
        }
    ];
});
