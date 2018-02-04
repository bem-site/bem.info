block('promo-content').content()(function() {
    var data = this.data,
        site = data.page.site,
        lang = data.lang;

    return [
        {
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
                            content: this.i18n(this.block, 'text0') // 'методология'
                        }
                    ]
                },
                {
                    block: 'promo-action',
                    attrs: { href: 'quick-start/' },
                    content: this.i18n(this.block, 'text1') // 'Документация'
                },
                {
                    elem: 'text',
                    content: [
                        this.i18n(this.block, 'text2'), // 'Методология'
                        ' ',
                        { block: 'bem' },
                        ' ',
                        // 'создана в Яндексе для разработки сайтов, которые надо делать быстро, '
                        this.i18n(this.block, 'text3'),
                        // 'а поддерживать долгие годы. Она позволяет создавать расширяемые и ',
                        this.i18n(this.block, 'text4'),
                        // 'повторно используемые компоненты интерфейса.'
                        this.i18n(this.block, 'text5')
                    ]
                }
            ]
        },
        {
            block: 'promo-section',
            mods: { color: 'white' },
            attrs: {
                style: 'margin-top:40px'
            },
            content: {
                block: 'promo-menu',
                attrs: {
                    style: 'margin-top:40px'
                },
                title: {
                    main: 'methodology',
                    side: 'additional'
                },
                data: data.pages.filter(function(page) {
                    if (!new RegExp('^' + site).test(page.url) || page.nav === false) {
                        return false;
                    }

                    return page.url.split('/').length === site.split('/').length + 1;
                }).map(function(item) {
                    var title = typeof item.title === 'string' ? item.title : item.title[lang],
                        subtitle = item.subtitle ?
                            (typeof item.subtitle === 'string' ? item.subtitle : item.subtitle[lang]) : '';

                    return {
                        text: title,
                        subtitle: subtitle,
                        url: data.root + item.url,
                        additional: Boolean(item.url.match(/faq|history|articles|solved/)) //item.additional
                    }
                })
            }
        },
