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
                                            url: 'promo-crossroad_blog.svg'
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
                                            url: 'promo-crossroad_events.svg'
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
                                    url: 'https://github.com/bem-site/bem.info/issues',
                                    content: [
                                        {
                                            elem: 'img',
                                            url: 'promo-crossroad_forum.svg'
                                        },
                                        this.i18n(this.block, 'text5') // 'Issues'
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
    ];
});
