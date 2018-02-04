block('footer')(
    mode('promo')({ block: 'promo-footer' }),
    mode('legos')(function() {
        return {
            block: 'legos',
            mods: { inverted: 'white' }
        };
    })
);
