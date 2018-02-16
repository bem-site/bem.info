block('quiz-feedback')(
    js()(true),
    content()(function() {
        return [
            {
                elem: 'inner',
                elemMods: { visible: true },
                content: [
                    {
                        elem: 'header'
                    },
                    {
                        elem: 'body',
                        content: {
                            elem: 'questions',
                            content: this.ctx.questions.map(function(question) {
                                question.block = 'quiz-feedback';
                                question.elem = 'question';

                                return question;
                            })
                        }
                    },
                    {
                        elem: 'footer'
                    }
                ]
            },
            {
                elem: 'done'
            }
        ];
    })
);
