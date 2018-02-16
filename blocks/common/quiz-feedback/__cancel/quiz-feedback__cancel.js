modules.define('quiz-feedback__cancel', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {

    const FeedbackCancel = bemDom.declElem('quiz-feedback', 'cancel', null, {

        lazyInit: true,
        onInit: function() {
            this._events(Button).on('click', function() {
                this._emit('cancel');
            });
        }
    })

    provide(FeedbackCancel);

});
