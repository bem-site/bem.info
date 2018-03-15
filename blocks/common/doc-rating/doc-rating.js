modules.define('doc-rating', ['i-bem-dom', 'jquery', 'modal', 'feedback', 'rating-stars', 'radio-group', 'cookie'],
    function(provide, bemDom, $, Modal, Feedback, RatingStars, RadioGroup, Cookie) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    var href = window.location.href,
                        // support dev mode on top of browser-sync
                        handlerPrefix = window.location.host.indexOf('.bem.info') > -1 ? '' : '/bem.info',
                        handlerUrl = handlerPrefix + '/doc-feedback/?doc=' + encodeURIComponent(href),
                        cookies = JSON.parse(Cookie.get('bem.info')) || {};

                    this._modal = this.findChildBlock(Modal);
                    this._feedback = this.findChildBlock(Feedback);
                    this._ratingStars = this.findChildBlock(RatingStars);

                    this._events(this._feedback).on('cancel', function() {
                        this._modal.delMod('visible');
                    });
                    this._events(this._feedback).on('close', function() {
                        this._modal.delMod('visible');
                    });

                    this._events(this._feedback).on('rate', function() {
                        this.updateData(handlerUrl);
                    });

                    this.updateData(handlerUrl);

                    if (cookies.feedback && cookies.feedback[window.location.href]) {
                        this._ratingStars.delMod('active');
                        return;
                    }

                    this._events(RatingStars).on('rate', function(e, data) {
                        this._modal.setMod('visible');

                        this._feedback.findChildBlock(RadioGroup).setVal(data.val);
                    });
                }
            }
        },
        updateData: function(handlerUrl) {
            var _this = this,
                cookies = JSON.parse(Cookie.get('bem.info')) || {};

            cookies.feedback || (cookies.feedback = {});
            cookies.feedback[window.location.href] = true;

            $.get(handlerUrl)
                .then(function(respond) {
                    Cookie.set('bem.info', JSON.stringify(cookies), { expires: 365 });
                    _this.updateInterface(JSON.parse(respond));
                })
                .fail(err => console.log(err));
        },
        updateInterface: function(data) {
            var $value = this._elem('value').domElem,
                $total = this._elem('total').domElem;

            if (!data.votes) {
                $value.hide();
                $total.hide();
                return;
            }

            var value = data.total / data.votes;

            $total.text(data.votes + ' оценки'); // TODO: i18n
            $value.text(value.toFixed(1) + ' средняя'); // TODO: i18n, склонения
            this._ratingStars._elem('yellow').domElem.css({ width: value * 20 + '%' });
        }
    }));

});
