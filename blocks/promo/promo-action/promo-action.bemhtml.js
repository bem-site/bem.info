block('promo-action').replace()(function() {
    return {
        block: 'link',
        mix: { block: 'promo-action' },
        url: this.ctx.url,
        content: this.ctx.content
    }
});
