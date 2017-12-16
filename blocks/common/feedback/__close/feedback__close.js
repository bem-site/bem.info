modules.define('feedback__close', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {

    var FeedbackClose = bemDom.declElem('feedback', 'close', null, {

        lazyInit: true,
        onInit: function() {
            this._events(Button).on('click', function() {
                this._emit('close');
            });
        }
    })

    provide(FeedbackClose);

});
