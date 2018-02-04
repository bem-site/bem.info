block('article-wrap').content()(function() {
    var data = this.data,
        page = data.page;

    return [
        page.isTranslationMissed && { block: 'article-translation-missed' },
        apply('articles'),
        apply('article'),
        {
            block: 'article-rewind',
            mods: { type: 'static', lang: data.lang }
        },
        {
            elem: 'side',
            content: [
                {
                    elem: 'side-group',
                    content: [
                        {
                            block: 'article-tags',
                            mix: {
                                block: 'article-wrap',
                                elem: 'tags'
                            }
                        },
                        {
                            block: 'social-likes',
                            mix: {
                                block: 'article-wrap',
                                elem: 'social'
                            },
                            params: page.head.meta,
                            lang: data.lang
                        },
                        {
                            block: 'doc-rating',
                            mix: {
                                block: 'article-wrap',
                                elem: 'rating'
                            }
                        }
                    ]
                },
                {
                    block: 'article-amendments',
                    mix: {
                        block: 'article-wrap',
                        elem: 'amendments'
                    }
                }
            ]
        }
    ];
});
