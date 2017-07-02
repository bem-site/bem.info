const path = require('path');
const mkdirp = require('mkdirp');
const prepareData = require('../node_modules/bem-lib-site-view/lib/prepare-data');
const bemConfig = require('bem-config')();
const config = bemConfig.moduleSync('bem-lib-site');

module.exports = sourcePage => {
    const pages = [];

    // FIXME: полная упячка с hardcode путей
    const pathToSite = path.join('.cache', 'output', 'bem.info');

    const versions = sourcePage.versions;
    delete sourcePage.versions;

    // add redirect to current library version
    var currentVersion = sourcePage.current;
    delete sourcePage.current;
    pages.push({
        url: sourcePage.url,
        now: sourcePage.url + currentVersion + '/',
        code: 302
    });

    // add dumb library root page for correct breadcrumbs generation
    sourcePage.setsList = [{blocks: []}];
    pages.push(Object.assign({}, sourcePage));

    versions.forEach(pathToLibData => {
        const stubPage = Object.assign({}, sourcePage);
        const data = prepareData(pathToLibData, config);

        config.langs.forEach(lang =>
            mkdirp.sync(path.join(pathToSite, lang)));

        function addPage(urlPostfix, title, source, block) {
            const page = Object.assign({}, stubPage);

            page.url += urlPostfix;
            page.title = title;
            page.setsList = data.setsList;
            page.block = block;

            if (typeof source === 'string') {
                page.source = resolve(source);
            } else if (typeof source === 'object') {
                page.source = Object.keys(source).reduce((acc, lang) => {
                    acc[lang === '' ? 'en' : lang] = resolve(source[lang]);
                    return acc;
                }, {});
            }

            pages.push(page);
        }

        function resolve(file) {
            return file && path.resolve(pathToLibData, file);
        }

        stubPage.library = data.library;
        stubPage.version = data.version;
        stubPage.url += data.version + '/';
        stubPage.site += data.version + '/';
        stubPage.title = data.version;

        const docs = data.docs;
        Object.keys(docs).forEach(doc => {
            if (doc === 'readme') {
                stubPage.libRoot = '';
                addPage('', stubPage.title, docs[doc]);
            }
            else {
                /* TODO: i18n */
                var docTitle = doc.charAt(0).toUpperCase() + doc.slice(1);

                stubPage.libRoot = '../';
                addPage(doc + '/', docTitle, docs[doc]);
            }
        });

        var url = stubPage.url;
        delete stubPage.libRoot;
        data.setsList.forEach(set => {
            var setName = set.name,
                setUrl = url + setName + '/';

            // add dumb set root page
            stubPage.nav = false;
            stubPage.url = setUrl;
            addPage('', setName, '');

            // add redirect from set to library root
            pages.push({
                url: setUrl,
                now: url,
                code: 302
            });

            stubPage.setName = setName;

            data.sets[setName].forEach(block => {
                const blockName = block.blockName;

                addPage(blockName + '/', blockName, block.source, block);
            });
        });
    });

    return pages;
};
