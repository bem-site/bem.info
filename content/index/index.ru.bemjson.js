module.exports = [
    {
        block: 'index-title',
        content: [
            {
                block: 'bem'
            },
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
                                    'Методология'
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'text',
                        content: 'Идея и архитектура'
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
                                url: 'toolbox/',
                                content: [
                                    {
                                        elem: 'img',
                                        url: 'promo-crossroad_toolbox.svg'
                                    },
                                    'Инструментарий'
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'text',
                        content: 'Инструменты и SDK'
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
                                url: 'platform/',
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
                        content: 'Готовая реализация'
                    },
                    {
                        elem: 'text',
                        content:
                        {
                            elem: 'text-link',
                            url: '/tutorials/quick-start-static/',
                            content: 'Быстрый старт'
                        }
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
                                url: 'community/',
                                content: [
                                    {
                                        elem: 'img',
                                        elemMods: { type: 'out-of-box' },
                                        url: 'promo-crossroad_community.svgd'
                                    },
                                    'Сообщество'
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'text',
                        content: 'Люди и события'
                    }
                ]
            }
        ]
    }
]
