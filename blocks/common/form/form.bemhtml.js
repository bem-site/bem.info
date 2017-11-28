block('form')(
    tag()('form'),
    addJs()(true),
    addAttrs()(function() {
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
