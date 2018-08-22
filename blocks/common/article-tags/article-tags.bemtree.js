block('article-tags').content()(function() {
    var data = this.data,
        tags = data.page.tags;

    return tags && tags.map(function(tag) {
        return {
            elem: 'tag',
            content: {
                elem: 'link',
                // attrs: { href: data.root + '/tags/' + tag },
                content: tag
            }
        };
    });
});
