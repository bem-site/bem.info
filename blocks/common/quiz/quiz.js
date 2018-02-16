modules.define('quiz', ['i-bem-dom', 'modal', 'quiz-feedback'], function(provide, bemDom, Modal, QuizFeedback) {

    const Quiz = bemDom.declBlock('quiz', {
        onSetMod: {
            js: {
                inited() {
                    this.setMod('visible');
                    this._modal = this.findChildBlock(Modal);
                    this._feedback = this.findChildBlock(QuizFeedback);

                    this._events(this._feedback).on('cancel', function() {
                        this._modal.delMod('visible');
                    });

                    this._events(this._feedback).on('close', function() {
                        this._modal.delMod('visible');
                    });
                }
            }
        },

        _onDecline: function() {
            this.delMod('visible');
        },

        _onAccept(event) {
            this._modal.setMod('visible');
        }
    }, {
        lazyInit: false,
        onInit: function() {
            this._events('accept').on('click', this.prototype._onAccept);
            this._events('decline').on('click', this.prototype._onDecline);
            }
        });

    provide(Quiz);

});
