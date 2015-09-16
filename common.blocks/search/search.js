modules.define('search', ['i-bem__dom', 'querystring'], function(provide, BEMDOM, qs) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var _this = this,
                    searchQuery = qs.parse(window.location.search.substr(1)).q;

                this._input = this.findBlockInside('input', 'input');

                if (searchQuery) {
                    this._input.setVal(searchQuery);
                    this.setMod('opened');
                }

                this.bindTo('switcher', 'click', function() {
                    this.setMod('opened');
                });

                this._input.on({ modName: 'focused', modVal: '' }, function() {
                    this.getVal() || _this.delMod('opened');
                });
            }
        },
        opened: {
            'true': function() {
                this._input.setMod('focused');
            }
        }
    }
}));

});
