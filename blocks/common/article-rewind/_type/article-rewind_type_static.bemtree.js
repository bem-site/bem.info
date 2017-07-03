block('article-rewind').mod('type', 'static').mode('next-text')(function() {
    return {
        elem: 'next-text',
        content: this.i18n(this.block, 'next')
    }
});
