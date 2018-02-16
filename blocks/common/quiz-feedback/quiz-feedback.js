modules.define('quiz-feedback', [
    'i-bem-dom', 'radio-group',
    'quiz-feedback__cancel', 'quiz-feedback__close',
    'quiz-feedback__submit', 'quiz-feedback__wrapper',
    'quiz-feedback__done', 'button'],
    function(provide, bemDom, Radio,
        FeedbackCancel, FeedbackClose,
        FeedbackSubmit, FeedbackWrapper,
        FeedbackDone, Button) {

    const quizFeedback = bemDom.declBlock('quiz-feedback', {
        onSetMod: {
            js: {
                inited() {

                    this._button = this.findChildElem(FeedbackSubmit).findMixedBlock(Button);
                    this._radios;
                }
            }
        },
        _onCancel: function() {
            this._emit('cancel');
        },

        _onClose: function() {
            this._emit('close');
        },

        _onSubmit() {
            this._elem(FeedbackWrapper).delMod('visible');
            this._elem(FeedbackDone).setMod('visible');
        },

        _onChange() {
            const arr = [];
            this.getRadios().forEach(function(radio) {
               radio.getVal() === undefined ? arr.push(0) : arr.push(1);
            });
            function isPositive(number) {
                return number > 0;
            }
            this._button.setMod('disabled', !arr.every(isPositive));
        },

        getRadios() {
            return this._radios || (this._radios = this._elems('radio-group').findMixedBlock(Radio));
        }

    }, {
        lazyInit: true,
        onInit: function() {
            const ptp = this.prototype;
            this._events(FeedbackCancel).on('cancel', ptp._onCancel);
            this._events(FeedbackSubmit).on('submit', ptp._onSubmit);
            this._events(FeedbackClose).on('close', ptp._onClose);
            this._events(Radio).on('change', ptp._onChange);
            }
        });

    provide(quizFeedback);

});
