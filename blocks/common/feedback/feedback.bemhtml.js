block('feedback')(
    js()(true),
    tag()('form'),
    content()(function() {
        return [
            {
                elem: 'wrapper',
                elemMods: { visible: true }
            },
            {
                elem: 'feedback-done'
            }
        ];
    })
);
