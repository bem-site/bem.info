block('article-wrap').mode('article')(
    match(function() {
        var type = this.data.page.type;
        return !type || type === 'lib';
    })(function() {
        return [
            { block: 'article' },
            !this.data.page.type && { block: 'article-rewind' },
            { block: 'article-amendments' },
        ];
    })
);

