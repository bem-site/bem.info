'use strict';

const Q = require('q');
const bemhtml = require('bem-xjst').bemhtml;
const gorshochek = require('./gorshochek');
const articleBemhtmlTemplates = require('./article.bemhtml.js');

const model = gorshochek.createModel();
const tasks = gorshochek.tasks;
const params = process.env;
let githubHosts;

if (params.githubHosts) {
    // converting github.domen.com,github.domen2.com
    // into [{ url: 'github.domen.com', host: 'api.github.domen.com' }, { url: 'github.domen2.com', host: 'api.github.domen2.com' }]
    githubHosts = params.githubHosts.split(',').map(url => ({
        url: url,
        host: 'api.' + url
    }));
}

// console.log('Start build data with params:');
// console.log('modelPath: ', params.modelPath);
// console.log('token: ', params.token);
// console.log('host: ', params.host);
// console.log('dest: ', params.dest);

Q()
    .then(tasks.core.mergeModels(model, {modelPath: params.modelPath}))
    // .then(tasks.meta.generateTagPages(model)) // Включить когда в модели появятся теги
    .then(tasks.docs.loadSourceFromGithub(model, {
        token: params.token,
        githubHosts
    }))
    .then(tasks.docs.loadSourceFromLocal(model))
    .then(tasks.docs.transformMdToBemjson(model, {
        mdToBemjson: {
            augment: {
                scope: 'article'
            }
        }
    }))
    .then(tasks.docs.transformBemjsonToHtml(model, {
        templates: bemhtml.compile(articleBemhtmlTemplates, { escapeContent: false }),
        processHTML: function(page, html) {
            // удаляем "Читать далее" в bem-xjst
            if (/^\/platform\/(bem-xjst|bemjson)/.test(page.url)) {
                return html.replace(/<hr>\s*<p>(Читать далее|Read next).*?<\/p>/, '');
            }

            // удаляем бейджи из пакетов
            if (/^\/(toolbox|platform\/libs)/.test(page.url)) {
                return html.replace(/<p><a.*?><img.*?><\/a>\s*<a.*?><img.*?><\/a>(.|\r|\n)*?<\/p>/, '');
            }

            return html;
        }
    }))
    .then(tasks.page.createHeaderTitle(model))
    .then(tasks.page.createHeaderMeta(model))
    .then(tasks.page.createBreadcrumbs(model))
    .then(tasks.override.overrideDocLinks(model, {host: params.host, root: params.root}))
    .then(tasks.override.processDocImages(model, {imageFolder: '/', root: params.root}))
    .then(tasks.sitemap.createSitemapXML(model, {host: params.host}))
    .then(tasks.core.saveModel(model))
    .done(() => {
        // console.info('Successfully built: %s to %s',  params.modelPath, params.dest);
    }, error => {
        console.error(error.stack);
    });
