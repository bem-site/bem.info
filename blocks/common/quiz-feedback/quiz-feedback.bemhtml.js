block('quiz-feedback')(
    js()(true),
    content()(function() {
        return [
            {
                elem: 'wrapper',
                elemMods: { visible: true },
                questions: this.ctx.questions
            },
            {
                elem: 'done'
            }
        ];
    })
);
