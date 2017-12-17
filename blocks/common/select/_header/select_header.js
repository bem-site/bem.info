modules.define('select', function(provide, Select) {
    provide(Select.declMod({ modName: 'header' }, null, {
        lazyInit: true,
        onInit: function() {
            this.__base.apply(this, arguments);

            this._events().on('change', function(e) {
                window.location.href = e.target.getVal();
            });
        }
    }))
});
