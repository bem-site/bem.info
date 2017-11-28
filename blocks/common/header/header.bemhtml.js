block('header')(
    addJs()(true),

    elem('toggle')(
        addMix()({ block: 'search-icon' }),
        content()(function() {
            return [
                { elem: 'toggle-line' }
            ]
        })
    ),
    elem('toggle-line').tag()('span'),
    elem('forum').tag()('a')
);
