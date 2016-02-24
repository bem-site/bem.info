block('nav').content()(function() {
    var data = this.data,
        site = data.page.site,
        lang = data.lang;

    return data.pages.filter(function(item) {
        if (!new RegExp('^' + site).test(item.url) || item.url.indexOf('/forum/') != -1) return;
        return item.url.split('/').length === site.split('/').length + 1;
    }).map(function(item) {
        var isCurrent = this.data.page.url === item.url,
            title = typeof item.title === 'string' ? item.title : item.title[lang];

        return {
            elem: 'item',
            elemMods: { current: isCurrent },
            content: isCurrent ? title : {
                block: 'link',
                mix: { block: 'nav', elem: 'link' },
                url: item.url,
                content: title
            }
        };
    }, this);
});
