block('logo')(
    tag()(function() {
        return this.ctx.url ? 'a' : 'span';
    }),
    attrs()(function() {
        var attrs = applyNext() || {};
        attrs.href = this.ctx.url;
        return attrs;
    }),
    content()(function() {
        return require('fs').readFileSync('common.blocks/logo/logo.svg', 'utf8').replace(/<svg/, '<svg class="logo__logo"');
    })
);
