block('nav')(
    tag()('ul'),
    elem('item').tag()('li'),
    elem('link').tag()('a'),
    mix()([
        {
            block: 'toggle',
            js: { id: 'toggle-menu' }
        },
        {
            block: 'toggle',
            elem: 'nav'
        }
    ])
);
