'use strict';

const fs = require('fs');
const fsExtra = require('fs-extra');

const Model = require('../../src/model');
const util = require('../../src/util');

describe('util', () => {
    const sandbox = sinon.sandbox.create();

    beforeEach(() => {
        sandbox.stub(console, 'error');
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should return valid path to cache folder', () => {
        util.getCacheFolder().should.equal('./.builder/cache');
    });

    it('should create folder with given path', () => {
        sandbox.stub(fsExtra, 'ensureDirSync');
        util.createFolder('./some-path');
        fsExtra.ensureDirSync.should.be.calledWithExactly('./some-path');
    });

    it('should copy file from given source to given destination path', () => {
        sandbox.stub(fsExtra, 'copy').yields(null);
        return util.copyFile('./some-source-path', './some-destination-path').then(() => {
            fsExtra.copy.should.be.calledWith('./some-source-path', './some-destination-path');
        });
    });

    describe('readFile', () => {
        let readFileStub;

        beforeEach(() => {
            readFileStub = sandbox.stub(fs, 'readFile');
        });

        it('should call properly method with valid params for file reading from file system', () => {
            readFileStub.yields();
            return util.readFile('./some-path').then(() => {
                fs.readFile.should.be.calledWith('./some-path', {encoding: 'utf-8'});
            });
        });

        it('should read and return content from file on file system', () => {
            readFileStub.yields(null, 'Hello World');
            return util.readFile('./some-path').should.eventually.equal('Hello World');
        });

        it('should rejected with error if fs error occur and fallback value was not set', () => {
            readFileStub.yields(new Error('some-fs-error'));
            return util.readFile('./some-path').should.be.rejectedWith('some-fs-error');
        });

        it('should rejected with error if fallback value was set but fs error is not ENOENT ', () => {
            var error = new Error('some-fs-error');
            error.code = 'EISDIR';

            readFileStub.yields(error);
            return util.readFile('./some-path', 'some-fallback').should.be.rejectedWith('some-fs-error');
        });

        it('should resolve with given fallback value if file does not exist on filesystem', () => {
            var error = new Error('some-fs-error');
            error.code = 'ENOENT';

            readFileStub.yields(error);
            return util.readFile('./some-path', 'some-fallback').should.be.eventually.equal('some-fallback');
        });
    });

    describe('readJSONFile', () => {
        let readFileStub;

        beforeEach(() => {
            readFileStub = sandbox.stub(fsExtra, 'readJSON');
        });

        it('should call properly method with valid params for file reading from file system', () => {
            readFileStub.yields();
            return util.readJSONFile('./some-path').then(() => {
                fsExtra.readJSON.should.be.calledWith('./some-path', {encoding: 'utf-8'});
            });
        });

        it('should read and return content from file on file system', () => {
            var expected = {name: 'Hello World'};
            readFileStub.yields(null, expected);
            return util.readJSONFile('./some-path').should.eventually.eql(expected);
        });

        it('should rejected with error if fs error occur and fallback value was not set', () => {
            readFileStub.yields(new Error('some-fs-error'));
            return util.readJSONFile('./some-path').should.be.rejectedWith('some-fs-error');
        });

        it('should rejected with error if fallback value was set but fs error is not ENOENT ', () => {
            var error = new Error('some-fs-error');
            error.code = 'EISDIR';

            readFileStub.yields(error);
            return util.readJSONFile('./some-path', 'some-fallback').should.be.rejectedWith('some-fs-error');
        });

        it('should resolve with given fallback value if file does not exist on filesystem', () => {
            var error = new Error('some-fs-error');
            error.code = 'ENOENT';

            readFileStub.yields(error);
            return util.readJSONFile('./some-path', 'some-fallback').should.be.eventually.equal('some-fallback');
        });
    });

    describe('readFileFromCache', () => {
        let readFileStub;

        beforeEach(() => {
            readFileStub = sandbox.stub(fs, 'readFile');
        });

        it('should be resolved with content of text file', () => {
            readFileStub.yields(null, 'foo1');
            return util.readFileFromCache('./file1').should.eventually.equal('foo1');
        });

        it('should be resolved with parsed content of json file', () => {
            var obj = {foo: 'bar'};
            sandbox.stub(fsExtra, 'readJSON').yields(null, obj);

            return util.readFileFromCache('./file1.json', true).should.eventually.eql(obj);
        });

        it('should rejected with error if fs error occur and fallback value was not set', () => {
            readFileStub.yields(new Error('some-fs-error'));
            return util.readFileFromCache('./some-path').should.be.rejectedWith('some-fs-error');
        });

        it('should rejected with error if fallback value was set but fs error is not ENOENT ', () => {
            var error = new Error('some-fs-error');
            error.code = 'EISDIR';

            readFileStub.yields(error);
            return util.readFileFromCache('./some-path', 'some-fallback').should.be.rejectedWith('some-fs-error');
        });

        it('should resolve with given fallback value if file does not exist on filesystem', () => {
            var error = new Error('some-fs-error');
            error.code = 'ENOENT';

            readFileStub.yields(error);
            return util.readFileFromCache('./some-path', 'some-fallback').should.be.eventually.equal('some-fallback');
        });
    });

    describe('writeFileToCache', () => {
        beforeEach(() => {
            sandbox.stub(fsExtra, 'ensureDir').yields(null);
            sandbox.stub(fs, 'writeFile').yields(null);
        });

        it('should create directory for target file if it not exists yet', () => {
            return util.writeFileToCache('/path-to-dir/file', 'foo').then(() => {
                fsExtra.ensureDir.should.be.calledOnce;
                fsExtra.ensureDir.should.be.calledWithMatch('/path-to-dir');
            });
        });

        it('should save file to valid file path', () => {
            return util.writeFileToCache('/path-to-dir/file', 'foo').then(() => {
                fs.writeFile.should.be.calledOnce;
                fs.writeFile.should.be.calledWithMatch('/path-to-dir/file');
            });
        });

        it('should return rejected promise in case of error while saving file', () => {
            fs.writeFile.yields(new Error('file error'));
            return util.writeFileToCache('/path-to-dir/file', 'foo').should.be.rejectedWith('file error');
        });
    });

    describe('writeFile', () => {
        beforeEach(() => {
            sandbox.stub(fsExtra, 'ensureDir').yields(null);
            sandbox.stub(fs, 'writeFile').yields(null);
        });

        it('should create directory for target file if it not exists yet', () => {
            return util.writeFile('/path-to-dir/file', 'foo').then(() => {
                fsExtra.ensureDir.should.be.calledOnce;
                fsExtra.ensureDir.should.be.calledWithMatch('/path-to-dir');
            });
        });

        it('should save file to valid file path', () => {
            return util.writeFile('/path-to-dir/file', 'foo').then(() => {
                fs.writeFile.should.be.calledOnce;
                fs.writeFile.should.be.calledWithMatch('/path-to-dir/file');
            });
        });

        it('should return rejected promise in case of error while saving file', () => {
            fs.writeFile.yields(new Error('file error'));
            return util.writeFile('/path-to-dir/file', 'foo').should.be.rejectedWith('file error');
        });
    });

    describe('processPagesAsync', () => {
        it('should call process function for each of filtered pages', () => {
            const model = new Model();
            model.setPages([
                {url: '/url1'},
                {url: '/url12'}
            ]);
            const criteria = page => page.url.indexOf('/url1') > -1;
            const processFunc = () => true;
            const processFuncSpy = sandbox.spy(processFunc);

            return util.processPagesAsync(model, criteria, processFuncSpy).then(() => {
                processFuncSpy.should.be.calledTwice;
            });
        });

        it('should process all pages if criteria function was not given', () => {
            const model = new Model();
            model.setPages([
                {url: '/url1'},
                {url: '/url2'}
            ]);
            const processFunc = () => true;
            const processFuncSpy = sandbox.spy(processFunc);

            return util.processPagesAsync(model, null, processFuncSpy).then(() => {
                processFuncSpy.should.be.calledTwice;
                processFuncSpy.firstCall.should.be.calledWithMatch(model, {url: '/url1'});
                processFuncSpy.secondCall.should.be.calledWithMatch(model, {url: '/url2'});
            });
        });
    });
});
