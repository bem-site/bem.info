block('header').elem('forum')(
    tag()('a'),
    attrs()(function() {
        var attrs = applyNext() || {};
        attrs.href = this.ctx.url;
        return attrs;
    })
);
