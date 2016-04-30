block('promo-quotes').tag()(
    elem('quote')('dl'),
    elem('name')('dt'),
    elem('position')('dd'),
    elem('photo')('img'),
    elem('link')('a'),
    elem('text')('q')
);

/*
block('promo-quotes')(
    tag()('dl'),
    elem('name').tag()('dt'),
    elem('position').tag()('dd'),
    elem('text').tag()('dd'),
    elem('photo')(
		tag()('img'),
        attrs()(function() {
            return this.extend(applyNext(), {
            	alt: this.ctx.alt,
                src: this.freeze(this.ctx.src)
            });
        })
	),
    elem('link').tag()('a')
);
*/
