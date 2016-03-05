[{
    block: 'promo-header',
    mods: { site: 'methodology' },
    content: [
        {
            elem: 'header',
            content: [
                {
                    elem: 'title',
                    content: 'БЭМ',
                },
                ' ',
                {
                    elem: 'subtitle',
                    content: 'методология'
                }/*,
                {
                    tag: 'img',
                    attrs: { src: freeze('logo.svg') }
                }*/
            ]
        },
        {
            block: 'promo-action',
            url: 'key-concepts/',
            content: 'Документация'
        },
        {
            elem: 'text',
            content: 'Методология <strong>БЭМ</strong> содана в Яндексе для разработки сайтов, которые надо делать быстро, а поддерживать долгие годы. Она задаёт правила, позволяющие плавно развивать проект от одной страницы до огромного портала, минимизируя проблемы.'
        }
    ]
},{
    block: 'promo-section',
    mods: { color: 'white'},
    content: [
        {
            block: 'promo-title',
            content: [
                'EVERY WEB DEVELOPER MEETS THE',
                {
                    elem: 'highlighted',
                    content: ' SAME PROBLEMS'
                }
            ]
        },
        {
            block: 'promo-problems',
            content: [
                {
                    elem: 'img',
                    url: '/promo-problems__pictire.svg'
                }
            ]
        },
        {
            block: 'promo-title',
            content: [
                'ALL THESE',
                {
                    elem: 'highlighted',
                    content: ' PROBLEMS ARE SOLVED '
                },
                'BY BEM METHODOLOGY,',
                'A DEVELOPMENT APPROACH ALLOWING TO ACHIEVE AN AGILE EASILY CHANGEABLE CODE'
            ]
        }
    ]
}, {
    block: 'promo-section',
    mods: { color: 'beige'},
    content: [
        {
            block: 'promo-title',
            content: 'beige'
        },
        {
            block: 'promo-feature'
        }
    ]
}, {
    block: 'promo-section',
    mods: { color: 'black'},
    content: [
        {
            block: 'promo-title',
            content: 'black'
        },
        {
            block: 'promo-feature'
        }
    ]
}, {
    block: 'promo-section',
    mods: { color: 'beige'},
    content: [
        {
            block: 'promo-title',
            content: 'beige'
        },
        {
            block: 'promo-feature'
        }
    ]
}, {
    block: 'promo-section',
    mods: { color: 'blue'},
    content: [
        { 
            block: 'promo-title', 
            mods: { color: 'white'}, 
            content: [ 
                { 
                    elem: 'highlighted', 
                    content: 'people' 
                }, 
                ' talk about bem',
            ] 
        },
        {
            block: 'promo-quotes',
            content: [
                {
                    name: 'Билл Гейтс0',
                    photo: '/promo-section__quote_default-photo.png',
                    position: 'создатель Майкрософта',
                    text: 'Посоветовал ребятам попробовать БЭМ для интерфейсов некстгена Xbox'
                },
                {
                    name: 'Билл Гейтс1',
                    photo: '/promo-section__quote_default-photo.png',
                    position: 'создатель Майкрософта',
                    text: 'Посоветовал ребятам попробовать БЭМ для интерфейсов некстгена Xbox'
                },
                {
                    name: 'Билл Гейтс2',
                    photo: '/promo-section__quote_default-photo.png',
                    position: 'создатель Майкрософта',
                    text: 'Посоветовал ребятам попробовать БЭМ для интерфейсов некстгена Xbox'
                },
                {
                    name: 'Билл Гейтс3',
                    photo: '/promo-section__quote_default-photo.png',
                    position: 'создатель Майкрософта',
                    text: 'Посоветовал ребятам попробовать БЭМ для интерфейсов некстгена Xbox'
                },
                {
                    name: 'Билл Гейтс4',
                    photo: '/promo-section__quote_default-photo.png',
                    position: 'создатель Майкрософта',
                    text: 'Посоветовал ребятам попробовать БЭМ для интерфейсов некстгена Xbox'
                },
                {
                    name: 'Билл Гейтс5',
                    photo: '/promo-section__quote_default-photo.png',
                    position: 'создатель Майкрософта',
                    text: 'Посоветовал ребятам попробовать БЭМ для интерфейсов некстгена Xbox'
                },
                {
                    name: 'Билл Гейтс6',
                    photo: '/promo-section__quote_default-photo.png',
                    position: 'создатель Майкрософта',
                    text: 'Посоветовал ребятам попробовать БЭМ для интерфейсов некстгена Xbox'
                }
            ].map(function(quote){
                return {
                    elem: 'quote',
                    content: [
                        {
                            elem: 'name',
                            content: quote.name
                        },
                        {
                            elem:'position',
                            content: quote.position
                        },
                        {
                            elem:'photo',
                            url: quote.photo
                        },
                        {
                            elem: 'text',
                            content: quote.text
                        }
                    ]
                };
            })
        }]
}, {
    block: 'promo-section',
    mods: { color: 'white'},
    content: [
        {
            block: 'promo-title', 
            mods: { color: 'black'},  
            content: [ 
                { 
                    elem: 'highlighted', 
                    content: 'Companies' 
                }, 
                ' use BEM' 
            ] 
        }, 
        { 
            block: 'promo-companies',  
            content: [
                { 
                    elem: 'company', 
                    content: 'Yandex', 
                    url: '//yandex.ru', 
                    src: 'http://www.stplm.ru/upload/d41d8cd98f00b204e9800998ecf8427e/app20/byezimyeni3_preview.png' 
                }, 
                { 
                    elem: 'company', 
                    content: 'Google', 
                    url: '//google.com', 
                    src: 'http://www.stplm.ru/upload/d41d8cd98f00b204e9800998ecf8427e/app20/byezimyeni3_preview.png' 
                }, 
                { 
                    elem: 'company', 
                    content: 'Apple', 
                    url: '//apple.ru', 
                    src: 'http://www.stplm.ru/upload/d41d8cd98f00b204e9800998ecf8427e/app20/byezimyeni3_preview.png' 
                }, 
                { 
                    elem: 'company', 
                    content: 'Tesla', 
                    url: '//tesla.com', 
                    src: 'http://www.stplm.ru/upload/d41d8cd98f00b204e9800998ecf8427e/app20/byezimyeni3_preview.png' 
                }, 
                { 
                    elem: 'company', 
                    content: 'Mail.ru', 
                    url: '//mail.ru', 
                    src: 'http://www.stplm.ru/upload/d41d8cd98f00b204e9800998ecf8427e/app20/byezimyeni3_preview.png' 
                } 
            ]
        }
    ]
}]
