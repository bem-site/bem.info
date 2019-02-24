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
                                    url: 'technologies/',
                                    content: [
                                        {
                                            elem: 'img',
                                            elemMods: { type: 'round' },
                                            url: 'promo-crossroad_technologies.svgd'
                                        },
                                        this.i18n(this.block, 'text5') // 'Технологии'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'text',
                            content: [
                                {
                                    elem: 'text-link',
                                    url: 'technologies/classic/',
                                    content: this.i18n(this.block, 'text6') // Классический БЭМ-стек
                                },
                                { tag: 'br' },
                                {
                                    elem: 'text-link',
                                    url: 'technologies/bem-react/',
                                    content: this.i18n(this.block, 'text8') // React
                                }
                            ]
                        },
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
                                    url: 'libraries/',
                                    content: [
                                        {
                                            elem: 'img',
                                            elemMods: { type: 'round' },
                                            url: 'promo-crossroad_libraries.svgd'
                                        },
                                        this.i18n(this.block, 'text9') // 'Библиотеки'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'text',
                            content: this.i18n(this.block, 'text10') // TODO
                        },
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
                                    url: 'tutorials/',
                                    content: [
                                        {
                                            elem: 'img',
                                            elemMods: { type: 'round' },
                                            url: 'promo-crossroad_tutorials.svgd'
                                        },
                                        this.i18n(this.block, 'text11') // 'Учебные материалы'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'text',
                            content: this.i18n(this.block, 'text12') // TODO
                        },
                    ]
                },
            ]
        }
    ]
});
