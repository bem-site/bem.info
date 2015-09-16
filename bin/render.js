var fs = require('fs'),
    vm = require('vm'),
    glob = require('glob'),
    marked = require('marked'),
    bemhtml = require('../desktop.bundles/index/index.bemhtml.js').BEMHTML,
    config = require('../content/config.js'),
    rawFolder = config.rawFolder;

glob(rawFolder + '/*.{md,bemjson.js}', function(err, files) {
    if (err) return;

    files.forEach(function(file) {
        var content = fs.readFileSync(file, 'utf8');

        if (/md$/.test(file)) {
            marked(content, function(err, html) {
                if (err) return;

                fs.writeFileSync(file.replace(/md$/, 'html'), html);
            });
        } else {
            fs.writeFileSync(
                file.replace(/bemjson\.js$/, 'html'),
                bemhtml.apply(vm.runInNewContext(content))
            );
        }
    });
});
