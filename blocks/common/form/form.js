modules.define('form', ['i-bem__dom', 'events'], function(provide, BEMDOM, events) {

provide(BEMDOM.decl(this.name, {
    onSubmit: function(e) {
        var event = new events.Event('submit');

        this.emit(event);
        event.isDefaultPrevented() && e.preventDefault();
    }
}, {
    live: function() {
        this.liveBindTo('submit', this.prototype.onSubmit);
    }
}));

});
