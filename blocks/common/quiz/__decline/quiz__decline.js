modules.define('quiz__decline', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {

    const QuizDecline = bemDom.declElem('quiz', 'decline', {
        _onClick() {
            this._emit('click');
        }
    }, {
        lazyInit: true,
        onInit: function () {
            this._events(Button).on('click', this.prototype._onClick);
            }
        });

    provide(QuizDecline);

});
