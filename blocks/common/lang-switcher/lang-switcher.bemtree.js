block('lang-switcher').content()(function() {
    var data = this.data;

    return data.langs.map(function(lang) {
        var isCurrent = data.lang === lang,
            host = process.env.YENV === 'production' ? '//' + lang + '.bem.info' : '/bem.info/' + lang;

        return {
            elem: 'item',
            content: isCurrent ?
            {
                elem: 'current',
                content: lang
            } : {
                elem: 'link',
                attrs: { href: host + data.page.url },
                content: lang
            }
        };
    }, this);
});
