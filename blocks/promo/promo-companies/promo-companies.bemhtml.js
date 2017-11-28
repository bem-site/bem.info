block('promo-companies')(
    elem('company')(
        tag()('a'),
        addAttrs()(function() {
            return { href: this.ctx.url };
        }),
        content()(function() {
            return {
                elem: 'logo',
                attrs: {
                    alt: applyNext(),
                    src: this.freeze(this.ctx.src)
                }
            };
        })
    ),

    elem('logo')(
        tag()('img')
    )
);
