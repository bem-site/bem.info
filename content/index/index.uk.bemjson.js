module.exports = [
    {
        block: 'index-title',
        content: [
            {
                block: 'bem'
            },
            'Методологія веб-розробки'
        ]
    },
    {
        block: 'promo-crossroad',
        content: [
            {
                elem: 'item',
                content: [
                    {
                        elem: 'title',
                        content: [
                            {
                                elem: 'title-link',
                                url: 'methodology/',
                                content: [
                                    {
                                        elem: 'img',
                                        url: 'promo-crossroad_methodology.svgd'
                                    },
                                    'Методологія'
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'text',
                        content: 'Ідея та архітектура'
                    }
                ]
            },
            {
                elem: 'item',
                content: [
                    {
                        elem: 'title',
                        content: [
                            {
                                elem: 'title-link',
                                url: 'tutorials/quick-start-static/',
                                content: [
                                    {
                                        elem: 'img',
                                        elemMods: { type: 'round' },
                                        url: 'promo-crossroad_platform.svgd'
                                    },
                                    'Платформа'
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'text',
                        content: 'Готова реалізація'
                    }
/*
                    {
                        elem: 'text',
                        content:
                        {
                            elem: 'text-link',
                            url: '/tutorials/quick-start-static/',
                            content: 'Швидкий старт'
                        }
                    }
*/
                ]
            },
            {
                elem: 'item',
                content: [
                    {
                        elem: 'title',
                        content: [
                            {
                                elem: 'title-link',
                                url: 'community/',
                                content: [
                                    {
                                        elem: 'img',
                                        elemMods: { type: 'out-of-box' },
                                        url: 'promo-crossroad_community.svgd'
                                    },
                                    'Спільнота'
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'text',
                        content: 'Люди і події'
                    }
                ]
            }
        ]
    }
]
