block('article-rewind')(
    tag()('ul'),

    // TODO: use elems('prev', 'next'), see https://github.com/bem/bem-xjst/issues/184
    elem('prev').tag()('li'),
    elem('next').tag()('li'),

    // TODO: use elems('prev-link', 'next-link'), see https://github.com/bem/bem-xjst/issues/184
    elem('*').match(function() { return ['prev-link', 'next-link'].indexOf(this.elem) !== -1 })(
        tag()('a'),
        attrs()(function() { return { href: this.ctx.url }})
    )//,

    // elem('prev').content()('Предыдущая страница'), //TODO: i18n
    // elem('next').content()('Следующая страница') //TODO: i18n
);
