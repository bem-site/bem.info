block('lang-switcher').content()(function() {
    var data = this.data,
        page = data.page;

    return data.langs.reduce(function(result, lang) {
        if (page.hidden && page.hidden.indexOf(lang) > -1)
            return result;

        var host = process.env.YENV === 'production' ? '//' + lang + '.bem.info' : '/bem.info/' + lang,
            isCurrent = data.lang === lang;

        result.push({
            elem: 'item',
            elemMods: isCurrent && { current: true },
            content: isCurrent ? lang : {
                elem: 'link',
                attrs: { href: host + page.url },
                content: lang
            }
        });

        return result;
    }, [], this);
});
