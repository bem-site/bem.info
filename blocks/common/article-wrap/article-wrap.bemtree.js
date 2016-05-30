block('article-wrap').content()(function() {
    var data = this.data,
        page = data.page;

    return [
        page.isTranslationMissed && { block: 'article-translation-missed' },
        { block: page.type === 'articles' ? 'articles' : 'article' },
        { block: 'article-rewind' },
        { block: page.type === 'articles' ? 'articles-add' : 'article-amendments' },
        {
            block: 'social-likes',
            params: page.head.meta,
            lang: data.lang
        }
    ];
});
