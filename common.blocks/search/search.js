modules.define('search', ['i-bem__dom', 'form', 'input'], function(provide, BEMDOM, Form) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this.input = this.findBlockOn('input', 'input');

                Form.on(this.domElem, 'submit', this._onClose, this);
                this.input.on({ modName: 'focused', modVal: '' }, this._onClose, this);
            }
        },
        opened: {
            'true': function() {
                this.input.setMod('focused', true);

                // Close search then ESC pressed
                this.bindToDoc('keydown', function (e) {
                    e.keyCode === 27 && this.delMod('opened');
                });
            },
            '': function() {
                this.unbindFromDoc('keydown');
            }
        }
    },
    _onClose: function() {
        var _this = this;

        // setTimeout used to have time to handle submit button on input's focus lost
        setTimeout(function() {
            _this.delMod('opened');
            _this.input.setVal('');
        }, 100);
    }
}, {
    live: function() {
        this.liveBindTo('open', 'click', function() {
            this.setMod('opened');
        });
    }
}));

});
