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
        //tag()('img'),
        attrs()(function() {
            return this.extend(applyNext(), {
                //src: '/promo-section__quote.svg'
                //alt: applyNext()
            });
        })
    ),
    elem('text')(
        tag()('quote')
    )
);
