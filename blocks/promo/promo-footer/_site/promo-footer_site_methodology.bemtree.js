block('promo-footer').mod('site', 'methodology').content()(function() {
    return [
        {
            block: 'promo-title',
            mods: { color: 'white' },
            content: [
                this.i18n(this.block, 'you'), // 'You should',
                ' ',
                {
                    block: 'promo-highlight',
                    content: this.i18n(this.block, 'use') // 'use'
                },
                ' ',
                { block: 'bem' },
                ' ',
                this.i18n(this.block, 'too') // ' too'
            ]
        },
        {
            block: 'promo-title',
            mods: { color: 'white' },
            content: this.i18n(this.block, 'reason') // 'There are no reason not to do so'
        },
        {
            block: 'promo-action',
            attrs: { href: 'key-concepts/' },
            content: this.i18n(this.block, 'doc') // 'Documentation'
        }
    ]
});
