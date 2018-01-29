var _ = require('lodash'),
    Q = require('q'),
    Document = require('../../../../../src/tasks/libraries/model/document');

describe('task/libraries/model/Document', () => {
    var sandbox = sinon.sandbox.create(),
        versionData = {
            baseUrl: '/libraries',
            basePath: '/base-parh',
            lib: 'some-lib',
            version: 'v1',
            language: 'en'
        },
        document;

    afterEach(() => {
        sandbox.restore();
    });

    it('should have valid version property after initialization', () => {
        document = new Document(versionData, 'changelog');
        document.version.should.eql(versionData);
    });

    it('should have valid document property after initialization', () => {
        document = new Document(versionData, 'changelog');
        document.document.should.be.equal('changelog');
    });

    it('should set valid changelog en title if data title was not set', () => {
        document = new Document(versionData, 'changelog');
        document.getTitle({}).should.be.equal('Changelog');
        document.getTitle({title: {}}).should.be.equal('Changelog');
    });

    it('should set valid changelog ru title if data title was not set', () => {
        document = new Document(_.extend({}, versionData, {language: 'ru'}), 'changelog');
        document.getTitle({}).should.be.equal('История изменений');
        document.getTitle({title: {}}).should.be.equal('История изменений');
    });

    it('should set valid migration en title if data title was not set', () => {
        document = new Document(versionData, 'migration');
        document.getTitle({}).should.be.equal('Migration');
        document.getTitle({title: {}}).should.be.equal('Migration');
    });

    it('should set valid migration ru title if data title was not set', () => {
        document = new Document(_.extend({}, versionData, {language: 'ru'}), 'migration');
        document.getTitle({}).should.be.equal('Миграция');
        document.getTitle({title: {}}).should.be.equal('Миграция');
    });

    it('should set valid notes en title if data title was not set', () => {
        document = new Document(versionData, 'notes');
        document.getTitle({}).should.be.equal('Release Notes');
        document.getTitle({title: {}}).should.be.equal('Release Notes');
    });

    it('should set valid notes ru title if data title was not set', () => {
        document = new Document(_.extend({}, versionData, {language: 'ru'}), 'notes');
        document.getTitle({}).should.be.equal('Примечания к релизу');
        document.getTitle({title: {}}).should.be.equal('Примечания к релизу');
    });

    describe('processData', () => {
        var docData = {
            title: {en: 'Changelog'},
            content: {en: 'Hello World'},
            url: {en: 'http://url1'}
        };
        beforeEach(() => {
            document = new Document(versionData, 'changelog');
            sandbox.stub(document, 'saveFile').returns(Q());
        });

        it('should set valid value for "url" property', () => {
            return document.processData(docData).then(() => {
                document.getData().url.should.be.equal('/libraries/some-lib/v1/changelog');
            });
        });

        it('should set valid value for "aliases" property', () => {
            return document.processData(docData).then(() => {
                document.getData().aliases.should.be.instanceOf(Array).and.be.empty;
            });
        });

        it('should set valid value for "view" property', () => {
            return document.processData(docData).then(() => {
                document.getData().view.should.be.equal('post');
            });
        });

        it('should set valid value for "lib" property', () => {
            return document.processData(docData).then(() => {
                document.getData().lib.should.be.equal('some-lib');
            });
        });

        it('should set valid value for "version" property', () => {
            return document.processData(docData).then(() => {
                document.getData().version.should.be.equal('v1');
            });
        });

        it('should set valid value for "document" property', () => {
            return document.processData(docData).then(() => {
                document.getData().document.should.be.equal('changelog');
            });
        });

        it('should set valid value for "title" property', () => {
            return document.processData(docData).then(() => {
                document.getData().title.should.be.equal('Changelog');
            });
        });

        it('should set valid value for "published" property', () => {
            return document.processData(docData).then(() => {
                document.getData().published.should.be.true;
            });
        });

        it('should set valid value for "updateDate" property', () => {
            return document.processData(docData).then(() => {
                document.getData().updateDate.should.above(+(new Date()) - 100);
            });
        });

        it('should set null "source" if it was not set', () => {
            return document.processData(_.merge({}, docData, {url: null})).then(() => {
                should.not.exist(document.getData().source);
            });
        });

        it('should set null "source" if it was not set for given language', () => {
            return document.processData(_.merge({}, docData, {url: {en: null}})).then(() => {
                should.not.exist(document.getData().source);
            });
        });

        it('should return valid "source" value for given lang', () => {
            return document.processData(_.merge({url: {en: 'http://url1'}}, docData)).then(() => {
                document.getData().source.should.equal('http://url1');
            });
        });

        it('should save source file content to valid path', () => {
            return document.processData(docData).then(() => {
                var expectedPath = '/base-parh/some-lib/v1/changelog/index.html';
                document.saveFile.should.be.calledWith(expectedPath, 'Hello World', false);
            });
        });

        it('should set valid value for "contentFile" field after saving source content', () => {
            return document.processData(docData).then(() => {
                document.getData().contentFile
                    .should.equal('/libraries/some-lib/v1/changelog/index.html');
            });
        });

        it('should set value of "published" property to false if document content does not exist', () => {
            return document.processData(_.merge({}, docData, {content: null})).then(() => {
                document.getData().published.should.be.false;
            });
        });

        it('should set value of "published" property to false if document content does not exist for lang', () => {
            return document.processData(_.merge({}, docData, {content: {en: null}})).then(() => {
                document.getData().published.should.be.false;
            });
        });
    });
});
