modules.define('toggle', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {}, {
        live: function() {
            this.liveBindTo('click', function() {
                // Меняем состояние при клике на блок
                this.toggleMod('active');

                // Показываем меню
                this.findBlockOn('nav').toggleMod('toggled');
            });
        }
    }))
});
