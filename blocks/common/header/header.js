import bemDom from 'bem:i-bem-dom';
import Input from 'bem:input';
import Search from 'bem:search';
import KeyCodes from 'bem:keyboard__codes';
import 'bem:form';

export default bemDom.declBlock('header', {
    onSetMod: {
        js: {
            inited: function() {
                this.input = this.findChildBlock(Input);
                this.search = this.findChildBlock(Search);
                this.toggle = this._elem('toggle');
            }
        },
        opened: {
            'true': function() {
                var mq = window.matchMedia('(max-width: 800px)');
                this.search.setMod('opened');
                this.toggle.setMod('active');

                this._domEvents(bemDom.doc).on('keydown', function(e) {
                    // Close search then ESC pressed
                    if (e.keyCode === KeyCodes.ESC) {
                        this.input.delMod('focused');
                        this.delMod('opened');
                    }
                });
                if (!mq.matches) {
                    this.input.setMod('focused');
                }

            },
            '': function() {
                var _this = this;

                _this._domEvents(bemDom.doc).un('keydown');
                _this.search.delMod('opened');
                _this.toggle.delMod('active');
                _this.delMod('opened').delMod('focused');
                // setTimeout is used to have time to handle submit button on input's focus lost
                setTimeout(function() {
                    _this.input.setVal('');
                }, 150);

            }
        }
    }
}, {
    lazyInit: true,
    onInit: function() {
        this._domEvents('open').on('click', function() {
            this.setMod('opened');
        });
        this._domEvents('toggle').on('click', function() {
            this.toggleMod('opened');
        });
        this._domEvents('submit').on('click', function() {
            this.delMod('opened');
        });
        this._domEvents('close').on('click', function() {
            this.delMod('opened');
        });

        // Если будет >1 инпута, их надо будет различать
        this._events(Input).on({ modName: 'focused', modVal: '*' }, function() {
            this.setMod('focused');
        });
    }
});
