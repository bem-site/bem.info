block('blocks').content()(function() {
    var path = require('path'),
        data = this.data,
        page = data.page;

    // this page will be redirected to current library version
    // e.g. /platform/libs/bem-components/ -> /platform/libs/bem-components/5.0.0/
    if (!page.version) {
        return;
    }

    // FIXME: адовый костыль
    var outputLibFolder = path.join('output', 'bem.info', page.library);

    return [
        {
            elem: 'side-menu',
            content: {
                block: 'nav',
                items: {
                    block: 'block-list',
                    mix: { block: 'blocks', elem: 'list' }
                }
            }
        },
        page.block ? {
            block: 'block-info',
            mix: [
                { block: 'blocks', elem: 'data' },
                { block: 'article-wrap' }
            ],
            data: Object.assign({
                    lang: data.lang,
                    examplesUrlPrefix: '/_st_/' + page.library + '-examples/' + page.version,
                    outputLibFolder: outputLibFolder,
                    setName: page.setName
                }, page.block)
        } : {
            block: 'article-wrap'
        }
    ]
});
