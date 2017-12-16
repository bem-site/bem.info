modules.define('rating-stars', ['i-bem-dom', 'rating-stars__item'], function(provide, bemDom, RatingStarsItem) {

    provide(bemDom.declBlock(this.name, {

        _onItemClick: function(item, data) {

            this._emit('rate', { val: data.val });

        }

    }, {
        lazyInit: true,
        onInit: function() {

            this._events(RatingStarsItem).on('click', function(e, data) {
                this._onItemClick(e.target, data);
            });

        }
    }));

});
