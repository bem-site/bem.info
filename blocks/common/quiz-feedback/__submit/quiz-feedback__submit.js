modules.define('quiz-feedback__submit', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {

    const FeedbackSubmit = bemDom.declElem('quiz-feedback', 'submit', {

    }, {
        lazyInit: true,
        onInit: function() {
            this._events(Button).on('click', function() {
                this._emit('submit');
            });
        }
    })

    provide(FeedbackSubmit);

});
