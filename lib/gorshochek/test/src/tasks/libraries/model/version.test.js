var _ = require('lodash'),
    Q = require('q'),
    Version = require('../../../../../src/tasks/libraries/model/version'),
    Document = require('../../../../../src/tasks/libraries/model/document'),
    Level = require('../../../../../src/tasks/libraries/model/level');

describe('task/libraries/model/Version', () => {
    var sandbox = sinon.sandbox.create(),
        version;

    beforeEach(() => {
        version = new Version('/libraries', '/base-path', 'some-lib', 'v1', 'en');
        sandbox.stub(version, 'saveFile').returns(Q());
        sandbox.stub(Document.prototype, 'processData').returns(Q({name: 'readme'}));
        sandbox.stub(Level.prototype, 'processData').returns(Q({name: 'desktop'}));
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should set valid value for "baseUrl" property after initialization', () => {
        version.baseUrl.should.be.equal('/libraries');
    });

    it('should set valid value for "basePath" property after initialization', () => {
        version.basePath.should.be.equal('/base-path');
    });

    it('should set valid value for "languages" property after initialization', () => {
        version.language.should.be.eql('en');
    });

    it('should set valid value for "lib" property after initialization', () => {
        version.lib.should.be.equal('some-lib');
    });

    it('should set valid value for "version" property after initialization', () => {
        version.version.should.be.equal('v1');
    });

    describe('processData', () => {
        var versionData = {
            ref: 'v1',
            url: '/base-library-url',
            deps: {},
            hasIssues: true
        };

        it('should set valid value for "url" property', () => {
            return version.processData(versionData).then(() => {
                version.getData().url.should.be.equal('/libraries/some-lib/v1');
            });
        });

        it('should set valid value for "aliases" property', () => {
            return version.processData(versionData).then(() => {
                version.getData().aliases.should.be.instanceof(Array).and.be.empty;
            });
        });

        it('should set valid value for "view" property', () => {
            return version.processData(versionData).then(() => {
                version.getData().view.should.be.equal('post');
            });
        });

        it('should set valid value for "lib" property', () => {
            return version.processData(versionData).then(() => {
                version.getData().lib.should.be.equal('some-lib');
            });
        });

        it('should set valid value for "version" property', () => {
            return version.processData(versionData).then(() => {
                version.getData().version.should.be.equal('v1');
            });
        });

        it('should set valid value for "deps" property', () => {
            return version.processData(versionData).then(() => {
                version.getData().deps.should.be.empty;
            });
        });

        it('should set valid value for "title" property', () => {
            return version.processData(versionData).then(() => {
                version.getData().title.should.be.equal('v1');
            });
        });

        it('should set valid value for "published" property', () => {
            return version.processData(versionData).then(() => {
                version.getData().published.should.be.true;
            });
        });

        it('should set valid value for "updateDate" property', () => {
            return version.processData(versionData).then(() => {
                version.getData().updateDate.should.be.above(+(new Date()) - 100);
            });
        });

        it('should set valid value for "hasIssues" property', () => {
            return version.processData(versionData).then(() => {
                version.getData().hasIssues.should.be.true;
            });
        });

        // TODO fix this test later
        /*
        it('should set valid value for "sourceUrl" property', () => {
            return version.processData(versionData).then(() => {
                version.getData().sourceUrl.should.equal('/base-library-url/tree/v1');
            });
        });
         */

        it('should set null value for "source" property if version data has not "url" property', () => {
            return version.processData(_.omit(versionData, 'url')).then(() => {
                should.not.exist(version.getData().source);
            });
        });

        it('should save file with content of library README documentation (old version data format)', () => {
            var data = _.extend({readme: {content: {en: 'Hello World'}}}, versionData);
            return version.processData(data).then(() => {
                version.saveFile.should.be.calledTwice;
                version.saveFile.firstCall.should.be.calledWith('/base-path/some-lib/v1/index.html')
            });
        });

        it('should save file with content of library README documentation (new version data format)', () => {
            var data = _.extend({docs: {readme: {content: {en: 'Hello World'}}}}, versionData);
            return version.processData(data).then(() => {
                version.saveFile.should.be.calledTwice;
                version.saveFile.firstCall.should.be.calledWith('/base-path/some-lib/v1/index.html')
            });
        });

        it('should set valid value for "contentFile" property after saving doc file', () => {
            var data = _.extend({docs: {readme: {content: {en: 'Hello World'}}}}, versionData);
            return version.processData(data).then(() => {
                version.getData().contentFile.should.be.equal('/libraries/some-lib/v1/index.html');
            });
        });

        it('should add nested document process data', () => {
            var data = _.extend({docs: {changelog: {content: {en: 'Hello World'}}}}, versionData);
            return version.processData(data).then(() => {
                var expectedPath = '/base-path/some-lib/v1/cache.json',
                    expectedContent = [version.getData(), {name: 'readme'}];
                version.saveFile.should.be.calledWith(expectedPath, expectedContent, true);
            });
        });

        it('should add nested level processed data', () => {
            var data = _.extend({levels: [{name: 'desktop'}]}, versionData);
            return version.processData(data).then(() => {
                var expectedPath = '/base-path/some-lib/v1/cache.json',
                    expectedContent = [version.getData(), {name: 'desktop'}];
                version.saveFile.should.be.calledWith(expectedPath, expectedContent, true);
            });
        });

        it('should add nested document and level processed data together', () => {
            var data = _.extend({
                docs: {changelog: {content: {en: 'Hello World'}}},
                levels: [{name: 'desktop'}]
            }, versionData);
            return version.processData(data).then(() => {
                var expectedPath = '/base-path/some-lib/v1/cache.json',
                    expectedContent = [version.getData(), {name: 'readme'}, {name: 'desktop'}];
                version.saveFile.should.be.calledWith(expectedPath, expectedContent, true);
            });
        });
    });
});
