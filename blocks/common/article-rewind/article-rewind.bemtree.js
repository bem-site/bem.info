var _ = require('lodash');

block('article-rewind').content()(function() {
    var data = this.data,
        page = data.page,
        pages = data.pages,
        pageIndex = _.indexOf(pages, page),
        prevPage,
        nextPage;

    if (data.page.prev !== false) {
        if (data.page.prev === undefined) {
            prevPage = pages[pageIndex - 1];
        } else {
            prevPage = _.find(pages, { url: data.page.prev });
        }
    }

    if (data.page.next !== false) {
        if (data.page.next === undefined) {
            nextPage = pages[pageIndex + 1];
        } else {
            nextPage = _.find(pages, { url: data.page.next });
        }
    }

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
