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
                    lang: data.lang,
                    origin: data.siteConfig.origins[data.lang]
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
