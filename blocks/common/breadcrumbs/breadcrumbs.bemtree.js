block('breadcrumbs').content()(function() {
    var data = this.data,
        page = data.page,
        site = page.site;

    var result = [];

    data.pages.filter(function(item) {
        if (item.url === '/') return;

        if (!new RegExp('^' + item.url).test(site)) return;

        return item.url.split('/').length <= site.split('/').length;
    }).map(function(item, idx) {
        result.push({
            elem: 'item',
            content: page.url === item.url ? item.title : {
                elem: 'link',
                attrs: { href: item.url },
                content: item.title
            }
        });
    }, this);

    result.push(apply('lib'));

    return result;
});
