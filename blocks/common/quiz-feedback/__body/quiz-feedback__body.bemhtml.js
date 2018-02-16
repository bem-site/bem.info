block('quiz-feedback').elem('body').content()(function() {
    return [
        {
            elem: 'questions',
            content: this.ctx.questions.map(function(question) {
                question.block = 'quiz-feedback';
                question.elem = 'question';

                return question;
            })
        }
    ];
});
