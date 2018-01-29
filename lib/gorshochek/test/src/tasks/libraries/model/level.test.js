var Q = require('q'),
    Block = require('../../../../../src/tasks/libraries/model/block'),
    Level = require('../../../../../src/tasks/libraries/model/level');

describe('task/libraries/model/Level', () => {
    var sandbox = sinon.sandbox.create(),
        versionData = {
            baseUrl: '/libraries',
            basePath: '/base-path',
            lib: 'some-lib',
            version: 'v1',
            language: 'en'
        },
        level;

    afterEach(() => {
        sandbox.restore();
    });

    it('should have valid version property after initialization', () => {
        level = new Level(versionData, 'desktop');
        level.version.should.be.eql(versionData);
    });

    it('should have valid level property after initialization', () => {
        level = new Level(versionData, 'desktop');
        level.level.should.be.equal('desktop');
    });

    it('should remove ".docs" suffix in level name after initialization', () => {
        level = new Level(versionData, 'desktop.docs');
        level.level.should.be.equal('desktop');
    });

    it('should remove ".sets" suffix in level name after initialization', () => {
        level = new Level(versionData, 'desktop.sets');
        level.level.should.be.equal('desktop');
    });

    describe('processData', () => {
        var levelData = {
            name: 'desktop.blocks',
            blocks: [
                {name: 'block1', data: {name: 'd-block1'}, jsdoc: {name: 'js-block1'}}
            ]
        };

        beforeEach(() => {
            sandbox.stub(Block.prototype, 'processData').returns(Q({}));
            level = new Level(versionData, 'desktop.docs');
        });

        it('should set valid value for "url" property', () => {
            return level.processData(levelData).then(() => {
                level.getData().url.should.equal('/libraries/some-lib/v1/desktop');
            });
        });

        it('should set valid value for "aliases" property', () => {
            return level.processData(levelData).then(() => {
                level.getData().aliases.should.be.instanceOf(Array).and.be.empty;
            });
        });

        it('should set valid value for "view" property', () => {
            return level.processData(levelData).then(() => {
                level.getData().view.should.be.equal('level');
            });
        });

        it('should set valid value for "lib" property', () => {
            return level.processData(levelData).then(() => {
                level.getData().lib.should.be.equal('some-lib');
            });
        });

        it('should set valid value for "version" property', () => {
            return level.processData(levelData).then(() => {
                level.getData().version.should.be.equal('v1');
            });
        });

        it('should set valid value for "level" property', () => {
            return level.processData(levelData).then(() => {
                level.getData().level.should.be.equal('desktop');
            });
        });

        it('should set valid value for "title" property', () => {
            return level.processData(levelData).then(() => {
                level.getData().title.should.be.equal('desktop');
            });
        });

        it('should set valid value for "published" property', () => {
            return level.processData(levelData).then(() => {
                level.getData().published.should.be.true;
            });
        });

        it('should set valid value for "updateDate" property', () => {
            return level.processData(levelData).then(() => {
                level.getData().updateDate.should.be.above(+(new Date()) - 100);
            });
        });

        it('should concat result with processed result of nested blocks', () => {
            return level.processData(levelData).then(function(result) {
                result.should.be.instanceOf(Array).and.have.length(2);
                result[0].should.be.eql(level.getData());
                result[1].should.be.empty;
            });
        });
    });
});
