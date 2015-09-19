// этот скрипт по смыслу должен работать в 2 режимах:
    // как генератор статики
    // как сервер, который делает apply() в рантайме

// 7. подменяем ссылки на правильные

var fs = require('fs'),
    vow = require('../libs/bem-core/common.blocks/vow/vow.vanilla.js'),
    BEMHTML = require('../desktop.bundles/index/index.bemhtml.js').BEMHTML,
    BEMTREE = require('../desktop.bundles/index/index.bemtree.js').BEMTREE,
    mkdirp = require('mkdirp'),
    rimraf = require('rimraf'),
    http = require('http'),

    config = require('../content/config.js'),
    langs = config.langs,
    rawFolder = config.rawFolder,
    outputFolder = config.outputFolder;

var sites = require('../content/sites.js'),
    pages = require('../content/pages.js');

sites.forEach(function(site) {
    var rootUrl = site.rootUrl;

    langs.forEach(function(lang) {
        // make output content
        pages[lang].forEach(function(page) {
            if (!new RegExp('^' + rootUrl).test(page.url)) return;

            if (page.type === 'index') {
                return makeList(page, page.url, rootUrl);
            }

            var content = page.source;
            if (!content) {
                console.log('No content!');
                return;
            }

            var fileName = page.url === '/' ? 'index.' + lang + '.html' :
                page.url.replace(/^\/(.*)\/$/g, '$1.' + lang + '.html').replace(/\//g, '-');

            writeResult(page, fs.readFileSync(rawFolder + fileName), lang, rootUrl);
        });
    });
});

function writeResult(page, content, lang, rootUrl) {
    BEMTREE.apply({
        block: 'root',
        data: {
            page: page,
            rootUrl: rootUrl,
            pages: pages[lang],
            lang: lang,
            content: content.toString('utf8')
        }
    }).then(function(bemjson) {

        bemjson.block = 'page';

        var dirName = outputFolder + lang + page.url;

        mkdirp.sync(dirName);
        fs.writeFileSync(dirName + '/index.html', BEMHTML.apply(bemjson));
    });
}

function makeList(page, parent, rootUrl) {
    var children = pages.filter(function(item) {
        return item.url !== parent && item.url.indexOf(parent) === 0;
    });

    langs.forEach(function(lang) {
        var indexBemjson = children.map(function(child) {
            return {
                block: 'snippet',
                content: [
                    {
                        block: 'link',
                        url: child.url,
                        content: child[lang] ? child[lang].title : child.title
                    }
                ]
            };
        });

        writeResult(page, BEMHTML.apply(indexBemjson), lang, rootUrl);
    });
}

