block('toggle')(
    js()(
        { id: 'toggle-menu' }
    ),
    content()(function() {
        return {
            elem: 'line'
        }
    }),
    elem('line').tag()('span')
);
