block('footer')(
    elem('copyright-bem').tag()('strong'),

    elem('copyright-ya')(
        tag()('a'),
        addAttrs()(function() {
            return { href: this.ctx.url };
        })
    )
);
