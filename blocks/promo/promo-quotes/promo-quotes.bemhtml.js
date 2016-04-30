block('promo-quotes')(
    tag()('ul'),
    elem('quote').tag()('li'),
    elem('name').tag()('strong'),
    elem('position').tag()('span'),
    elem('text').tag()('q'),
    elem('link').tag()('a'),
    elem('photo')(
		tag()('img'),
        attrs()(function() {
            return this.extend(applyNext(), {
                alt: this.ctx.alt,
                src: this.freeze(this.ctx.src)
            });
        })
	)
);
