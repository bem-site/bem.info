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
                    content: 'методология'
                }
            ]
        },
        {
            block: 'promo-action',
            attrs: { href: 'key-concepts/' },
            content: 'Документация'
        },
        {
            elem: 'text',
            content: [
                'Методология ',
                { block: 'bem' },
                ' создана в Яндексе для разработки сайтов, которые надо делать быстро, ',
                'а поддерживать долгие годы. Она позволяет создавать расширяемые и ',
                'повторно используемые компоненты интерфейса.'
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
                'Каждый веб-разработчик сталкивается с одними и теми же ',
                {
                    block: 'promo-highlight',
                    content: 'проблемами'
                }
            ]
        },
        {
            block: 'promo-problems',
            content: [
                {
                    elem: 'img',
                    url: freeze('../../static-ru/promo-problems.ru.svgz')
                },
                {
                    block: 'promo-text',
                    content: [
                        'Эти ',
                        {
                            block: 'promo-highlight',
                            content: 'проблемы решены'
                        },
                        ' ',
                        { block: 'bem' },
                        '-методологией,<br>',
                        'подходом к веб-разработке, который позволяет получить гибкий, легко изменяемый код.'
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
                    block: 'promo-highlight',
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
                    url: freeze('../../static-ru/promo-features__bicycle.svg')
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: freeze('../../static-ru/promo-features__fortress.svg')
                },
                {
                    block: 'promo-text',
                    content: 'Общий подход для всех технологий: HTML, CSS, JavaScript, документации, тестов и т.д.'
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
                    block: 'promo-highlight',
                    content: 'Масштабирование'
                },
                ' кода'
            ]
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    url: freeze('../../static-ru/promo-features__9-1.svg')
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: freeze('../../static-ru/promo-features__9-2.svg')
                },
                {
                    block: 'promo-text',
                    content: 'Код развивается по заранее известным правилам.'
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
                    block: 'promo-highlight',
                    content: 'Повторное'
                },
                ' использование'
            ]
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    url: freeze('../../static-ru/promo-features__6-1.svg')
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: freeze('../../static-ru/promo-features__6-2.svg')
                },
                {
                    block: 'promo-text',
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
                    block: 'promo-highlight',
                    content: 'Увеличение'
                },
                ' производительности'
            ]
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    url: freeze('../../static-ru/promo-features__shovel.svg')
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: freeze('../../static-ru/promo-features__tractor.svg')
                },
                {
                    block: 'promo-text',
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
                    block: 'promo-highlight',
                    content: 'Командная'
                },
                ' работа'
            ]
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    url: freeze('../../static-ru/promo-features__teamwork_bad.svg')
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: freeze('../../static-ru/promo-features__teamwork_good.svg')
                },
                {
                    block: 'promo-text',
                    content: 'Общая терминология позволяет разработчикам быстро переходить от проекта к проекту&nbsp;— всё заранее известно.'
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
                'Пиши ',
                {
                    block: 'promo-highlight',
                    content: 'меньше'
                },
                ', получай ',
                {
                    block: 'promo-highlight',
                    content: 'больше'
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
                    block: 'promo-text',
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
                'Можно использовать в ',
                {
                    block: 'promo-highlight',
                    content: 'любых'
                },
                ' языках программирования и в ',
                {
                    block: 'promo-highlight',
                    content: 'любых'
                },
                ' фреймворках'
            ]
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    url: freeze('../../static-ru/promo-features__7-1.svg')
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: freeze('../../static-ru/promo-features__7-2.svg')
                },
                {
                    block: 'promo-text',
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
                    block: 'promo-highlight',
                    content: 'Легко'
                },
                ' изучить'
            ]
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    elemMods: { single: true },
                    url: freeze('../../static-ru/promo-features__easy-to-learn.svgz')
                },
                {
                    block: 'promo-text',
                    content: 'Описание методологии со всеми примерами и отсылками можно прочитать за утренним кофе.'
                }
            ]
        }
    ]
}, {
    block: 'promo-section',
    mods: { color: 'blue' },
    content: [
        {
            block: 'promo-title',
            mods: { color: 'white' },
            content: [
                {
                    block: 'promo-highlight',
                    content: 'Эксперты'
                },
                ' рекомендуют ',
                {
                    block: 'bem'
                }
            ]
        },
        {
            block: 'promo-quotes',
            content: [
                {
                    name: 'Harry Roberts',
                    photo: freeze('../../static-ru/promo-quotes__harry-roberts.jpg'),
                    position: 'Consultant Front-end Architect',
                    url: 'http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/',
                    text: 'I use BEM notation on everything I build now as its usefulness has proved itself over and over.'
                },
                {
                    name: 'Mark McDonnell',
                    photo: freeze('../../static-ru/promo-quotes__mark-mcdonnell.jpg'),
                    position: 'Technical Lead, BBC News',
                    url: 'http://www.integralist.co.uk/posts/bem.html',
                    text: 'Itʼs less confusing than the other methods (i.e. SMACSS) but still provides us the good architecture we want (i.e. OOCSS) and with a recognisable terminology.'
                },
                {
                    name: 'Connie Chan',
                    photo: freeze('../../static-ru/promo-quotes__connie-chan.jpg'),
                    position: 'Design Director, Thoughtbot',
                    url: 'https://robots.thoughtbot.com/keeping-the-frontend-modular-with-bem',
                    text: 'Combined with a preprocessor, BEM makes keeping your CSS modular and object-oriented a breeze.'
                },
                {
                    name: 'Vadim Makeev',
                    photo: freeze('../../static-ru/promo-quotes__vadim-makeev.jpg'),
                    position: 'Web Evangelist, Opera Software',
                    url: 'http://pepelsbey.net/pres/bem-ok/en/',
                    text: 'BEM is okay.'
                },
                {
                    name: 'Jonathan Snook',
                    photo: freeze('../../static-ru/promo-quotes__jonathan-snook.jpg'),
                    position: 'Author of OOCSS, Xero',
                    url: 'https://twitter.com/snookca/status/606908589295464449',
                    text: 'Most common misspelling is “SMACCS”. I should just rename it to BEM.'
                },
                {
                    name: 'Paul Irish',
                    photo: freeze('../../static-ru/promo-quotes__paul-irish.jpg'),
                    position: 'Front-end Developer, Google Inc.',
                    url: 'ttps://twitter.com/paul_irish/status/192483200696717312',
                    text: 'This BEM stuff is next-level shit. Itʼs incredible how methodical it is.'
                },
                {
                    name: 'Necolas Gallagher',
                    photo: freeze('../../static-ru/promo-quotes__necolas-gallagher.jpg'),
                    position: 'Software Engineer, Twitter',
                    url: 'https://twitter.com/necolas/status/192678667023949824',
                    text: 'BEM is far more than a HTML/CSS system. Iʼve got no plans to use it all; just adapted some of its ideas.'
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
                            attrs: {
                                src: quote.photo,
                                alt: quote.name
                            }
                        },
                        {
                            elem: 'link',
                            attrs: { href: quote.url },
                            content: {
                                elem: 'text',
                                content: quote.text
                            }
                        }
                    ]
                };
            })
        }
    ]
}, {
    block: 'promo-section',
    mods: { color: 'white' },
    content: [
        {
            block: 'promo-title',
            mods: { color: 'black' },
            content: [
                { block: 'bem' },
                ' ',
                {
                    block: 'promo-highlight',
                    content: 'используют'
                }
            ]
        },
        {
            block: 'promo-companies',
            content: [
                {
                    elem: 'company',
                    content: 'Яндекс',
                    url: 'https://tech.yandex.ru/bem/',
                    src: freeze('../../static-ru/promo-companies__yandex.ru.svgz'),
                },
                {
                    elem: 'company',
                    content: 'Google',
                    url: 'https://github.com/google/material-design-lite/wiki/Understanding-BEM',
                    src: freeze('../../static-ru/promo-companies__google.svgz'),
                },
                {
                    elem: 'company',
                    content: 'BBC',
                    url: 'http://www.integralist.co.uk/posts/bem.html',
                    src: freeze('../../static-ru/promo-companies__bbc.svgz'),
                },
                {
                    elem: 'company',
                    content: 'Aplha-Bank',
                    url: 'https://github.com/alfa-bank-dev/ui',
                    src: freeze('../../static-ru/promo-companies__alpha-bank.svgz'),
                },
                {
                    elem: 'company',
                    content: 'BuzzFeed',
                    url: 'http://www.buzzfeed.com/',
                    src: freeze('../../static-ru/promo-companies__buzzfeed.svgz'),
                }
            ]
        }
/*
                {
                    elem: 'company',
                    content: 'Mail.ru',
                    url: 'статья на Хабре',
                    src: 'http://www.stplm.ru/upload/d41d8cd98f00b204e9800998ecf8427e/app20/byezimyeni3_preview.png'
                }
            ]
        }
*/
    ]
}]
