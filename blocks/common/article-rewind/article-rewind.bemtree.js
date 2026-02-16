block('article-rewind').content()(function() {
    var data = this.data,
        page = data.page,
        pages = data.pages,
        pageIndex = pages.indexOf(page),
        prevPage,
        nextPage;

    if (data.page.prev !== false) {
        if (data.page.prev === undefined) {
            prevPage = pages[pageIndex - 1];
        } else {
            prevPage = pages.find(function(p) { return p.url === data.page.prev; });
        }
    }

    if (data.page.next !== false) {
        if (data.page.next === undefined) {
            nextPage = pages[pageIndex + 1];
        } else {
            nextPage = pages.find(function(p) { return p.url === data.page.next; });
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
