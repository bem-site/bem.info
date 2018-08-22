block('aside').content()(function() {
    var data = this.data,
        page = data.page;

    return [
        {
            elem: 'group',
            content: [
                {
                    block: 'article-tags',
                    mix: {
                        block: 'aside',
                        elem: 'tags'
                    }
                },
                {
                    block: 'social-likes',
                    mix: {
                        block: 'aside',
                        elem: 'social'
                    },
                    params: page.head.meta,
                    lang: data.lang
                },
                {
                    block: 'doc-rating',
                    mix: {
                        block: 'aside',
                        elem: 'rating'
                    }
                }
            ]
        },
        {
            block: 'article-amendments',
            mix: {
                block: 'aside',
                elem: 'amendments'
            }
        }
    ];
});
