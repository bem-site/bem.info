block('article-amendments')(
    elem('edit')(
        tag()('a'),
        attrs()(function() {
            return this.extend(applyNext(), {
                href: this.ctx.url.replace('https://github.com/', 'http://prose.io/#')
            });
        })
    ),
    elem('issue')(
        tag()('a'),
        attrs()(function() {
            return this.extend(applyNext(), {
                href: this.ctx.url.split('/blob/')[0] + '/issues/new'
            });
        })
    )
);
