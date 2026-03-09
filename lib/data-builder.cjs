'use strict';

const bemhtml = require('bem-xjst').bemhtml;
const gorshochek = require('./gorshochek');
const articleBemhtmlTemplates = require('./article.bemhtml.cjs');

const model = gorshochek.createModel();
const tasks = gorshochek.tasks;
const params = process.env;
let githubHosts;

if (params.githubHosts) {
    githubHosts = params.githubHosts.split(',').map(url => ({
        url: url,
        host: 'api.' + url
    }));
}

Promise.resolve()
    .then(tasks.core.mergeModels(model, {modelPath: params.modelPath}))
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
            if (/^\/technologies\/classic\/(bem-xjst|bemjson)/.test(page.url)) {
                return html.replace(/<hr>\s*<p>(Читать далее|Read next).*?<\/p>/, '');
            }

            if (/^\/(toolbox|libraries)/.test(page.url)) {
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
    .then(() => {
        // Successfully built
    }, error => {
        console.error(error.stack);
        process.exit(1);
    });
