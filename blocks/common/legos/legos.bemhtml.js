block('legos')(
	content()(function() {
        /* @random - random value -1 or 1
         * @w - block width
         * @h - block height
         */
		var blocks = [],
            h = 0, w;

        for (var i = 0; i < 28; i++) {
                w = Math.floor(Math.random() * 3) + 1;
                h = 1 + ({ '4': -1, '1': 1 }[h] || Math.floor(Math.random() * 3) || -1);

            blocks.push(
                {
                    elem: 'lego',
                    elemMods: { width: w > 1 && w, height: h > 1 && h }
                }
            );
        }

		return blocks;
	})
);
