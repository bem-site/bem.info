block('promo-header')(
    tag()('div'), // TODO: may be <header> ?
    elem('header').tag()('h1'),
    elem('title').tag()('span'),
    elem('subtitle').tag()('span'),
    elem('text').tag()('p'),
    js()(true),

    elem('action').replace()(function() {
        return {
            block: 'link',
            mix: { block: 'promo-header', elem: 'action' },
            url: this.ctx.url,
            content: this.ctx.content
        }
    }),

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
			applyNext(),
			{
				block: 'legos',
                mods: { color: 'white' }
			}
	 	]
	})
);
