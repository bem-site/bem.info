modules.define('breadcrumbs', ['i-bem__dom', 'select'], function(provide, BEMDOM, Select) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            'js': {
                'inited': function() {
                    Select.on(this.elem('version'), 'change', function(e) {
                        var l = window.location;
                        l.href = '//' + l.host + this.params.url + e.target.getVal() + '/';
                    });
                }
            }
        }
    }));
});