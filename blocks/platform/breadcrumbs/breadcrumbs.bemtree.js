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
            mix: [
                { elem: 'version', js: { url: data.root + site.replace(version + '/', '') } },
                'i-bem' // TODO: get rid of mix with i-bem
            ],
            content: {
                block: 'select',
                mods: { mode: 'radio-check', theme: 'islands', size: 'm' },
                text: '',
                options: options.reverse()
            }
        };
    }
});
