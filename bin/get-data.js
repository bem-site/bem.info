var fs = require('fs'),
    mkdirp = require('mkdirp'),
    rimraf = require('rimraf'),
    request = require('request'),
    pages = require('../content/pages.js'),
    config = require('../content/config.js'),
    rawFolder = config.rawFolder,
    langs = config.langs;

function getData() {
    var langs = config.langs;

    rimraf.sync(rawFolder);
    mkdirp.sync(rawFolder);

    langs.forEach(function(lang) {
        pages[lang].forEach(function(page){
            getDataPage(lang, page)
        });
    });    
}

function getDataPage(lang, page) {
    var source = page.source,
        isBemJson = /(.*)\.bemjson\.js$/.test(source),
        ext = isBemJson ? '.bemjson.js' : '.md',

        dirName = rawFolder + page.url,
        fileName = dirName + 'index.' + lang + ext;

    mkdirp.sync(dirName);
    
    var writeStream = fs.createWriteStream(fileName);

    if (/^http/.test(source)) {
        request(source).pipe(writeStream);
    } else if (/^\.\/(.*)/.test(source)) {
        // read .md from local FS
        fs.createReadStream(source).pipe(writeStream);
    } else {
        // store inlined content
        writeStream.end(source);
    }
}

module.exports = { getData: getData, getDataPage: getDataPage };
