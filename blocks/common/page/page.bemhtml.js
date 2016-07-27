block('page').def()(function() {
    var lang = this.ctx.lang;
    return applyNext().map(function(node) {
        if (node.tag === 'html') {
            node.attrs || (node.attrs = {});
            node.attrs.lang = lang || 'ru';
        }
        return node;
    });
});
