block('bem')(
    tag()('strong'),
    content()(function() {
        return this.i18n(this.block, 'bem');
    })
);
