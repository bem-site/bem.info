modules.define('yandex-metrica-api', ['i-bem-dom'], function(provide, bemDom) {

    var YandexMetricaAPI = bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this.__self.counterId = this.params.counterId;
                }
            }
        }
    }, {
        sendParams: function(data) {
            var _this = this;

            this.counterId ? this._sendParams(data) : setTimeout(function() {
                _this.sendParams(data);
            }, 100);
        },
        _sendParams: function(data) {
            window['yaCounter' + this.counterId].userParams(data);
        }
    });

    provide(YandexMetricaAPI);

});
