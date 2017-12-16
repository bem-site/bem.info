modules.define('lang-switcher__change', ['i-bem-dom', 'select'], function(provide, bemDom, Select) { provide(
    bemDom.declElem('lang-switcher', 'change', {}, {
        lazyInit: true,
        onInit: function() {
            this._events(Select).on('change', function(e) {
                window.location.href = window.location.href.replace(
                    new RegExp('/' + this.params.lang),
                    '/' + e.target.getVal()
                );
            });
        }
    })
)});
