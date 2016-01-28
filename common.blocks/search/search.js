modules.define('search', ['i-bem__dom', 'form', 'keyboard__codes', 'events', 'input'], function(provide, BEMDOM, Form, KeyCodes, events) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this.input = this.findBlockOn('input', 'input');

                Form.on(this.domElem, 'submit', this._onClose, this);

                // Close search on input's focus lost
                this.input.on({ modName: 'focused', modVal: '' }, this._onClose, this);
            }
        },
        opened: {
            'true': function() {
                this.emit(new events.Event('opened'));

                this.bindToDoc('keydown', function(e) {
                    // Close search then ESC pressed
                    e.keyCode === KeyCodes.ESC && this.input.delMod('focused');
                });

                this.input.setMod('focused', true);
            },
            '': function() {
                this.emit(new events.Event('closed'));
            }
        },
    },
    _onClose: function() {
        var _this = this;

        this.unbindFromDoc('keydown');

        // setTimeout is used to have time to handle submit button on input's focus lost
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
