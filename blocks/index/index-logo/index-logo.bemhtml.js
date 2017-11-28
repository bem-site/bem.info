block('index-logo')(
    tag()('img'),
    addAttrs()(function() {
        return this.extend(applyNext(), {
            src: this.ctx.url
        });
    })
);
