const Q = require('q');
const gorshochek = require('../index');
const token = process.env.TOKEN;

const model = gorshochek.createModel();
const tasks = gorshochek.tasks;

// TODO: run everything possible in parallel

Q()
    .then(tasks.core.mergeModels(model, {modelPath: './examples/model.ru.json'}))
    .then(tasks.meta.generateTagPages(model))
    .then(tasks.docs.loadSourceFromGithub(model, {token}))
    .then(tasks.docs.loadSourceFromLocal(model))
    .then(tasks.docs.transformMdToHtml(model))
    .then(tasks.page.createHeaderTitle(model))
    .then(tasks.page.createHeaderMeta(model))
    .then(tasks.page.createBreadcrumbs(model))
    .then(tasks.override.overrideDocLinks(model))
    .then(tasks.override.processDocImages(model))
    .then(tasks.sitemap.createSitemapXML(model, {host: 'https://ru.bem.info'}))
    .then(tasks.core.saveModel(model))
    .then(tasks.core.rsync(model, {
        dest: './data',
        exclude: ['*.meta.json', 'model.json', '*.md']
    }));
