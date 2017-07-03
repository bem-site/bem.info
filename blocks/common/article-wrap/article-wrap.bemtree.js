block('article-wrap').content()(function() {
    var data = this.data,
        page = data.page;

    return [
        page.isTranslationMissed && { block: 'article-translation-missed' },
        apply('articles'),
        apply('article')
    ];
});
