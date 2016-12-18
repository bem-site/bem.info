const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const prepareData = require('../libs/bem-lib-site-view/lib/prepare-data');
const bemConfig = require('bem-config')();
const config = bemConfig.moduleSync('bem-lib-site');

module.exports = model => {
    const pages = [];

    const copyExamplesScript = path.join('.cache', 'copy-examples.sh');

    if (fs.existsSync(copyExamplesScript)) {
        fs.unlinkSync(copyExamplesScript);
    }

    model.forEach(sourcePage => {
        if (sourcePage.type !== 'lib') {
            pages.push(Object.assign({}, sourcePage));
            return;
        }

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

            // create symlink to library examples in each lang
            const cwd = process.cwd();
            config.langs.forEach(lang => {
                const pathToLangSite = path.join(pathToSite, lang);

                mkdirp.sync(pathToLangSite);
                process.chdir(pathToLangSite);
                try {
                    fs.symlinkSync(path.join('..', data.library), data.library);
                } catch (err) {
                    if (err.code !== 'EEXIST') {
                        throw err;
                    }
                }
                process.chdir(cwd)
            });

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
            data.setsList.forEach(function(set) {
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
                    const examplesDest = path.join(pathToSite, data.library, setName);

                    mkdirp.sync(examplesDest);

                    block.inlineExamples.forEach(example => {
                        const exampleName = example.name;
                        const exampleSrc = path.join(data.pathToData,
                                setName + '.examples', blockName, exampleName,
                                exampleName + '.{html,css,js,deps.js,bemjson.js,bemhtml.js}');

                        example.path = path.join(examplesDest, exampleName);

                        fs.appendFileSync(copyExamplesScript,
                            'cp ' + exampleSrc + ' ' + examplesDest + '\n');
                    });

                    config.langs.forEach(lang => {
                        block.examples.forEach(example => {
                            const exampleName = example.path.split('/').pop();
                            const exampleSrc = path.join(data.pathToData,
                                    setName + '.examples', blockName, exampleName,
                                    exampleName + '.{html,css,js,deps.js,bemjson.js,bemhtml.js}');
                            const pathToBlock = path.join('output', 'bem.info', lang,
                                'platform', 'libs', data.library, data.version,
                                setName, blockName);
                            const examplesDest2 = path.join('.cache', pathToBlock);

                            example.path = path.join(process.cwd(), pathToBlock, exampleName);

                            fs.appendFileSync(copyExamplesScript,
                                'mkdir -p ' + examplesDest2 + '\n' +
                                'cp ' + exampleSrc + ' ' + examplesDest2 + '\n');
                        });
                    });

                    addPage(blockName + '/', blockName, block.source, block);
                });
            });
        });
    });

    fs.chmodSync(copyExamplesScript, 0o555);

    return pages;
};
