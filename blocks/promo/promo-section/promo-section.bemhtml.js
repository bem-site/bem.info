block('promo-section')(
    elem('title')(),

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
    ),

    elem('quote')(
        content()(function () {
            return[
                {
                    elem: 'text',
                    elemMods: {
                        bold: true,
                        name: true
                    },
                    content: this.ctx.name
                },
                {
                    elem: 'text',
                    elemMods:{
                        name: true
                    },
                    content: this.ctx.position
                },
                {
                    elem:'photo',
                    attrs: { alt: applyNext() }
                },
                {
                    elem: 'text',
                    elemMods: {
                        italic: true,
                        quotes: true
                    },
                    content: this.ctx.text
                }
            ]
        })
    ),

    elem('photo')(
        //tag()('img'),
        attrs()(function() {
            return this.extend(applyNext(), {
                src: '/promo-section__quote.svg'
            });
        })
    )
);
