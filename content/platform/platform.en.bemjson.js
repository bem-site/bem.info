module.exports = [{
    block: 'promo-header',
    mods: { site: 'methodology' },
    content: [
        {
            elem: 'header',
            content: [
                {
                    block: 'bem',
                    mix: { block: 'promo-header', elem: 'title' }
                },
                ' ',
                {
                    elem: 'subtitle',
                    content: 'methodology'
                }
            ]
        },
        {
            block: 'promo-action',
            attrs: { href: 'key-concepts/' },
            content: 'Documentation'
        },
        {
            elem: 'text',
            content: [
                { block: 'bem' },
                ' methodology was invented at ',
                {
                    elem: 'link',
                    attrs: { href: 'https://yandex.com/company/' },
                    content: 'Yandex'
                },
                ' to develop sites which should be launched fast and supported for a long time. ',
                'It helps to create extendable and reusable interface components.'
            ]
        }
    ]
},{
    block: 'promo-section',
    mods: { color: 'white' },
    content: [
        {
            block: 'promo-title',
            content: [
                'EVERY WEB DEVELOPER MEETS THE ',
                {
                    elem: 'highlighted',
                    content: 'SAME PROBLEMS'
                }
            ]
        },
        {
            block: 'promo-problems',
            content: [
                {
                    elem: 'img',
                    url: 'promo-problems.en.svg'
                },
                {
                    block: 'promo-title',
                    content: [
                        'These ',
                        {
                            elem: 'highlighted',
                            content: 'PROBLEMS ARE SOLVED'
                        },
                        ' BY ',
                        { block: 'bem' },
                        ' METHODOLOGY,<br>',
                        'A DEVELOPMENT APPROACH ALLOWING TO ACHIEVE flexible and maintainable code'
                    ]
                }
            ]
        }
    ]
}, {
    block: 'promo-section',
    mods: { color: 'beige' },
    content: [
        {
            block: 'promo-title',
            content: [
                { block: 'bem' },
                ' PROVIDES A ',
                {
                    elem: 'highlighted',
                    content: ' CONSISTENT AND SANE'
                },
                ' ENVIRONMENT'
            ]
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    url: 'promo-features__bicycle.svg'
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: 'promo-features__fortress.svg'
                },
                {
                    elem: 'text',
                    content: 'And consistent environment is consistent. And sane environment is sane. And when your environment is consistent and sane at the same time it’s totally awesome, because you feel yourself sane and consistent and, you know, everything around is sane and consistent and stuff. And you feel happy.'
                }
            ]
        }
    ]
}, {
    block: 'promo-section',
    mods: { color: 'black' },
    content: [
        {
            block: 'promo-title',
            content: [
                {
                    elem: 'highlighted',
                    content: 'Accommodate'
                },
                ' changes'
            ]
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    url: 'promo-features__squirrel.svg'
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: 'promo-features__yogi.svg'
                },
                {
                    elem: 'text',
                    content: 'And consistent environment is consistent. And sane environment is sane. And when your environment is consistent and sane at the same time it’s totally awesome, because you feel yourself sane and consistent and, you know, everything around is sane and consistent and stuff. And you feel happy.'
                }
            ]
        }
    ]
}, {
    block: 'promo-section',
    mods: { color: 'beige' },
    content: [
        {
            block: 'promo-title',
            content: [
                {
                    elem: 'highlighted',
                    content: 'Grow and scale'
                },
                ' your codebase'
            ]
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    url: 'promo-features__9-1.svg'
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: 'promo-features__9-2.svg'
                },
                {
                    elem: 'text',
                    content: 'And consistent environment is consistent. And sane environment is sane. And when your environment is consistent and sane at the same time it’s totally awesome, because you feel yourself sane and consistent and, you know, everything around is sane and consistent and stuff. And you feel happy.'
                }
            ]
        }
    ]
}, {
    block: 'promo-section',
    mods: { color: 'white' },
    content: [
        {
            block: 'promo-title',
            content: [
                'Promote ',
                {
                    elem: 'highlighted',
                    content: 'reuse'
                },
                ' and efficiency'
            ]
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    url: 'promo-features__6-1.svg'
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: 'promo-features__6-2.svg'
                },
                {
                    elem: 'text',
                    content: 'And consistent environment is consistent. And sane environment is sane. And when your environment is consistent and sane at the same time it’s totally awesome, because you feel yourself sane and consistent and, you know, everything around is sane and consistent and stuff. And you feel happy.'
                }
            ]
        }
    ]
}, {
    block: 'promo-section',
    mods: { color: 'beige' },
    content: [
        {
            block: 'promo-title',
            content: [
                {
                    elem: 'highlighted',
                    content: 'Increase'
                },
                ' productivity'
            ]
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    url: 'promo-features__shovel.svg'
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: 'promo-features__tractor.svg'
                },
                {
                    elem: 'text',
                    content: 'And consistent environment is consistent. And sane environment is sane. And when your environment is consistent and sane at the same time it’s totally awesome, because you feel yourself sane and consistent and, you know, everything around is sane and consistent and stuff. And you feel happy.'
                }
            ]
        }
    ]
}, {
    block: 'promo-section',
    mods: { color: 'black' },
    content: [
        {
            block: 'promo-title',
            content: [
                {
                    elem: 'highlighted',
                    content: 'Team'
                },
                ' work'
            ]
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    url: 'promo-features__teamwork_bad.svg'
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: 'promo-features__teamwork_good.svg'
                },
                {
                    elem: 'text',
                    content: 'And consistent environment is consistent. And sane environment is sane. And when your environment is consistent and sane at the same time it’s totally awesome, because you feel yourself sane and consistent and, you know, everything around is sane and consistent and stuff. And you feel happy.'
                }
            ]
        }
    ]
}, {
    block: 'promo-section',
    mods: { color: 'beige' },
    content: [
        {
            block: 'promo-title',
            content: [
                'Do ',
                {
                    elem: 'highlighted',
                    content: 'less'
                },
                ', get ',
                {
                    elem: 'highlighted',
                    content: 'more'
                }
            ]
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    url: 'promo-features__busy-man.svg'
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: 'promo-features__3d-printer.svg'
                },
                {
                    elem: 'text',
                    content: 'And consistent environment is consistent. And sane environment is sane. And when your environment is consistent and sane at the same time it’s totally awesome, because you feel yourself sane and consistent and, you know, everything around is sane and consistent and stuff. And you feel happy.'
                }
            ]
        }
    ]
}, {
    block: 'promo-section',
    mods: { color: 'white' },
    content: [
        {
            block: 'promo-title',
            content: [
                'Suitable for ',
                {
                    elem: 'highlighted',
                    content: 'any'
                },
                ' programming language or ',
                {
                    elem: 'highlighted',
                    content: 'any'
                },
                ' framework'
            ]
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    url: 'promo-features__7-1.svg'
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: 'promo-features__7-2.svg'
                },
                {
                    elem: 'text',
                    content: 'And consistent environment is consistent. And sane environment is sane. And when your environment is consistent and sane at the same time it’s totally awesome, because you feel yourself sane and consistent and, you know, everything around is sane and consistent and stuff. And you feel happy.'
                }
            ]
        }
    ]
}, {
    block: 'promo-section',
    mods: { color: 'beige' },
    content: [
        {
            block: 'promo-title',
            content: [
                {
                    elem: 'highlighted',
                    content: 'Easy'
                },
                ' to learn'
            ]
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    url: 'promo-features__8-1.svg'
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: 'promo-features__8-2.svg'
                },
                {
                    elem: 'text',
                    content: 'And consistent environment is consistent. And sane environment is sane. And when your environment is consistent and sane at the same time it’s totally awesome, because you feel yourself sane and consistent and, you know, everything around is sane and consistent and stuff. And you feel happy.'
                }
            ]
        }
    ]
},{
    block: 'promo-section',
    mods: { color: 'blue' },
    content: [
        {
            block: 'promo-title',
            mods: { color: 'white' },
            content: [
                {
                    elem: 'highlighted',
                    content: 'Experts'
                },
                ' recommend ',
                { block: 'bem' }
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
            ].map(function(quote) {
                return {
                    elem: 'quote',
                    content: [
                        {
                            elem: 'name',
                            content: quote.name
                        },
                        {
                            elem: 'position',
                            content: quote.position
                        },
                        {
                            elem: 'photo',
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
    mods: { color: 'white' },
    content: [
        {
            block: 'promo-title',
            mods: { color: 'black' },
            content: [
                {
                    elem: 'highlighted',
                    content: 'Companies'
                },
                ' use ',
                { block: 'bem' }
            ]
        },
        {
            block: 'promo-companies',
            content: [
                {
                    elem: 'company',
                    content: 'Yandex',
                    url: 'https://tech.yandex.com/bem/',
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
                    content: 'BBC',
                    url: 'http://www.integralist.co.uk/posts/bem.html',
                    src: 'http://www.stplm.ru/upload/d41d8cd98f00b204e9800998ecf8427e/app20/byezimyeni3_preview.png'
                },
                {
                    elem: 'company',
                    content: 'Госдеп',
                    url: 'AAA',
                    src: 'http://www.stplm.ru/upload/d41d8cd98f00b204e9800998ecf8427e/app20/byezimyeni3_preview.png'
                },
                {
                    elem: 'company',
                    content: 'BuzzFeed',
                    url: 'http://www.buzzfeed.com/',
                    src: 'http://www.stplm.ru/upload/d41d8cd98f00b204e9800998ecf8427e/app20/byezimyeni3_preview.png'
                }
            ]
        }
    ]
}]
