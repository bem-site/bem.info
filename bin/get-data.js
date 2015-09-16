var fs = require('fs'),
    request = require('request'),
    model = require('../content/model.js'),
    config = require('../content/config.js'),
    rawFolder = config.rawFolder,
    langs = config.langs;

langs.forEach(function(lang) {
    model[lang].forEach(function(page) {
        var source = page.source,
            isBemJson = /(.*)\.bemjson\.js$/.test(source),
            ext = isBemJson ? '.bemjson.js' : '.md'
            fileName = page.url === '/' ? 'index.' + lang + ext :
                page.url.replace(/^\/(.*)\/$/g, '$1.' + lang + ext).replace(/\//g, '-'),
            writeStream = fs.createWriteStream(rawFolder + fileName);

        if (/^http/.test(source)) {
            request(source).pipe(writeStream);
        } else if (/^\.\/(.*)/.test(source)) {
            // read .md from local FS
            fs.createReadStream(source).pipe(writeStream);
        } else {
            // store inlined content
            writeStream.end(source);
        }
    });
});
