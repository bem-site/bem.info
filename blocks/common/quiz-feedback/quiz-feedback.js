modules.define('quiz-feedback', [
    'i-bem-dom', 'radio-group',
    'quiz-feedback__cancel', 'quiz-feedback__close',
    'quiz-feedback__submit', 'quiz-feedback__inner',
    'quiz-feedback__done', 'button'],
    function(provide, bemDom, Radio,
        FeedbackCancel, FeedbackClose,
        FeedbackSubmit, FeedbackInner,
        FeedbackDone, Button) {

    const quizFeedback = bemDom.declBlock('quiz-feedback', {
        onSetMod: {
            js: {
                inited() {
                    this._submitButton = this.findChildElem(FeedbackSubmit).findMixedBlock(Button);
                }
            }
        },

        _onClose: function() {
            this._emit('close');
        },

        _onSubmit() {
            this._elem(FeedbackInner).delMod('visible');
            this._elem(FeedbackDone).setMod('visible');
        },

        _onChange() {
            this._submitButton.setMod('disabled', !this.getRadios().every(radio => radio.getVal()));
        },

        getRadios() {
            return this._radios || (this._radios = this._elems('radio-group').findMixedBlock(Radio));
        }

    }, {
        lazyInit: true,
        onInit: function() {
            const ptp = this.prototype;
            this._events(FeedbackSubmit).on('submit', ptp._onSubmit);
            this._events(FeedbackCancel).on('cancel', ptp._onClose);
            this._events(FeedbackClose).on('close', ptp._onClose);
            this._events(Radio).on('change', ptp._onChange);
            }
        });

    provide(quizFeedback);

});
