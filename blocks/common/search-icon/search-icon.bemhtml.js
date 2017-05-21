block('search-icon').content()(function() {
    return {
        html: require('fs').readFileSync('blocks/common/search-icon/search-icon.svg', 'utf8')
    };
});
