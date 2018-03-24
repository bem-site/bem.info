block('footer').mode('index')(function() {
    return [
        {
            elem: 'domain',
            content: this.i18n(this.block, 'domain') // Jadwiga and Jacek Duniec thank you for domain!
        },
        {
            elem: 'copyright',
            content: [
                {
                    block: 'bem'
                },
                ' ',
                this.i18n(this.block, 'made'), // is proudly made by
                '\u00a0',
                {
                    elem: 'copyright-ya',
                    url: this.i18n(this.block, 'yandex-url'),
                    content: this.i18n(this.block, 'yandex') // Yandex
                }
            ]
        }
    ];
});

block('footer').mode('promo')(function() {
    return;
});

block('footer').mode('legos')(function() {
    return {
        block: 'legos',
        mods: { inverted: 'white' }
    };
});
