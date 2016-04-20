modules.define('header', ['i-bem__dom', 'form', 'keyboard__codes', 'input'], function(provide, BEMDOM, Form, KeyCodes) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this.input = this.findBlockInside('input');
                    this.search = this.findBlockInside('search');
                    this.toggle = this.findElem('toggle');
                }
            },
            opened: {
                'true': function() {
                    var mq = window.matchMedia('all and (max-width: 780px)');
                    this.search.setMod('opened', true);
                    this.setMod(this.toggle, 'active', true);
                    this.bindToDoc('keydown', function(e) {
                        // Close search then ESC pressed
                        if (e.keyCode === KeyCodes.ESC) {
                            this.input.delMod('focused');
                            this.delMod('opened');
                        }
                    });
                    if (!mq.matches) {
                        this.input.setMod('focused', true);
                    }

                },
                '': function() {
                    var _this = this;

                    _this.unbindFromDoc('keydown');
                    _this.search.delMod('opened');
                    _this.delMod(_this.toggle, 'active', true);
                    _this.delMod('opened').delMod('focused');
                    // setTimeout is used to have time to handle submit button on input's focus lost
                    setTimeout(function() {
                        _this.input.setVal('');
                    }, 150);

                }
            }
        }
    }, {
        live: function() {
            this.liveBindTo('open', 'click', function() {
                this.setMod('opened');
            });
            this.liveBindTo('toggle', 'click', function() {
                this.toggleMod('opened');
            });
            this.liveBindTo('submit', 'click', function() {
                this.delMod('opened');
            });
            this.liveBindTo('close', 'click', function() {
                this.delMod('opened');
            });

            // Если будет >1 инпута, их надо будет различать
            this.liveInitOnBlockInsideEvent({ modName: 'focused', modVal: '*' }, 'input', function() {
                this.setMod('focused');
            });
        }
    }));

});
