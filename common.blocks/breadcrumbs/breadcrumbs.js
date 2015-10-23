modules.define('breadcrumbs', ['i-bem__dom'],
    function(provide, BEMDOM) {
        provide(BEMDOM.decl('breadcrumbs', {
            onSetMod: {
                'js': {
                    'inited': function() {
                    }
                }
            }
        }));
    }
 );