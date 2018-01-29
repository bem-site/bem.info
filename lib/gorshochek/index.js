const Model = require('./src/model');

module.exports = {
    /**
     * Creates empty model instance
     * @returns {Model}
     */
    createModel: () => {
        return new Model();
    },
    tasks: {
        core: {
            importModel: require('./src/tasks/core/import-model'),
            mergeModels: require('./src/tasks/core/merge-models'),
            saveModel: require('./src/tasks/core/save-model'),
            rsync: require('./src/tasks/core/rsync')
        },
        docs: {
            loadSourceFromGithub: require('./src/tasks/docs/load-from-github'),
            loadSourceFromLocal: require('./src/tasks/docs/load-from-file'),
            loadSourceFromHttp: require('./src/tasks/docs/load-from-http'),
            transformMdToHtml: require('./src/tasks/docs/transform-md-html')
        },
        meta: {
            generateTagPages: require('./src/tasks/meta/tags')
        },
        page: {
            createHeaderTitle: require('./src/tasks/page/header-title'),
            createHeaderMeta: require('./src/tasks/page/header-meta'),
            createBreadcrumbs: require('./src/tasks/page/breadcrumbs'),
            createSearchMeta: require('./src/tasks/page/search-meta')
        },
        override: {
            overrideDocLinks: require('./src/tasks/override/override-doc-links'),
            processDocImages: require('./src/tasks/override/process-doc-images')
        },
        sitemap: {
            createSitemapXML: require('./src/tasks/sitemap/sitemap-xml')
        },
        template: {
            applyBEM: require('./src/tasks/template/full-bem')
        }
    }
};
