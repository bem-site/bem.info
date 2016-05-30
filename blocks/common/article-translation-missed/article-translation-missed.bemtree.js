block('article-translation-missed').content()(function() {
    return [
        this.i18n(this.block, 'text'), // The translation of this article into your language is missing, you can help us
        ' ',
        {
            elem: 'translate',
            content: this.i18n(this.block, 'translate'), // translate
            attrs: { href: 'https://github.com/bem-site/translation' }
        },
        '.'
    ]
});
