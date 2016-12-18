block('breadcrumbs').mode('lib')(function() {
    var data = this.data,
        page = data.page,
        site = page.site;

    if (page.type === 'lib') {
        var version = page.version,
            options = [];

        data.libs[page.library].forEach(function(ver) {
            if (ver !== version) {
                options.push({ val: ver, text: ver });
            }
        });

        return {
            elem: 'item',
            mix: { elem: 'version' },
            content: {
                block: 'select',
                mods: { mode: 'radio-check', theme: 'islands', size: 'm' },
                text: '',
                js: { url: data.root + site.replace(version + '/', '') },
                options: options.reverse()
            }
        };
    }
});
