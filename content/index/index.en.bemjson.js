module.exports = [
    {
        block: 'index-title',
        content: [
            {
                block: 'bem'
            }
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
                                    'Methodology'
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'text',
                        content: 'Idea and architecture'
                    },
                    {
                        elem: 'text',
                        content:
                        {
                            elem: 'text-link',
                            url: 'methodology/quick-start/',
                            content: 'Quick start'
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
                                url: 'toolbox/',
                                content: [
                                    {
                                        elem: 'img',
                                        url: 'promo-crossroad_toolbox.svgd'
                                    },
                                    'Toolbox'
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'text',
                        content: 'Tools and SDK'
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
                                    'Platform'
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'text',
                        content: 'Implementation'
                    },
                    {
                        elem: 'text',
                        content:
                        {
                            elem: 'text-link',
                            url: 'platform/tutorials/quick-start-static/',
                            content: 'Quick start'
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
                                    'Community'
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'text',
                        content: 'People and events'
                    }
                ]
            }
        ]
    }
]
