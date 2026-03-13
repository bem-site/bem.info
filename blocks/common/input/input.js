import bemDom from 'bem:i-bem-dom';

export default bemDom.declBlock('input', {
    onSetMod: {
        js: {
            inited: function() {
                this._control = this.domElem.find('.input__control');

                this._domEvents(this._control).on('focus', function() {
                    this.setMod('focused');
                });
                this._domEvents(this._control).on('blur', function() {
                    this.delMod('focused');
                });
            }
        }
    },

    getVal: function() {
        return this._control.val();
    },

    setVal: function(val) {
        this._control.val(val);
        return this;
    }
});
