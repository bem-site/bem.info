const fs = require('fs');
const path = require('path');

function readJson(filePath) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function readJsonIfExists(filePath) {
    return fs.existsSync(filePath) ? readJson(filePath) : undefined;
}

function readTextIfExists(filePath) {
    return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : undefined;
}

function rewriteSourcePath(item, githubPath) {
    if (!githubPath) {
        return item;
    }

    return Object.assign({}, item, {
        path: githubPath + item.path
    });
}

function getGitHubPath(github, version) {
    if (!github || !github.repo) {
        return '';
    }

    return ['https:/', github.url, github.user, github.repo, 'blob', 'v' + version, ''].join('/');
}

module.exports = function prepareLibraryData(pathToData, config) {
    config = config || {};

    const rawData = readJson(path.resolve(pathToData, 'data.json'));
    const libConfig = config.libs && config.libs[rawData.library] || {};
    const githubPath = getGitHubPath(libConfig.github, rawData.version);
    const sets = rawData.sets;
    const outputFolder = path.resolve(config.view && config.view.outputFolder || 'output');
    const data = Object.assign({
        config: libConfig,
        libraryName: rawData.library + (rawData.version ? '@' + rawData.version : ''),
        pathToData,
        outputFolder,
        outputLibFolder: outputFolder,
        langs: libConfig.langs || config.langs || []
    }, rawData);

    if (!data.langs.length) {
        data.langs.push('');
    }

    data.setsList = Object.keys(sets).sort().map(setName => ({
        name: setName,
        blocks: Object.keys(sets[setName]).sort()
    }));

    return data.setsList.reduce((result, set) => {
        const blocks = sets[set.name];
        let blocksList = set.blocks;

        if (libConfig.includeBlocks) {
            blocksList = blocksList.filter(block => libConfig.includeBlocks.includes(block));
        }

        if (libConfig.excludeBlocks) {
            blocksList = blocksList.filter(block => !libConfig.excludeBlocks.includes(block));
        }

        result.sets[set.name] = blocksList.map(block => {
            const blockData = blocks[block];
            const metaPath = blockData['meta.json'];
            const jsdocPath = blockData['jsdoc.json'];
            const examplesFilesPath = blockData['examples-files.json'];
            const sourceFilesPath = blockData['source-files.json'];
            const meta = metaPath && readJsonIfExists(path.resolve(pathToData, metaPath)) || {};
            const examples = meta.examples || [];
            const content = {};
            let jsdoc;
            let examplesSources;
            let blockSources;

            try {
                jsdoc = jsdocPath && readJsonIfExists(path.resolve(pathToData, jsdocPath));
            } catch (error) {
                console.error('Error: Failed to evaluate', jsdocPath, error);
            }

            if (examplesFilesPath) {
                examplesSources = readJsonIfExists(path.resolve(pathToData, examplesFilesPath));
                if (examplesSources) {
                    Object.keys(examplesSources).forEach(bundleName => {
                        examplesSources[bundleName] = examplesSources[bundleName]
                            .map(item => rewriteSourcePath(item, githubPath));
                    });
                }
            }

            if (sourceFilesPath) {
                const sources = readJsonIfExists(path.resolve(pathToData, sourceFilesPath));
                blockSources = sources && sources.map(item => rewriteSourcePath(item, githubPath));
            }

            result.langs.forEach(lang => {
                const docPath = blockData[(lang ? lang + '.' : '') + 'doc.html'];
                content[lang] = docPath && readTextIfExists(path.join(pathToData, docPath));
            });

            examples.forEach(example => {
                example.pathToHtml = path.resolve(path.join(
                    pathToData,
                    set.name + '.html',
                    block,
                    example.name
                ));
            });

            return {
                blockName: block,
                setsList: data.setsList,
                jsdoc,
                inlineExamples: examples.filter(example => example.source),
                examples: examples.filter(example => !example.source),
                examplesSources,
                blockSources,
                content
            };
        });

        return result;
    }, data);
};
