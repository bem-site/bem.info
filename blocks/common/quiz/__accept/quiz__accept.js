modules.define('quiz__accept', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {

    const QuizAccept = bemDom.declElem('quiz', 'accept', {
        _onClick() {
            this._emit('click');
        }
    }, {
        lazyInit: true,
        onInit: function () {
                this._events(Button).on('click', this.prototype._onClick);
            }
        });

    provide(QuizAccept);

});
