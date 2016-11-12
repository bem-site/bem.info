const path = require('path');
const cpy = require('cpy');
const prepareData = require('../libs/bem-lib-site-view/lib/prepare-data');
const config = require('bem-config')();

// FIXME: use actual langs, move it to config
config.langs = ['en', 'ru', 'uk'];

module.exports = model => {
    const pages = [];

    return Promise.all(() => {
        const promises = [];

        model.forEach(sourcePage => {
            if (sourcePage.type !== 'lib') {
                pages.push(Object.assign({}, sourcePage));
                return;
            }

            const versions = sourcePage.versions;
            delete sourcePage.versions;

            // add library root page
            sourcePage.setsList = [{blocks: []}];
            pages.push(Object.assign({}, sourcePage));

            versions.forEach(pathToLibData => {
                const stubPage = Object.assign({}, sourcePage);
                const data = prepareData(pathToLibData, config);

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
                // stubPage.tags.push();

                const docs = data.docs;
                Object.keys(docs).forEach(doc => {
                    if (doc === 'readme') {
                        stubPage.libRoot = '';
                        addPage('', stubPage.title, docs[doc])
                    }
                    else {
                        stubPage.libRoot = '../';
                        addPage(doc + '/', doc /* TODO: i18n */, docs[doc]);
                    }
                });

                var url = stubPage.url;
                delete stubPage.libRoot;
                data.setsList.forEach(function(set) {
                    var setName = set.name;

                    stubPage.nav = false;
                    stubPage.url = url + setName + '/';
                    addPage('', setName, '');

                    stubPage.setName = setName;

                    config.langs.forEach(lang => {
                        // FIXME: полная упячка с hardcode путей
                        var outputLibFolder = path.join('.cache', 'output', 'bem.info',
                            lang, 'platform', 'libs', data.library, data.version);

                        stubPage.lang = lang;

                        data.sets[setName].forEach(block => {
                            addPage(block.blockName + '/', block.blockName, block.source, block);

                            var blockName = block.blockName,
                                // TODO: надо ли копировать прям все файлы из примера?
                                examplesSrc = path.join(data.pathToData, setName + '.examples', blockName, '*', '*'),
                                examplesDest = path.join(outputLibFolder, setName, blockName);

                            block.examples.forEach(function(example) {
                                example.path = path.join(outputLibFolder,
                                    setName, blockName, example.path.split('/').pop());
                            });

                            promises.push(cpy([examplesSrc], examplesDest));
                        });
                    });
                });
            });
        });

        return promises;
    }()).then(() => Promise.resolve(pages));
};
