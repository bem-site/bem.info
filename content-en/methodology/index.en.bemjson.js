[{
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
                'Every web developer meets the ',
                {
                    elem: 'highlighted',
                    content: 'same problems'
                }
            ]
        },
        {
            block: 'promo-problems',
            content: [
                {
                    elem: 'img',
                    url: freeze('../../static/promo-problems.en.svg')
                },
                {
                    block: 'promo-title',
                    content: [
                        'These ',
                        {
                            elem: 'highlighted',
                            content: 'problems are solved'
                        },
                        ' by ',
                        { block: 'bem' },
                        ' methodology,<br>',
                        'a development approach allowing to achieve flexible and maintainable code'
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
                ' предлагает ',
                {
                    elem: 'highlighted',
                    content: 'единые'
                },
                ' правила написания кода'
            ]
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    url: freeze('../../static/promo-features__bicycle.svg')
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: freeze('../../static/promo-features__fortress.svg')
                },
                {
                    elem: 'text',
                    content: '??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ???'
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
                    url: freeze('../../static/promo-features__9-1.svg')
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: freeze('../../static/promo-features__9-2.svg')
                },
                {
                    elem: 'text',
                    content: 'При использовании методологии код развивается по заранее известным правилам.'
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
                'Promote ',
                {
                    elem: 'highlighted',
                    content: 'reuse'
                }
            ]
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    url: freeze('../../static/promo-features__6-1.svg')
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: freeze('../../static/promo-features__6-2.svg')
                },
                {
                    elem: 'text',
                    content: 'Большинство проектов используют одинаковые компоненты. Повторное использование позволяет резко сократить сроки и стоимость разработки.'
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
                    url: freeze('../../static/promo-features__shovel.svg')
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: freeze('../../static/promo-features__tractor.svg')
                },
                {
                    elem: 'text',
                    content: 'Простота обновления и масштабирования повышают эффективность работы.'
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
                    url: freeze('../../static/promo-features__teamwork_bad.svg')
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: freeze('../../static/promo-features__teamwork_good.svg')
                },
                {
                    elem: 'text',
                    content: 'Общая терминология позволяет новым разработчикам быстро переходить от проекта к проекту&nbsp;— всё заранее известно.'
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
                    url: freeze('../../static-ru/promo-features__busy-man.svg')
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: freeze('../../static-ru/promo-features__3d-printer.svg')
                },
                {
                    elem: 'text',
                    content: 'Общие единые правила способствуют автоматизации процессов. Часть кода может быть сгенерирована автоматически.'
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
                    url: freeze('../../static/promo-features__7-1.svg')
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: freeze('../../static/promo-features__7-2.svg')
                },
                {
                    elem: 'text',
                    content: 'Методология предлагает абстрактные практики по повышению надёжности и повторному использованию кода.'
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
                    elemMods: { single: true },
                    url: freeze('../../static/promo-features__easy-to-learn.svgz')
                },
                {
                    elem: 'text',
                    content: 'TODO: Описание методологии со всеми примерами и отсылками можно прочитать за утренним кофе.'
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
