modules.define('rating-stars__item', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('rating-stars', 'item', {

    _onPointerClick: function(e) {
        this._emit('click', { val: e.bemTarget.params.val });
        e.stopPropagation();
    }
}, {
    lazyInit: true,
    onInit: function() {
        this._domEvents().on('pointerclick', this.prototype._onPointerClick);
    }
}));

});
