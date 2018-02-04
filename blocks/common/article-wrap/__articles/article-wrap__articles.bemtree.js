block('article-wrap').mode('articles')(
    match(function() { return this.data.page.type === 'articles' })(function() {
        var data = this.data,
            page = data.page;

        return [
            { block: 'articles' },
            // { block: 'articles-add' },
            {
                block: 'social-likes',
                params: page.head.meta,
                lang: data.lang
            }
        ];
    })
);

