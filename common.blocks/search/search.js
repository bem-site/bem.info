modules.define('search', ['i-bem__dom', 'form', 'input'], function(provide, BEMDOM, Form) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var input = this.input = this.findBlockOn('input', 'input');

                Form.on(this.domElem, 'submit', this._onClose, this);
                input.on({ modName: 'focused', modVal: '' }, this._onClose, this);
            }
        },
        opened: {
            'true': function() {
                this.input.setMod('focused', true);
            }
        }
    },
    _onClose: function() {
        var _this = this;

        setTimeout(function() {
            _this.delMod('opened');
        }, 10);
    }
}, {
    live: function() {
        this.liveBindTo('open', 'click', function() {
            this.setMod('opened');
        });
    }
}));

});
