({
    mustDeps : ['i-bem'],
    shouldDeps : [
        'header',
        'sitemap',
        'nav',
        'promo-page',
        'promo-header',
        'promo-main',
        'promo-footer',
        'article',
        {
            block : 'footer',
            mods : { site : ['methodology'], promo : true }
        }
    ]
})
