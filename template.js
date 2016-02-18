var path = require('path'),
    Q = require('q'),
    gorshochek = require('gorshochek');

var params = process.env;
var model = gorshochek.createModel();

Q(model)
    .then(gorshochek.tasks.core.importModel(model, {
        modelPath: path.join(params.source, 'data.json')
    }))
    .then(gorshochek.tasks.template.applyBEM(model, {
        bemtree: params.bemtree,
        bemhtml: params.bemhtml,
        source: params.source,
        destination: params.destination,
        concurrency: 50,
        ctx: {
            block: 'root',
            data: {
                langs: params.langs.split(','),
                lang: params.lang
            }
        }
    }))
    .done(
        () => console.log('Pages were successfully compiled to: ', params.destination),
        error => console.error(error.stack)
    );
