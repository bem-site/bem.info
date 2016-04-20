block('header')(
    js()(true),

    elem('toggle')(
        mix()({ block: 'search-icon'}),
        content()(function() {
            return [
                { elem: 'toggle-line' }
            ]
        })
    ),
    elem('toggle-line').tag()('span'),
    elem('forum').tag()('a')
);
