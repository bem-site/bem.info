block('article-wrap').content()(function() {
    var data = this.data,
        page = data.page,
        questions = [
                {
                    text: 'Насколько вам понятен документ?',
                    name: 'q1',
                    options: [
                        {
                            val: 'better',
                            text: 'стало ли лучше?'
                        },
                        {
                            val: 'worse',
                            text: 'стало хуже'
                        },
                        {
                            val: 'same',
                            text: 'кому '
                        }
                    ]
                },
                {
                    text: 'Кому?',
                    name: 'q2',
                    options: [
                        {
                            val: 'better',
                            text: 'никому!'
                        },
                        {
                            val: 'worse',
                            text: 'никому :('
                        },
                        {
                            val: 'same',
                            text: 'никому...'
                        }
                    ]
                },
                {
                    text: 'Как?',
                    name: 'q2',
                    options: [
                        {
                            val: 'better',
                            text: 'никому!'
                        },
                        {
                            val: 'worse',
                            text: 'никому :('
                        },
                        {
                            val: 'same',
                            text: 'никому...'
                        }
                    ]
                }
            ];

    return [
        page.isTranslationMissed && { block: 'article-translation-missed' },
        // page.isArticleNew && { block: 'quiz', mix: { block: 'article-wrap', elem: 'quiz'} },
        {
            block: 'quiz',
            mix: { block: 'article-wrap', elem: 'quiz'},
            questions: questions
        },
        apply('articles'),
        apply('article'),
        {
            block: 'article-rewind',
            mods: { type: 'static', lang: data.lang }
        },
        {
            elem: 'side',
            content: [
                {
                    elem: 'side-group',
                    content: [
                        {
                            block: 'article-tags',
                            mix: {
                                block: 'article-wrap',
                                elem: 'tags'
                            }
                        },
                        {
                            block: 'social-likes',
                            mix: {
                                block: 'article-wrap',
                                elem: 'social'
                            },
                            params: page.head.meta,
                            lang: data.lang
                        },
                        {
                            block: 'doc-rating',
                            mix: {
                                block: 'article-wrap',
                                elem: 'rating'
                            }
                        }
                    ]
                },
                {
                    block: 'article-amendments',
                    mix: {
                        block: 'article-wrap',
                        elem: 'amendments'
                    }
                }
            ]
        }
    ];
});
