import bemDom from 'bem:i-bem-dom';
import events from 'bem:events';

export default bemDom.declBlock('form', {
    onSubmit: function(e) {
        var event = new events.Event('submit');

        this._emit(event);
        event.isDefaultPrevented() && e.preventDefault();
    }
}, {
    lazyInit: true,
    onInit: function() {
        this._domEvents().on('submit', this.prototype.onSubmit);
    }
});
