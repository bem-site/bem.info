modules.define('search', ['i-bem__dom'], function(provide, BEMDOM, qs) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var self = this;
                var input = this.input = this.findBlockOn('input', 'input');

                this.bindTo('open', 'click', function() {
                    this.setMod('opened');
                });

                var close = function() {
                    self.delMod('opened');
                };

                this.bindTo('close', 'click', close);
                // input.on({ modName: 'focused', modVal: '' }, close);
            }
        },
        opened: {
            'true': function() {
                var self = this;

                this.input.setMod('focused', true);

                BEMDOM.doc.on('keydown', function (e) {
                    e.keyCode === 27 && self.input.delMod('focused');
                });
            },
            '': function() {
                BEMDOM.doc.on('keydown', undefined);
            }
        }
    }
}));

});
