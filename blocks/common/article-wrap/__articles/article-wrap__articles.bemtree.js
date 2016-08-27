block('article-wrap').mode('articles')(
    match(function() { return this.data.page.type === 'articles' })(function() {
        return [
            { block: 'articles' },
            // { block: 'articles-add' },
        ];
    })
);

