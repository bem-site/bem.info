block('search')(
    addJs()(true),
    elem('submit')(
        tag()('button'),
        addAttrs()({ type: 'submit' })
    )
);
