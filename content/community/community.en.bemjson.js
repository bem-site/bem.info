module.exports = [
    {
        block: 'index-title',
        content: [
            {
                block: 'bem'
            },
            'Community'
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
                                    'Blog'
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'text',
                        content: 'Whatʼs new?'
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
                                    'Events'
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'text',
                        content: 'What, where, when'
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
                                    'Forum'
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'text',
                        content: 'Questions and answers'
                    }
                ]
            }
        ]
    }
]
