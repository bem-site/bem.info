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
                    elem: 'copyright-bem',
                    content: 'BEM'
                },
                ' is proudly made by ',
                {
                    elem: 'copyright-logo',
                    url: 'https://yandex.com/company/',
                    content: 'Yandex'
                }
            ]
        }
    ];
});
