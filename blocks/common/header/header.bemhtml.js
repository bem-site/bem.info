block('header')(
    addJs()(true),

    elem('toggle').content()({ elem: 'toggle-line' }),

    elem('toggle-line').tag()('span'),

    elem('forum').tag()('a')
);
