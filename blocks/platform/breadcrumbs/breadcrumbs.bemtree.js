block('breadcrumbs').mode('lib')(function() {
    var data = this.data,
        page = data.page,
        site = page.site;

    if (page.type === 'lib') {
        var split = site.replace(/(.*)\/$/, '$1').split('/'),
            libVer = split.pop(),
            libName = split.pop();

        var options = [];
        data.libs[libName].forEach(function(ver) {
            if (ver !== libVer) {
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
                js: { url: site.replace(libVer + '/', '') },
                options: options
            }
        };
    }
});
