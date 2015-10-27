modules.define('breadcrumbs', ['i-bem__dom', 'select'], function(provide, BEMDOM, Select) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            'js': {
                'inited': function() {
                    Select.on(this.elem('version'), 'change', function(e) {
                        window.location.href = '/' + e.target.getVal(); // TODO: правильный урл
                    });
                }
            }
        }
    }));
});