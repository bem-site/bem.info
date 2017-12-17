block('breadcrumbs').mode('dropdown')(function() {
    var data = this.data,
        page = data.page,
        root = data.root,
        site = page.site;

    if (page.type === 'lib' || page.type === 'versioned') {
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
