var Q = require('q'),
    Block = require('../../../../../src/tasks/libraries/model/block');

describe('task/libraries/model/Block', () => {
    var sandbox = sinon.sandbox.create(),
        block;

    beforeEach(() => {
        block = new Block({level: 'desktop'}, 'button');
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should have valid level property after initialization', () => {
        block.level.should.eql({level: 'desktop'});
    });

    it('should have valid block property after initialization', () => {
        block.block.should.be.equal('button');
    });

    it('should return valid block documentation', () => {
        block._rectifyBlockDocumentation({}, 'en').should.be.eql({});
    });

    it('should set block documentation to null if it is missed', () => {
        should.not.exist(block._rectifyBlockDocumentation(undefined, 'en'));
    });

    it('should return valid block jsdoc', () => {
        block._rectifyBlockJSDocumentation({}, 'en').should.be.eql({});
    });

    it('should set block jsdoc to null if it is missed', () => {
        should.not.exist(block._rectifyBlockJSDocumentation(undefined, 'en'));
    });

    describe('processData', () => {
        var level = {
            version: {
                baseUrl: '/libraries',
                basePath: '/some-path',
                lib: 'some-lib',
                version: 'v1',
                language: 'en'
            },
            level: 'desktop'
        };

        beforeEach(() => {
            block = new Block(level, 'button');
            sandbox.stub(block, 'saveFile').returns(Q());
        });

        it('should set valid block url', () => {
            return block.processData({}).then(() => {
                block.getData().url.should.be.equal('/libraries/some-lib/v1/desktop/button');
            });
        });

        it('should have valid url aliases', () => {
            return block.processData({}).then(() => {
                block.getData().aliases.should.be.instanceOf(Array).and.be.empty;
            });
        });

        it('should have valid value for "view" field', () => {
            return block.processData({}).then(() => {
                block.getData().view.should.be.equal('block');
            });
        });

        it('should have valid value for "lib" field', () => {
            return block.processData({}).then(() => {
                block.getData().lib.should.be.equal('some-lib');
            });
        });

        it('should have valid value for "version" field', () => {
            return block.processData({}).then(() => {
                block.getData().version.should.be.equal('v1');
            });
        });

        it('should have valid value for "level" field', () => {
            return block.processData({}).then(() => {
                block.getData().level.should.be.equal('desktop');
            });
        });

        it('should have valid value for "block" field', () => {
            return block.processData({}).then(() => {
                block.getData().block.should.be.equal('button');
            });
        });

        it('should have valid value for "title" field', () => {
            return block.processData({}).then(() => {
                block.getData().title.should.be.equal('button');
            });
        });

        it('should have valid value for "published" field', () => {
            return block.processData({}).then(() => {
                block.getData().published.should.be.true;
            });
        });

        it('should have valid value for "updateDate" field', () => {
            return block.processData({}).then(() => {
                block.getData().updateDate.should.above(+(new Date()) - 100);
            });
        });

        it('should save source file content to valid path', () => {
            return block.processData({}).then(() => {
                var expectedPath = '/some-path/some-lib/v1/desktop/button/index.json';
                block.saveFile.should.be.calledWith(expectedPath, {data: null, jsdoc: null}, true);
            });
        });

        it('should set valid value for "contentFile" field after saving source content', () => {
            return block.processData({}).then(() => {
                block.getData().contentFile
                    .should.be.equal('/libraries/some-lib/v1/desktop/button/index.json');
            });
        });
    });
});
