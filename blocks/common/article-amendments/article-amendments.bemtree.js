block('article-amendments').content()(function() {
    var url = this.data.page.source || '';

    return [
        {
            elem: 'edit',
            mix: { elem: 'link' },
            content: this.i18n(this.block, 'edit'),
            url: url
        },
        {
            elem: 'issue',
            mix: { elem: 'link' },
            content: this.i18n(this.block, 'issue'),
            url: url
        }
    ];
});
