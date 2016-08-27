block('article-wrap').content()(function() {
    var data = this.data,
        page = data.page;

    return [
        page.isTranslationMissed && { block: 'article-translation-missed' },
        apply('articles'),
        apply('article'),
        {
            block: 'social-likes',
            params: page.head.meta,
            lang: data.lang
        }
    ];
});
