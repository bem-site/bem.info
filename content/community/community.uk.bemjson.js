module.exports = [
    {
        block: 'index-title',
        content: [
            {
                block: 'bem'
            },
            'Спільнота'
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
                                url: '/blog/',
                                content: [
                                    {
                                        elem: 'img',
                                        url: 'promo-crossroad_blog.svgd'
                                    },
                                    'Блог'
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'text',
                        content: 'Що нового?'
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
                                url: '/events/',
                                content: [
                                    {
                                        elem: 'img',
                                        url: 'promo-crossroad_events.svgd'
                                    },
                                    'Події'
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'text',
                        content: 'Що, де, коли'
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
                                url: '/forum/',
                                content: [
                                    {
                                        elem: 'img',
                                        url: 'promo-crossroad_forum.svgd'
                                    },
                                    'Форум'
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'text',
                        content: 'Питання і відповіді'
                    }
                ]
            }
        ]
    }
]
