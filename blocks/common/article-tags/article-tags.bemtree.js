block('article-tags').content()(function() {
    var data = this.data,
        page = data.page;

    return page.tags && [
        page.tags.map(function(tag) {
            return {
                elem: 'tag',
                content: {
                    elem: 'link',
                    attrs: { href: data.root + '/tags/' + tag },
                    content: tag
                }
            }
        })
    ];
});
