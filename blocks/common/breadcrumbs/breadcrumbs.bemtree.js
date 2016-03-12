block('breadcrumbs').content()(function() {
    var data = this.data,
        page = data.page,
        site = page.site;

    var result = [];

    data.pages.filter(function(item) {
        if (item.url === '/') { return false; }

        if (!new RegExp('^' + item.url).test(site)) { return false; }

        return item.url.split('/').length <= site.split('/').length;
    }).forEach(function(item) {
        result.push({
            elem: 'item',
            content: page.url === item.url ? item.title : {
                elem: 'link',
                attrs: { href: data.root + item.url },
                content: item.title
            }
        });
    }, this);

    result.push(apply('lib'));

    return result;
});
