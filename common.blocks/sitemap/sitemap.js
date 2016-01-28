modules.define('sitemap', ['i-bem__dom', 'search'], function(provide, BEMDOM, Search) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                Search.on(this.findBlockOutside('page'), 'opened', function() { console.log('aaa'); this.setMod('opened', true) }, this);
                Search.on(this.findBlockOutside('page'), 'closed', function() { console.log('bbb'); this.delMod('opened') }, this);
            }
        }
    }
}));

});
