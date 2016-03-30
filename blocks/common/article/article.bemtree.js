block('article').content()(function() {
    return [
        { block: 'article-tags' },
        this.data.page.content
    ];
});
