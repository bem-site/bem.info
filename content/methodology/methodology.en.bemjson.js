module.exports = [{
    block: 'promo-header',
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
                    block: 'promo-highlight',
                    content: 'same problems'
                }
            ]
        },
        {
            block: 'promo-problems',
            content: [
                {
                    elem: 'img',
                    url: 'promo-problems.en.svgd'
                },
                {
                    block: 'promo-text',
                    content: [
                        'These ',
                        {
                            block: 'promo-highlight',
                            content: 'problems are solved'
                        },
                        ' by ',
                        { block: 'bem' },
                        ' methodology,<br>',
                        'a development approach allowing to achieve flexible and maintainable code.'
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
                ' provides ',
                {
                    block: 'promo-highlight',
                    content: 'the same'
                },
                ' rules to achieve code consistency'
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
                    content: 'Common approach for all technologies: HTML, CSS, JavaScript, docs, tests, etc.'
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
                    block: 'promo-text',
                    content: 'Code grows following predefined rules.'
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
                    block: 'promo-highlight',
                    content: 'reuse'
                }
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
                    content: 'Most projects use the same components. Code reuse significantly reduces price and time of development.'
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
                    block: 'promo-text',
                    content: 'Simplicity of updates and scalability increases productivity.'
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
                    block: 'promo-text',
                    content: 'Common terminology provides ability for developers to rapidly switch projects&nbsp;— everything is familiar.'
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
                    block: 'promo-highlight',
                    content: 'less'
                },
                ', get ',
                {
                    block: 'promo-highlight',
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
                    block: 'promo-text',
                    content: 'Common rules help to automate process. Code may be partially autogenerated.'
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
                    block: 'promo-highlight',
                    content: 'any'
                },
                ' programming language or ',
                {
                    block: 'promo-highlight',
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
                    block: 'promo-text',
                    content: 'Methodology provides language agnostic practices to increase code reliability and reuse.'
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
                    url: 'promo-features__easy-to-learn.svg'
                },
                {
                    block: 'promo-text',
                    content: 'You can read all the methodology during your morning coffee.'
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
                    block: 'promo-highlight',
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
                {
                    block: 'promo-highlight',
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
                    src: 'promo-companies__yandex.en.svg'
                },
                {
                    elem: 'company',
                    content: 'Google',
                    url: 'https://github.com/google/material-design-lite/wiki/Understanding-BEM',
                    src: 'promo-companies__google.svg'
                },
                {
                    elem: 'company',
                    content: 'BBC',
                    url: 'http://www.integralist.co.uk/posts/bem.html',
                    src: 'promo-companies__bbc.svg'
                },
                {
                    elem: 'company',
                    content: 'Alpha-Bank',
                    url: 'https://github.com/alfa-bank-dev/ui',
                    src: 'promo-companies__alpha-bank.svg'
                },
                {
                    elem: 'company',
                    content: 'BuzzFeed',
                    url: 'http://www.buzzfeed.com/',
                    src: 'promo-companies__buzzfeed.svg'
                },
                {
                    elem: 'company',
                    content: 'EPAM',
                    url: 'http://www.epam.com/',
                    src: 'promo-companies__epam.svg'
                }
            ]
        }
    ]
}]
