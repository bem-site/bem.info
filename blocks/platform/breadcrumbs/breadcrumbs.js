modules.define('breadcrumbs__version', ['i-bem-dom', 'select'], function(provide, bemDom, Select) {

    var BreadcrumbsVersion = bemDom.declElem('breadcrumbs', 'version', {}, {
        lazyInit: true,
        onInit: function() {
            this._events(Select).on('change', function(e) {
                var l = window.location;
                l.href = '//' + l.host + this.params.url + e.target.getVal() + '/';
            });
        }
    });

    provide(BreadcrumbsVersion);

});
