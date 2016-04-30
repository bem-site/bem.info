block('root').replace()(function() {
	this.freeze = this.ctx.freeze;

	return this.ctx.content;
});
