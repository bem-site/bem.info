'use strict';

var path = require('path');
var gorshochek = require('./gorshochek');

var params = process.env;
var model = gorshochek.createModel();

Promise.resolve(model)
    .then(gorshochek.tasks.core.importModel(model, {
        modelPath: path.join(params.source, 'data.json')
    }))
    .then(gorshochek.tasks.template.applyBEM(model, {
        bemtree: params.bemtree,
        bemhtml: params.bemhtml,
        source: params.source,
        bundle: params.bundle,
        static: params.static,
        destination: params.destination,
        destinationRoot: params.destinationRoot,
        concurrency: 50,
        ctx: {
            block: 'root',
            data: {
                langs: params.langs.split(','),
                lang: params.lang,
                root: '/bem.info/' + params.lang
            }
        }
    }))
    .then(
        () => {},
        error => console.error(error.stack)
    );
