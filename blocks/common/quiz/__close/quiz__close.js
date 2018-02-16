modules.define('quiz__close', ['i-bem-dom'], function(provide, bemDom) {

    const QuizClose = bemDom.declElem('quiz', 'close', {}, {
        lazyInit: true,
        onInit: function () {
            this._domEvents().on('click', function() {
                this._block().delMod('visible');
            });
        }
    });

    provide(QuizClose);

});
