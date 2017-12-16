modules.define('feedback__cancel', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {

    var FeedbackCancel = bemDom.declElem('feedback', 'cancel', null, {

        lazyInit: true,
        onInit: function() {
            this._events(Button).on('click', function() {
                this._emit('cancel');
            });
        }
    })

    provide(FeedbackCancel);

});
