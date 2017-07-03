var _ = require('lodash');

block('article-rewind').content()(function() {
    var data = this.data,
        page = data.page,
        pages = data.pages,
        pageIndex = _.indexOf(pages, page),
        prevPage = data.page.prev !== false && pages[pageIndex - 1],
        nextPage = data.page.next !== false && pages[pageIndex + 1];

    return [
        prevPage && {
            elem: 'prev',
            content: {
                elem: 'prev-link',
                url: data.root + prevPage.url,
                content: prevPage.title
            }
        },
        prevPage && nextPage && ' ',
        nextPage && {
            elem: 'next',
            content: [
                apply('next-text'),
                {
                    elem: 'next-link',
                    url: data.root + nextPage.url,
                    content: nextPage.title
                }
            ]
        }
    ];
});
