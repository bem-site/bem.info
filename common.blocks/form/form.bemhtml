block('form')(
    tag()('form'),
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
