block('search')(
    js()(true),

    elem('open').content()(function() {
        return require('fs').readFileSync('blocks/common/search/search__submit.svg', 'utf8');
    }),
    elem('close').content()(function() {
        return require('fs').readFileSync('blocks/common/search/search__close.svg', 'utf8');
    })
);
