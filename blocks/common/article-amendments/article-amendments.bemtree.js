block('article-amendments').content()(function() {
    var url = this.data.page.source || '';

    // No useful prose.io / GitHub-issues link when source isn't on GitHub.
    if (!/^https?:\/\/github\.com\//.test(url)) return;

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
