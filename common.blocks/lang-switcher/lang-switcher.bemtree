block('lang-switcher').content()(function() {
    var data = this.data;

    return data.langs.map(function(lang) {
        var isCurrent = data.lang === lang;

        return {
            elem: 'item',
            content: isCurrent ? lang : {
                block: 'link',
                mix: { block: 'lang-switcher', elem: 'link' },
                url: '//' + lang + '.bem.info' + data.page.url,
                content: lang
            }
        };
    }, this);
});
