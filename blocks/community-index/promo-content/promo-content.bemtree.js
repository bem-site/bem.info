block('promo-content').content()(function() {
    return [
        {
            block: 'index-title',
            content: [
                {
                    block: 'bem'
                },
                this.i18n(this.block, 'text0') // 'Сообщество'
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
                                        this.i18n(this.block, 'text1') // 'Блог'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'text',
                            content: this.i18n(this.block, 'text2') // 'Что нового?'
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
                                        this.i18n(this.block, 'text3') // 'События'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'text',
                            content: this.i18n(this.block, 'text4') // 'Что, где, когда'
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
                                        this.i18n(this.block, 'text5') // 'Форум'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'text',
                            content: this.i18n(this.block, 'text6') // 'Вопросы и ответы'
                        }
                    ]
                }
            ]
        }
    ]
});
