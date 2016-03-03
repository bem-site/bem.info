block('promo-features')(
    elem('image')(
        tag()('img'),
        attrs()(function() {
            return this.extend(applyNext(), {
                src: this.ctx.url
            });
        })
    ),
    elem('text')(
        tag()('p')
    )
);
