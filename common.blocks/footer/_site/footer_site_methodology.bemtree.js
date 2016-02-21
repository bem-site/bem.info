block('footer').mod('promo', true).mode('extra')(function() {
    return {
        block : 'promo-footer',
        mods : { site : this.data.siteMod }
    };
});
