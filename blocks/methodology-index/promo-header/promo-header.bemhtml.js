block('promo-header')(
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
