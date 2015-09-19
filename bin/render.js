var fs = require('fs'),
    vm = require('vm'),
    _ = require('lodash'),
    marked = require('marked'),
    mkdirp = require('mkdirp'),
    config = require('../content/config.js'),
    pages = require('../content/pages.js'),
    bemhtml = require('../desktop.bundles/index/index.bemhtml.js').BEMHTML,
    bemtree = require('../desktop.bundles/index/index.bemtree.js').BEMTREE;

function md(vinyl) {
    if (!vinyl || !vinyl.contents) return;

    marked(vinyl.contents.toString('utf-8'), function(err, html) {
        fs.writeFileSync(vinyl.path.replace(/md$/, 'html'), html);
    });
}

function bemjson(vinyl) {
    if (!vinyl || !vinyl.contents) return;

    fs.writeFileSync(
        vinyl.path.replace(/bemjson\.js$/, 'html'),
        bemhtml.apply(vm.runInNewContext(vinyl.contents.toString('utf-8')))
    );
}

function html(vinyl) {
    if (!vinyl || !vinyl.contents) return;

    var path = vinyl.path,
        re = new RegExp('(.*)\/' + config.rawFolder + '(.*)index\.(.*)\.html$'),
        lang = path.replace(re, '$3'),
        pageUrl = path.replace(re, '$2'),
        page = _.where(pages[lang], { url: pageUrl })[0];

    page.content = vinyl.contents.toString('utf-8');

    bemtree.apply({
        block: 'root',
        data: {
            page: page,
            pages: pages[lang],
            lang: lang
        }
    }).then(function(bemjson) {
        bemjson.block = 'page';

        var dirName = config.outputFolder + lang + pageUrl;

        mkdirp.sync(dirName);
        fs.writeFileSync(dirName + '/index.html', bemhtml.apply(bemjson));
    }).fail(function(e){
        console.log('Error:', e);
    });
}

module.exports = { md: md, bemjson: bemjson, html: html };
