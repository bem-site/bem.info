block('page').def()(function() {
    var lang = this.ctx.lang;
    var later = applyNext();
    return later.map(function(node) {
        if (node.tag === 'html') {
            node.lang = lang || 'ru';
        }
        return node;
    });
});
