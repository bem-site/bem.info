block('promo-quotes')(
    elem('quote')(
        tag()('dl')
    ),
    elem('name')(
        tag()('dt')
    ),
    elem('position')(
        tag()('dd')
    ),
    elem('photo')(
        // TODO: use external images via
        //tag()('img'),
        attrs()(function() {
            var ctx = this.ctx;

            return this.extend(applyNext(), {
                src: ctx.url,
                alt: ctx.alt
            });
        })
    ),
    elem('text')(
        tag()('blockquote')
    )
);
