[
    {
        block: 'index-logo',
        url: freeze('../../static-ru/index-logo__1.svg')
    },
    {
        block: 'index-title',
        content: [
                {
                    block: 'bem'
                },
                'Технология создания веб-приложений'
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
                                        url: freeze('../../static-ru/promo-crossroad_methodology.png')
                                    },
                                    'Методология'
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'text',
                        content: 'Идея и архитектура БЭМ'
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
                                        url: freeze('../../static-ru/promo-crossroad_platform.png')
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
                                        elemMods: { square: true },
                                        url: freeze('../../static-ru/promo-crossroad_community.svg')
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
