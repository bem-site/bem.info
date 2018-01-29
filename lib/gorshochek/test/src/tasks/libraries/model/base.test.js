var fsExtra = require('fs-extra'),
    Base = require('../../../../../src/tasks/libraries/model/base');

describe('task/libraries/model/Base', () => {
    var sandbox = sinon.sandbox.create(),
        base;

    beforeEach(() => {
        sandbox.stub(console, 'error');
        sandbox.stub(fsExtra, 'outputJSON');
        sandbox.stub(fsExtra, 'outputFile');
        base = new Base();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should have empty data after initialization', () => {
        base.getData().should.be.instanceOf(Object).and.be.empty;

    });

    it('should set value for given key', () => {
        base.setValue('foo', 'bar');
        base.getData().foo.should.equal('bar');
    });

    describe('saveFile', () => {
        it('should call valid method for saving JSON file', () => {
            fsExtra.outputJSON.yields(null, './file.json');
            base.saveFile('./file.json', {foo: 'bar'}, true).then(() => {
                fsExtra.outputJSON.should.be.calledOnce();
            });
        });

        it('should call valid method for saving text/html file', () => {
            fsExtra.outputFile.yields(null, './file.txt');
            base.saveFile('./file.json', {foo: 'bar'}, false).then(() => {
                fsExtra.outputFile.should.be.calledOnce();
            });
        });

        it('should return file path of saved file on successfully saving', () => {
            fsExtra.outputJSON.yields(null, './file.json');
            base.saveFile('./file.json', {foo: 'bar'}, true).should.eventually.equal('./file.json');
        });

        it('should trow error if error was occur while saving file', () => {
            fsExtra.outputJSON.yields(new Error('file error'));
            base.saveFile('./file.json', {foo: 'bar'}, true).should.be.rejectedWith('file error');
        });
    });
});
