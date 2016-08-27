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
                    content: 'методологія'
                }
            ]
        },
        {
            block: 'promo-action',
            attrs: { href: 'key-concepts/' },
            content: 'Документація'
        },
        {
            elem: 'text',
            content: [
                'Методологія ',
                { block: 'bem' },
                ' створена в Яндексі для розробки сайтів, які треба робити швидко, ',
                'а підтримувати довгі роки. Вона дозволяє створювати розширювані і ',
                'повторно використовувані компоненти інтерфейсу.'
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
                'Кожен веб-розробник стикається з одними і тими ж ',
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
                    url: 'promo-problems.uk.svgd'
                },
                {
                    block: 'promo-text',
                    content: [
                        'Ці ',
                        {
                            block: 'promo-highlight',
                            content: 'проблеми вирішені'
                        },
                        ' ',
                        { block: 'bem' },
                        '-методологією,<br>',
                        'підходом до веб-розробки, який дозволяє отримати гнучкий, легко змінюваний код.'
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
                ' пропонує ',
                {
                    block: 'promo-highlight',
                    content: 'єдині'
                },
                ' правила написання коду'
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
                    block: 'promo-text',
                    content: 'Загальний підхід для всіх технологій: HTML, CSS, JavaScript, документації, тестів і т.д.'
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
                    content: 'Масштабування'
                },
                ' кода'
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
                    block: 'promo-text',
                    content: 'Код розвивається за заздалегідь відомими правилами.'
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
                    content: 'Повторне'
                },
                ' використання'
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
                    block: 'promo-text',
                    content: 'Більшість проектів використовують однакові компоненти. Повторне використання дозволяє різко скоротити терміни і вартість розробки.'
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
                    content: 'Збільшення'
                },
                ' продуктивності'
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
                    block: 'promo-text',
                    content: 'Простота оновлення і масштабування підвищують ефективність роботи.'
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
                    content: 'Командна'
                },
                ' робота'
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
                    block: 'promo-text',
                    content: 'Загальна термінологія дозволяє розробникам швидко переходити від проекту до проекту&nbsp;— все заздалегідь відомо.'
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
                    content: 'менше'
                },
                ', отримуй ',
                {
                    block: 'promo-highlight',
                    content: 'більше'
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
                    block: 'promo-text',
                    content: 'Загальні єдині правила сприяють автоматизації процесів. Частину коду може бути згенеровано автоматично.'
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
                'Можна використовувати в ',
                {
                    block: 'promo-highlight',
                    content: 'будь-яких'
                },
                ' мовах програмування і в ',
                {
                    block: 'promo-highlight',
                    content: 'будь-яких'
                },
                ' фреймворках'
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
                    block: 'promo-text',
                    content: 'Методологія пропонує абстрактні практики по підвищенню надійності та повторного використання коду.'
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
                    url: 'promo-features__easy-to-learn.svg'
                },
                {
                    block: 'promo-text',
                    content: 'Опис методології з усіма прикладами та посиланнями можна прочитати за ранковою кавою.'
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
                    content: 'Експерти'
                },
                ' рекомендують ',
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
                    photo: 'promo-quotes__harry-roberts.jpg',
                    position: 'Consultant Front-end Architect',
                    url: 'http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/',
                    text: 'I use BEM notation on everything I build now as its usefulness has proved itself over and over.'
                },
                {
                    name: 'Mark McDonnell',
                    photo: 'promo-quotes__mark-mcdonnell.jpg',
                    position: 'Technical Lead, BBC News',
                    url: 'http://www.integralist.co.uk/posts/bem.html',
                    text: 'Itʼs less confusing than the other methods (i.e. SMACSS) but still provides us the good architecture we want (i.e. OOCSS) and with a recognisable terminology.'
                },
                {
                    name: 'Connie Chan',
                    photo: 'promo-quotes__connie-chan.jpg',
                    position: 'Design Director, Thoughtbot',
                    url: 'https://robots.thoughtbot.com/keeping-the-frontend-modular-with-bem',
                    text: 'Combined with a preprocessor, BEM makes keeping your CSS modular and object-oriented a breeze.'
                },
                {
                    name: 'Vadim Makeev',
                    photo: 'promo-quotes__vadim-makeev.jpg',
                    position: 'Web Evangelist, Opera Software',
                    url: 'http://pepelsbey.net/pres/bem-ok/en/',
                    text: 'BEM is okay.'
                },
                {
                    name: 'Jonathan Snook',
                    photo: 'promo-quotes__jonathan-snook.jpg',
                    position: 'Author of OOCSS, Xero',
                    url: 'https://twitter.com/snookca/status/606908589295464449',
                    text: 'Most common misspelling is “SMACCS”. I should just rename it to BEM.'
                },
                {
                    name: 'Paul Irish',
                    photo: 'promo-quotes__paul-irish.jpg',
                    position: 'Front-end Developer, Google Inc.',
                    url: 'https://twitter.com/paul_irish/status/192483200696717312',
                    text: 'This BEM stuff is next-level shit. Itʼs incredible how methodical it is.'
                },
                {
                    name: 'Necolas Gallagher',
                    photo: 'promo-quotes__necolas-gallagher.jpg',
                    position: 'Software Engineer, Twitter',
                    url: 'https://twitter.com/necolas/status/192678667023949824',
                    text: 'BEM is far more than a HTML/CSS system. Iʼve got no plans to use it all; just adapted some of its ideas.'
                }
            ].map(function(quote) {
                return {
                    elem: 'quote',
                    content: [
                        {
                            elem: 'photo',
                            src: quote.photo,
                            alt: quote.name
                        },
                        ' ',
                        {
                            elem: 'name',
                            content: quote.name
                        },
                        ' ',
                        {
                            elem: 'position',
                            content: quote.position
                        },
                        ' ',
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
                    content: 'використовують'
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
                    src: 'promo-companies__yandex.ru.svgd'
                },
                {
                    elem: 'company',
                    content: 'Google',
                    url: 'https://github.com/google/material-design-lite/wiki/Understanding-BEM',
                    src: 'promo-companies__google.svgd'
                },
                {
                    elem: 'company',
                    content: 'BBC',
                    url: 'http://www.integralist.co.uk/posts/bem.html',
                    src: 'promo-companies__bbc.svgd'
                },
                {
                    elem: 'company',
                    content: 'Aplha-Bank',
                    url: 'https://github.com/alfa-bank-dev/ui',
                    src: 'promo-companies__alpha-bank.svgd'
                },
                {
                    elem: 'company',
                    content: 'BuzzFeed',
                    url: 'http://www.buzzfeed.com/',
                    src: 'promo-companies__buzzfeed.svgd'
                },
                {
                    elem: 'company',
                    content: 'EPAM',
                    url: 'http://www.epam.com/',
                    src: 'promo-companies__epam.svgd'
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
