block('lang-switcher').content()(function() {
    var data = this.data;

    return data.langs.map(function(lang) {
        var isCurrent = data.lang === lang;

        return {
            elem: 'item',
            content: isCurrent ? lang : {
                elem: 'link',
                attrs: { href: '//' + lang + '.bem.info' + data.page.url },
                content: lang
            }
        };
    }, this);
});
