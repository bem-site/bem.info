block('article').content()(function() {
    return [
        { block: 'article-tags' },
        { html: this.data.page.content }
    ];
});
