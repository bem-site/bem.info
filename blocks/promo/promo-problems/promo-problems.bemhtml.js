block('promo-problems')(
    elem('img')(
        tag()('img'),
        attrs()(function() {
            var ctx = this.ctx;

            return this.extend(applyNext(), {
                src: ctx.url,
                alt: ctx.alt
            });
        })
    )
);
