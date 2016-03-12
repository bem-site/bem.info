modules.define('sitemap', ['i-bem__dom', 'search'], function(provide, BEMDOM, Search) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var _this = this;
                Search.on({ modName: 'opened', modVal: '*' }, function() {
                    _this.toggleMod('opened');
                });
            }
        }
    }
}));

});
