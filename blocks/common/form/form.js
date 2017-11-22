modules.define('form', ['i-bem-dom', 'events'], function(provide, bemDom, events) {

provide(bemDom.declBlock(this.name, {
    onSubmit: function(e) {
        var event = new events.Event('submit');

        this.emit(event);
        event.isDefaultPrevented() && e.preventDefault();
    }
}, {
    lazyInit: true,
    onInit: function() {
        this._events().on('submit', this.prototype.onSubmit);
    }
}));

});
