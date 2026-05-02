block('search')(
    addJs()(true),
    elem('submit')(
        tag()('span'),
        addAttrs()({ role: 'button', 'aria-label': 'search' })
    ),
    elem('results')(
        tag()('div'),
        addAttrs()({ role: 'listbox' })
    )
);
