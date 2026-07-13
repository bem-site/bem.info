'use strict';

const bemhtml = require('bem-xjst').bemhtml;
const gorshochek = require('gorshochek');
const baseUtil = require('gorshochek/src/util');
const articleBemhtmlTemplates = require('./article.bemhtml.cjs');
const stripFrontmatter = require('./strip-frontmatter.cjs');
const validateContent = require('./validate-content.cjs');

const model = gorshochek.createModel();
const tasks = gorshochek.tasks;
const params = process.env;
let githubHosts;

// Lowercase fragments of internal links so they match heading ids
// (github-slugger always lowercases). Runs AFTER overrideDocLinks, which
// can rewrite external URLs (e.g. github.com README anchors) to internal paths.
function lowercaseInternalAnchors() {
    function isInternal(base) {
        return base === '' || base.charAt(0) === '/' ||
            /^https?:\/\/[^/]*bem\.info/.test(base);
    }

    function process(html) {
        return html.replace(/href="([^"]+)"/g, (m, href) => {
            const hashIdx = href.indexOf('#');
            if (hashIdx === -1) return m;
            const base = href.slice(0, hashIdx);
            const frag = href.slice(hashIdx + 1);
            if (!frag || !isInternal(base)) return m;
            let lowered;
            try {
                lowered = decodeURIComponent(frag).toLowerCase();
            } catch {
                lowered = frag.toLowerCase();
            }
            return `href="${base}#${lowered}"`;
        });
    }

    return () => Promise.all(model.getPages()
        .filter(p => p.contentFile && p.contentFile.includes('.html'))
        .map(p => baseUtil.readFileFromCache(p.contentFile)
            .then(process)
            .then(html => baseUtil.writeFileToCache(p.contentFile, html))))
        .then(() => model);
}

// Docusaurus-доки несут YAML-frontmatter — срезаем ДО transformMdToBemjson
function stripDocusaurusFrontmatter() {
    return () => Promise.all(model.getPages()
        .filter(p => p.contentFile && p.contentFile.endsWith('.md'))
        .map(p => baseUtil.readFileFromCache(p.contentFile)
            .then(md => {
                const stripped = stripFrontmatter(md);
                return stripped === md ? null : baseUtil.writeFileToCache(p.contentFile, stripped);
            })))
        .then(() => model);
}

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
    .then(stripDocusaurusFrontmatter())
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
    .then(lowercaseInternalAnchors())
    .then(tasks.override.processDocImages(model, {imageFolder: '/', root: params.root}))
    .then(tasks.sitemap.createSitemapXML(model, {host: params.sitemapHost || params.host}))
    .then(() => {
        const missing = validateContent(model.getPages());
        if (missing.length) {
            console.error(`Content failed to load for ${missing.length} page(s):\n` +
                missing.map(u => '  ' + u).join('\n'));
            process.exit(1);
        }
        return model;
    })
    .then(tasks.core.saveModel(model))
    .then(() => {
        // Successfully built
    }, error => {
        console.error(error.stack);
        process.exit(1);
    });
