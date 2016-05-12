block('promo-header')(
    tag()('div'), // TODO: may be <header> ?
    elem('header').tag()('h1'),
    elem('title').tag()('span'),
    elem('subtitle').tag()('span'),
    elem('text').tag()('p'),
    elem('link').tag()('a'),
    mix()({ block: 'page-bg' })
);
