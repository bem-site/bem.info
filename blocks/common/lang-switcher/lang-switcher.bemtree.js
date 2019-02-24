block('lang-switcher').content()(function() {
    var data = this.data,
        page = data.page;

    return data.langs.reduce(function(result, lang, index) {
        var host = process.env.YENV === 'production' ? '//' + lang + '.bem.info' : '/bem.info/' + lang,
            content = lang.toUpperCase();

        if (index !== 0) {
            result.push({
                elem: 'separator',
                content: ' '
            });
        }

        result.push(data.lang === lang ? content : {
            elem: 'link',
            tag: 'a',
            attrs: { href: host + page.url },
            content: content
        });

        return result;
    }, [], this);
});
