block('footer')(
    elem('copyright-logo')(
        tag()('a'),
        attrs()(function() {
            return { href: this.ctx.url };
        }),
        content()(function() {
            return {
                elem: 'copyright-logo-img',
                attrs: { alt: applyNext() }
            };
        })
    ),

    elem('copyright-logo-img')(
        tag()('img'),
        attrs()(function() {
            // TODO: how to process this with borschik ?
            // TODO: i18n
            return this.extend(applyNext(), {
                src: '/footer__copyright-logo_lang_en.svgz'
            });
        })
    )
);
