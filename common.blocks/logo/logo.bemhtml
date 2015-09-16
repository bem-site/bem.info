block('logo')(
    tag()(function() {
        return this.ctx.url ? 'a' : 'span';
    }),
    attrs()(function() {
        var attrs = applyNext() || {};
        attrs.href = this.ctx.url;
        return attrs;
    })
);
