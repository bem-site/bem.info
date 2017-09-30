block('promo-content').content()(function() {
    return [
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
                                        this.i18n(this.block, 'text0') // 'Методология'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'text',
                            content: this.i18n(this.block, 'text1') // 'Идея и архитектура'
                        },
                        {
                            elem: 'text',
                            content: {
                                elem: 'text-link',
                                url: 'methodology/quick-start/',
                                content: this.i18n(this.block, 'text2') // 'Быстрый старт'
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
                                        this.i18n(this.block, 'text3') //  'Инструментарий'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'text',
                            content: this.i18n(this.block, 'text4') // 'Инструменты и SDK'
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
                                        this.i18n(this.block, 'text5') // 'Платформа'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'text',
                            content: this.i18n(this.block, 'text6') // 'Готовая реализация'
                        },
                        {
                            elem: 'text',
                            content: {
                                elem: 'text-link',
                                url: 'platform/tutorials/quick-start-static/',
                                content: this.i18n(this.block, 'text2') // 'Быстрый старт'
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
                                        this.i18n(this.block, 'text7') // 'Сообщество'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'text',
                            content: this.i18n(this.block, 'text8') // 'Люди и события'
                        }
                    ]
                }
            ]
        }
    ]
});
