block('article-amendments').content()(function() {
    return [
        this.i18n(this.block, 'text'), // 'If you notice a mistake or want something to supplement the article, you can always write to us at '
        {
            elem: 'edit',
            mix: { elem: 'link' },
            content: this.i18n(this.block, 'issue'), // Github
            url: this.data.page.source || ''
        },
        this.i18n(this.block, 'edit'), // , or correct an article using
        {
            elem: 'issue',
            mix: { elem: 'link' },
            content: 'prose.io.',
            url: this.data.page.source || ''
        }
    ]
});
