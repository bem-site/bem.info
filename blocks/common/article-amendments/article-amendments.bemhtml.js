block('article-amendments')(
    elem('edit')(
        tag()('a'),
        addAttrs()(function() {
            return this.extend(applyNext(), {
                href: this.ctx.url.replace('https://github.com/', 'http://prose.io/#')
            });
        })
    ),
    elem('issue')(
        tag()('a'),
        addAttrs()(function() {
            return this.extend(applyNext(), {
                href: this.ctx.url.split('/blob/')[0] + '/issues/new'
            });
        })
    )
);
