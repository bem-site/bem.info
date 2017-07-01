block('breadcrumbs').mode('dropdown')(function() {
    var data = this.data,
        page = data.page,
        site = page.site;

    if (page.type === 'lib' || page.type === 'versioned') {
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
