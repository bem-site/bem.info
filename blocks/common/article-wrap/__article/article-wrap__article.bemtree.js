block('article-wrap').mode('article')(
    match(function() { return !this.data.page.type })(function() {
        return [
            { block: 'article' },
            { block: 'article-rewind' },
            { block: 'article-amendments' },
        ];
    })
);

