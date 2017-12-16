modules.define('feedback__submit', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {

    var FeedbackSubmit = bemDom.declElem('feedback', 'submit', {

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
