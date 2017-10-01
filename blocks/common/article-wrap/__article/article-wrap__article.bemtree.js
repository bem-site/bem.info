block('article-wrap').mode('article')(
    match(function() {
        var type = this.data.page.type;
        return !type || type === 'lib' || type === 'versioned';
    })(function() {
        var data = this.data,
            page = data.page;

        return [
            { block: 'article' },
            { block: 'article-amendments' },
            {
                block: 'social-likes',
                params: page.head.meta,
                lang: data.lang
            }
        ];
    })
);

