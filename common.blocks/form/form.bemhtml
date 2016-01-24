block('form')(
    tag()('form'),
    js()(true),
    attrs()(function() {
        var ctx = this.ctx;

        return this.extend(
            {
                action: ctx.action,
                method: ctx.method
            },
            applyNext()
        );
    })
);
