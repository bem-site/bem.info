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
                    elem: 'highlighted',
                    content: 'проблемами'
                }
            ]
        },
        {
            block: 'promo-problems',
            content: [
                {
                    elem: 'img',
                    url: freeze('../../static-ru/promo-problems.ru.svg')
                },
                {
                    block: 'promo-title',
                    content: [
                        'Все эти ',
                        {
                            elem: 'highlighted',
                            content: 'проблемы решены'
                        },
                        ' ',
                        { block: 'bem' },
                        '-методологией,<br>',
                        'подходом к веб-разработке, который позволяет получить гибкий, легко изменяемый код'
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
                    content: 'непротиворечивое и разумное'
                },
                ' окружение'
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
                    elem: 'text',
                    content: 'Все разработчики используют единые правила для написания кода.'
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
                    content: 'Лёгкое'
                },
                ' обновление'
            ]
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    url: freeze('../../static-ru/promo-features__squirrel.svg')
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: freeze('../../static-ru/promo-features__yogi.svg')
                },
                {
                    elem: 'text',
                    content: 'Простое и быстрое обновление базовых компонентов.'
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
                    elem: 'text',
                    content: 'При использовании методологии код развивается по заранее известным правилам. Результат всегда получается логичным и предсказуемым.'
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
                    content: 'Повторное использование'
                },
                ' и эффективность'
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
                    elem: 'text',
                    content: 'Большинство проектов используют одинаковые компоненты. Повторное использование позволяет резко сократить сроки и стоимость разработки.'
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
                    elem: 'text',
                    content: 'Простота обновления и масштабирования повышают эффективность работы.'
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
                    elem: 'text',
                    content: 'Общая терминология позволяет новым разработчикам быстро переходить от проекта к проекту — всё заранее известно.'
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
                'Пиши ',
                {
                    elem: 'highlighted',
                    content: 'меньше'
                },
                ', получай ',
                {
                    elem: 'highlighted',
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
                    elem: 'text',
                    content: 'Общие единые правила способствуют автоматизации процессов. Часть кода может быть сгенерирована автоматически.'
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
                'Можно использовать в ',
                {
                    elem: 'highlighted',
                    content: 'любых'
                },
                ' языках программирования и в ',
                {
                    elem: 'highlighted',
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
                    elem: 'text',
                    content: 'Методология предлагает абстрактные практики по повышению надёжности и повторному использованию кода.'
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
                    url: freeze('../../static-ru/promo-features__8-1.svg')
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: freeze('../../static-ru/promo-features__8-2.svg')
                },
                {
                    elem: 'text',
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
                    elem: 'highlighted',
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
                { block: 'bem' },
                ' ',
                {
                    elem: 'highlighted',
                    content: 'используют'
                }
            ]
        },
        {
            block: 'promo-companies',
            content: [
                {
                    elem: 'company',
                    content: 'Yandex',
                    url: 'https://tech.yandex.ru/bem/',
                    src: 'http://www.stplm.ru/upload/d41d8cd98f00b204e9800998ecf8427e/app20/byezimyeni3_preview.png'
                },
                {
                    elem: 'company',
                    content: 'Google',
                    url: 'дока БЭМ в mdl',
                    src: 'http://www.stplm.ru/upload/d41d8cd98f00b204e9800998ecf8427e/app20/byezimyeni3_preview.png'
                },
                {
                    elem: 'company',
                    content: 'Альфа-Банк',
                    url: 'библиотека',
                    src: 'http://www.stplm.ru/upload/d41d8cd98f00b204e9800998ecf8427e/app20/byezimyeni3_preview.png'
                },
                {
                    elem: 'company',
                    content: 'Госдеп',
                    url: '//tesla.com',
                    src: 'http://www.stplm.ru/upload/d41d8cd98f00b204e9800998ecf8427e/app20/byezimyeni3_preview.png'
                },
                {
                    elem: 'company',
                    content: 'Mail.ru',
                    url: 'статья на Хабре',
                    src: 'http://www.stplm.ru/upload/d41d8cd98f00b204e9800998ecf8427e/app20/byezimyeni3_preview.png'
                }
            ]
        }
    ]
}]
