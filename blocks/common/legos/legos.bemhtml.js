block('legos')(
	content()(function() {
        var sizes = [
            [4, 2], [3, 2], [2, 2], [3, 2], [2, 6], [3, 6], [4, 6],
            [2, 4], [3, 2], [2, 4], [3, 7], [1, 4], [3, 3], [2, 2],
            [4, 3], [3, 3], [2, 1], [3, 4], [2, 6], [3, 4], [4, 3],
            [2, 4], [1, 2], [2, 4], [3, 7], [1, 4], [3, 3], [4, 2]
        ];

        return sizes.reduce(function(blocks, value) {
            blocks.push(
                {
                    elem: 'lego',
                    elemMods: { height: value[0], width: value[1] }
                }
            );
            return blocks;
        }, []);
	})
);
