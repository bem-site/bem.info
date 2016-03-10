block('footer')(
    elem('copyright-bem').tag()('strong'),

    elem('copyright-ya')(
        tag()('a'),
        attrs()(function() {
            return { href: this.ctx.url };
        })
    )
);
