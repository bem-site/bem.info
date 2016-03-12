block('promo-footer')(
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
