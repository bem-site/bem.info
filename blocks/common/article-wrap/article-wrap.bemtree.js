block('article-wrap').content()(function() {
    var data = this.data,
        page = data.page;

    return [
        { block: 'article-rewind' },
        { block: 'article' },
        { block: 'article-amendments' },
        {
            block: 'social-likes',
            params: page.head.meta,
            lang: data.lang
        }
    ];
});
