block('footer')(
    tag()('footer'),

    elem('community').tag()('ul'),
    elem('channel')(
        tag()('li'),
        content()(function() {
            return {
                elem: 'channel-link',
                attrs: { href: this.ctx.url },
                content: applyNext()
            };
        })
    ),
    elem('channel-link').tag()('a')
);
