block('promo-features')(
    elem('image')(
        tag()('img'),
        addAttrs()(function() {
            return this.extend(applyNext(), {
                src: this.freeze(this.ctx.url)
            });
        })
    ),
    elem('separator').tag()('span')
);