/*
        {
            block: 'promo-section',
            mods: { color: 'beige' },
            content: [
                {
                    block: 'promo-title',
                    content: [
                        this.i18n(this.block, 'text6'), // 'Каждый веб-разработчик сталкивается с одними и теми же '
                        {
                            block: 'promo-highlight',
                            content: this.i18n(this.block, 'text7') // 'проблемами'
                        }
                    ]
                },
                {
                    block: 'promo-problems',
                    content: [
                        {
                            elem: 'img',
                            url: 'promo-problems.' + lang + '.svgd'
                        },
                        {
                            block: 'promo-text',
                            content: [
                                this.i18n(this.block, 'text8'), // 'Эти ',
                                {
                                    block: 'promo-highlight',
                                    content: this.i18n(this.block, 'text9') // 'проблемы решены'
                                },
                                ' ',
                                { block: 'bem' },
                                '-',
                                this.i18n(this.block, 'text10'), // методологией
                                ',',
                                { tag: 'br' },
                                // 'подходом к веб-разработке, который позволяет получить гибкий, легко изменяемый код.'
                                this.i18n(this.block, 'text11')
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'promo-section',
            mods: { color: 'white' },
            content: [
                {
                    block: 'promo-title',
                    content: [
                        { block: 'bem' },
                        ' ',
                        this.i18n(this.block, 'text12'),
                        ' ',
                        {
                            block: 'promo-highlight',
                            content: this.i18n(this.block, 'text13') // 'единые'
                        },
                        this.i18n(this.block, 'text14') // ' правила написания кода'
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
                            // 'Общий подход для всех технологий: HTML, CSS, JavaScript, документации, тестов и т.д.'
                            content: this.i18n(this.block, 'text15')
                        }
                    ]
                }
            ]
        },
        {
            block: 'promo-section',
            mods: { color: 'black' },
            content: [
                {
                    block: 'promo-title',
                    content: [
                        {
                            block: 'promo-highlight',
                            content: this.i18n(this.block, 'text16') // 'Масштабирование'
                        },
                        this.i18n(this.block, 'text17') // ' кода'
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
                            content: this.i18n(this.block, 'text18') // 'Код развивается по заранее известным правилам.'
                        }
                    ]
                }
            ]
        },
        {
            block: 'promo-section',
            mods: { color: 'beige' },
            content: [
                {
                    block: 'promo-title',
                    content: [
                        {
                            block: 'promo-highlight',
                            content: this.i18n(this.block, 'text19') // 'Повторное'
                        },
                        this.i18n(this.block, 'text20') // ' использование'
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
                            // 'Большинство проектов используют одинаковые компоненты. Повторное использование позволяет
                            // резко сократить сроки и стоимость разработки.'
                            content: this.i18n(this.block, 'text21')
                        }
                    ]
                }
            ]
        },
        {
            block: 'promo-section',
            mods: { color: 'white' },
            content: [
                {
                    block: 'promo-title',
                    content: [
                        {
                            block: 'promo-highlight',
                            content: this.i18n(this.block, 'text22') // 'Увеличение'
                        },
                        this.i18n(this.block, 'text23') // ' производительности'
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
                            content: this.i18n(this.block, 'text24') // 'Простота обновления и масштабирования повышают
                            // эффективность работы.'
                        }
                    ]
                }
            ]
        },
        {
            block: 'promo-section',
            mods: { color: 'beige' },
            content: [
                {
                    block: 'promo-title',
                    content: [
                        {
                            block: 'promo-highlight',
                            content: this.i18n(this.block, 'text25') // 'Командная'
                        },
                        this.i18n(this.block, 'text26') // ' работа'
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
                            // 'Общая терминология позволяет разработчикам быстро переходить от проекта к проекту&nbsp;—
                            // всё заранее известно.'
                            content: this.i18n(this.block, 'text27')
                        }
                    ]
                }
            ]
        },
        {
            block: 'promo-section',
            mods: { color: 'black' },
            content: [
                {
                    block: 'promo-title',
                    content: [
                        this.i18n(this.block, 'text28'), // 'Пиши '
                        {
                            block: 'promo-highlight',
                            content: this.i18n(this.block, 'text29') // 'меньше'
                        },
                        // ', получай '
                        this.i18n(this.block, 'text30'),
                        {
                            block: 'promo-highlight',
                            content: this.i18n(this.block, 'text31') // 'больше'
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
                            // 'Общие единые правила способствуют автоматизации процессов. Часть кода может быть
                            // сгенерирована автоматически.'
                            content: this.i18n(this.block, 'text32')
                        }
                    ]
                }
            ]
        },
        {
            block: 'promo-section',
            mods: { color: 'beige' },
            content: [
                {
                    block: 'promo-title',
                    content: [
                        this.i18n(this.block, 'text33'), //  'Можно использовать в '
                        {
                            block: 'promo-highlight',
                            content: this.i18n(this.block, 'text34') // 'любых'
                        },
                        this.i18n(this.block, 'text35'), // ' языках программирования и в '
                        {
                            block: 'promo-highlight',
                            content: this.i18n(this.block, 'text34') // 'любых'
                        },
                        this.i18n(this.block, 'text36') // ' фреймворках'
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
                            // 'Методология предлагает абстрактные практики по повышению надёжности и повторному
                            // использованию кода.'
                            content: this.i18n(this.block, 'text37')
                        }
                    ]
                }
            ]
        },
        {
            block: 'promo-section',
            mods: { color: 'beige' },
            content: [
                {
                    block: 'promo-title',
                    content: [
                        {
                            block: 'promo-highlight',
                            content: this.i18n(this.block, 'text38') // 'Легко'
                        },
                        this.i18n(this.block, 'text39') // ' изучить'
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
                            // 'Описание методологии со всеми примерами и отсылками можно прочитать за утренним кофе.'
                            content: this.i18n(this.block, 'text40')
                        }
                    ]
                }
            ]
        },
*/
        {
            block: 'promo-section',
            mods: { color: 'blue' },
            content: [
                {
                    block: 'promo-title',
                    mods: { color: 'white' },
                    content: [
                        {
                            block: 'promo-highlight',
                            content: this.i18n(this.block, 'text41') // 'Эксперты'
                        },
                        this.i18n(this.block, 'text42'), // ' рекомендуют '
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
                            name: 'Jonathan Snook',
                            photo: 'promo-quotes__jonathan-snook.jpg',
                            position: 'Author of SMACSS, Xero',
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
        },
        {
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
                            content: this.i18n(this.block, 'text43') // 'используют'
                        }
                    ]
                },
                {
                    block: 'promo-companies',
                    content: [
                        {
                            elem: 'company',
                            content: this.i18n(this.block, 'text44'), // 'Яндекс'
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
                            url: 'https://github.com/awinogradov/alfa-bank-ui',
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
            ]
        }
    ]
});
