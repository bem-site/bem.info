block('promo-companies')(
    elem('company')(
        tag()('a'),
        attrs()(function () {
            return { href: this.ctx.url };
        }),
        content()(function () {
            return {
                elem: 'logo',
                attrs: {
                    alt: applyNext(),
                    src: this.ctx.src
                }
            };
        })
    ),

    elem('logo')(
        tag()('img')
    )
);
