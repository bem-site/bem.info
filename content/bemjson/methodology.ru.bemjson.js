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
                }
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
}, {
    block: 'promo-main',
    mods: { site: 'methodology' },
    content: [
        {
            block: 'promo-title',
            mix: { block: 'promo-main', elem: 'title' },
            content: [
                {
                    elem: 'strong',
                    content: 'BEM'
                },
                ' stands for Block, Element, Modifier'
            ]
        },
        {
            block: 'promo-content',
            content: [
                {
                    elem: 'image',
                    mods: { side: 'left' },
                    src: 'https://music.yandex.ru/blocks/artist-pics/artist-pics.200x200.png'
                },
                {
                    elem: 'text',
                    content: 'The main idea of BEM methodology is to speed development process up and ease the teamwork of developers. The main idea of BEM methodology is to speed development process up and ease the teamwork of developers. The main idea of BEM methodology is to speed development process up and ease the teamwork of developers. The main idea of BEM methodology is to speed development process up and ease the teamwork of developers.'
                }
            ]
        },
        {
            block: 'promo-content',
            content: [
                {
                    elem: 'image',
                    mods: { side: 'right' },
                    src: 'https://music.yandex.ru/blocks/artist-pics/artist-pics.200x200.png'
                },
                {
                    elem: 'text',
                    content: '<strong>The main idea</strong> of BEM methodology is to speed development process up and ease the teamwork of developers. The main idea of BEM methodology is to speed development process up and ease the teamwork of developers. The main idea of BEM methodology is to speed development process up and ease the teamwork of developers. The main idea of BEM methodology is to speed development process up and ease the teamwork of developers.'
                }
            ]
        },
        {
            block: 'promo-title',
            mix: { block: 'promo-main', elem: 'title' },
            content: [
                {
                    elem: 'strong',
                    content: 'BEM'
                },
                ' is a ',
                {
                    elem: 'highlighted-words',
                    content: 'component-oriented approach'
                },
                ' for construction web-interfaces'
            ]
        }
    ]
},
    {
        block: 'promo-quotes',
        content: [
            {
                block: 'promo-title',
                mods: { color: 'white', size: 'small' },
                mix: { block: 'promo-companies', elem: 'title' },
                content: [
                    {
                        elem: 'highlighted-words',
                        content: 'PEOPLE'
                    },
                    ' TALK ABOUT ',
                    {
                        elem: 'strong',
                        content: 'BEM'
                    }
                ]
            },
            {
                attrs: {
                    style: 'height: 500px; background: #17a1e6;'
                }
            },
            {
                block: 'legos',
                mods: {color: 'white'}
            }
        ]
    },
    {
        block: 'promo-companies',
        content: [
            {
                block: 'promo-title',
                mods: { color: 'black', size: 'small' },
                mix: [{ block: 'promo-companies', elem: 'title' }],
                content: [
                    {
                        elem: 'highlighted-words',
                        content: 'Companies'
                    },
                    ' use ',
                    {
                        elem: 'strong',
                        content: 'BEM'
                    }
                ]
            },
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
