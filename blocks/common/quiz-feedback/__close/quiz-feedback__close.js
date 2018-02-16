modules.define('quiz-feedback__close', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {

    const FeedbackClose = bemDom.declElem('quiz-feedback', 'close', null, {

        lazyInit: true,
        onInit: function() {
            this._events(Button).on('click', function() {
                this._emit('close');
            });
        }
    })

    provide(FeedbackClose);

});
