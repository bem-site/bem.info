block('index-logo')(
    tag()('img'),
    attrs()(function() {
        return this.extend(applyNext(), {
            src: this.ctx.url
        });
    })
);
