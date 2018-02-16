block('quiz')(
    js()(true),
    content()(function() {
        return {
            elem: 'inner',
            content: [
                {
                    elem: 'table',
                    content: [
                        {
                            elem: 'title',
                            content: this.i18n(this.block, 'title')
                        },
                        {
                            block: 'button',
                            mods: { theme: 'islands', size: 'l', view: 'action' },
                            mix: { block: 'quiz', elem: 'accept', js: true },
                            text: this.i18n(this.block, 'button-yes')

                        },
                        {
                            block: 'button',
                            mods: { theme: 'islands', size: 'l' },
                            mix: { block: 'quiz', elem: 'decline', js: true },
                            text: this.i18n(this.block, 'button-no')
                        }
                    ]
                },
                {
                    block: 'modal',
                    mods: { theme: 'islands', autoclosable: true, 'has-close': true },
                    content: {
                        block: 'quiz-feedback',
                        questions: this.ctx.questions
                    }
                },
                {
                    elem: 'close'
                }
            ]
        };
    })
);
