block('promo-footer')(
    elem('header').tag()('h1'),
    elem('title').tag()('span'),
    elem('subtitle').tag()('span'),
    elem('text').tag()('p'),

    js()(true),
	content()(function() {
		return [
            {
                block: 'promo-logo',
                content: [1, 2, 3].map(function(i) {
                    return {
                        elem: 'logo', elemMods: { methodology: i }
                    };
                })
            },
			applyNext()
        ];
	})
);
