block('article-wrap').mode('article')(
    match(function() {
        var type = this.data.page.type;
        return !type || type === 'lib' || type === 'versioned';
    })(function() {
        var data = this.data,
            page = data.page,
            isShowRewind = !page.type || page.type === 'versioned';

        return [
            { block: 'article' },
            isShowRewind && { block: 'article-rewind', mods: { type: 'floating' } },
            { block: 'article-amendments' },
            {
                block: 'social-likes',
                params: page.head.meta,
                lang: data.lang
            },
            isShowRewind && { block: 'article-rewind', mods: { type: 'static', lang: data.lang } }
        ];
    })
);

