block('promo-company')(
    tag()('div'),
    elem('title')(
        tag()('div')
    ),
    elem('company')(
        tag()('a'),
        attrs()(function () {
            return {href: this.ctx.url};
        }),
        content()(function () {
            return {
                elem: 'company-img',
                attrs: {
                    alt: applyNext(),
                    src: this.ctx.src
                }
            };
        })
    ),

    elem('company-img')(
        tag()('img')
    )
);
