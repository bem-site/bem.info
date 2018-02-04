block('nav').content()(function() {
    var data = this.data,
        site = data.page.site,
        lang = data.lang,
        result;

    result = data.pages.filter(function(page) {
            if (!new RegExp('^' + site).test(page.url) || page.nav === false) { return false; }

            return page.url.split('/').length === site.split('/').length + 1;
        }).map(function(item) {
            var isCurrent = this.data.page.url === item.url,
                title = typeof item.title === 'string' ? item.title : item.title[lang];

            return {
                elem: 'item',
                elemMods: { current: isCurrent },
                content: isCurrent ? title : {
                    elem: 'link',
                    attrs: { href: data.root + item.url },
                    content: title
                }
            };
        }, this);

    this.ctx.items && result.push({
        elem: 'item',
        content: this.ctx.items
    });

    return result;
});
