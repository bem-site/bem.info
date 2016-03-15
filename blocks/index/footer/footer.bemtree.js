block('footer').mode('index')(function() {
    return [
        {
            elem: 'domain',
            content: 'Jadwiga and Jacek Duniec thank you for domain!'
        },
        {
            elem: 'copyright',
            content: [
                {
                    block: 'bem'
                },
                ' is proudly made by ',
                {
                    elem: 'copyright-ya',
                    url: 'https://yandex.com/company/',
                    content: 'Yandex'
                }
            ]
        }
    ];
});

block('footer').mode('promo')(function() {
    return;
});

