block('page').def()(function() {
    var lang = this.ctx.lang;
    return applyNext().map(function(node) {
        if (node.tag === 'html') {
            node.lang = lang || 'ru';
        }
        return node;
    });
});
