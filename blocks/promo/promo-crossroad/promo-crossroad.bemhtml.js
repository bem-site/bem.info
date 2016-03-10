block('promo-crossroad')(
    elem('item').tag()('dl'),

    elem('title').tag()('dt'),

    elem('title-link')(
        tag()('a'),
        attrs()(function() {
            return this.extend(applyNext(), {
                href: this.ctx.url
            });
        })
    ),

    elem('img')(
        tag()('img'),
        attrs()(function() {
            return this.extend(applyNext(), {
                src: this.ctx.url
            });
        })
    ),

    elem('text').tag()('dd'),

    elem('text-link')(
        tag()('a'),
        attrs()(function() {
            return this.extend(applyNext(), {
                href: this.ctx.url
            });
        })
    )
);
