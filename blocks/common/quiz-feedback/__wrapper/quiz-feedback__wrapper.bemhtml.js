block('quiz-feedback').elem('wrapper').content()(function() {
    return [
        {
            elem: 'header'
        },
        {
            elem: 'body',
            questions: this.ctx.questions
        },
        {
            elem: 'footer'
        }
    ];
});
