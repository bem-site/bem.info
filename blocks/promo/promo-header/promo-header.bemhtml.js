block('promo-header')(
    tag()('div'), // TODO: may be <header> ?
    elem('header').tag()('h1'),
    elem('title').tag()('span'),
    elem('subtitle').tag()('span'),
    elem('text').tag()('p'),
    elem('link').tag()('a'),
    mix()({ block: 'page-bg', mods: { site: 'methodology' } }),

	content()(function() {
		return [
            {
                block: 'promo-logo',
                content: [
                    {
                        elem: 'logo', elemMods: { methodology: 1, bright: true }
                    },
                    {
                        elem: 'logo', elemMods: { methodology: 2 }
                    },
                    {
                        elem: 'logo', elemMods: { methodology: 3 }
                    }
                ]
            },
			applyNext()
        ];
	})
);
