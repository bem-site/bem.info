block('article-amendments').content()(function() {
    return [
        this.i18n(this.block, 'text'), // 'Report an error on '
        {
            elem: 'issue',
            mix: { elem: 'link' },
            content: this.i18n(this.block, 'issue'), // Github
            url: this.data.page.source || ''
        },
        this.i18n(this.block, 'edit'), // , or correct using
        {
            elem: 'edit',
            mix: { elem: 'link' },
            content: 'prose.io.',
            url: this.data.page.source || ''
        }
    ]
});
