block('promo-content')(
	mix()({ block: 'clearfix' }),
    elem('image')(
		tag()('img'),
	    attrs()(function() {
	        var attrs = applyNext() || {};
	        attrs.src = this.ctx.src;
	        attrs.alt = '';
	        return attrs;
	    })
	)
);
