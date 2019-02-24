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

    result.push(apply('dropdown'));

    return result;
});

block('breadcrumbs').mode('dropdown')(function() {
    var data = this.data,
        page = data.page,
        root = data.root,
        site = page.site;

    if (data.libs[page.library] && (page.type === 'lib' || page.type === 'versioned')) {
        var version = page.version;

        return {
            elem: 'item',
            mix: { elem: 'version' },
            content: {
                block: 'select',
                mods: {
                    header: true,
                    mode: 'radio-check',
                    theme: 'islands',
                    size: 'l'
                },
                text: '',
                options: data.libs[page.library].reduce(function(acc, ver) {
                    (ver !== version) && acc.push({
                        val: root + site.replace(version + '/', '') + ver + '/',
                        text: ver
                    });

                    return acc;
                }, []).reverse()
            }
        };
    }
});
