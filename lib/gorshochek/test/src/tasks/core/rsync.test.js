'use strict';

const _ = require('lodash');
const proxyquire = require('proxyquire');
const Model = require('../../../../src/model');

describe('tasks/core/rsync', () => {
    const sandbox = sinon.sandbox.create();
    const model = new Model();
    const baseParams = {
        src: './.builder/cache/',
        dest: './data',
        options: '-rd --delete --delete-excluded --force',
        sync: false
    };

    let rsync;
    let rsyncStub;

    beforeEach(() => {
        sandbox.stub(console, 'error');
        rsyncStub = sandbox.stub().yields(null);
        rsync = proxyquire('../../../../src/tasks/core/rsync', {'rsync-slim': rsyncStub});
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should return function as result', () => {
        rsync(model).should.be.instanceOf(Function);
    });

    it('should return promise with model instance', () => {
        return rsync(model)().should.eventually.be.instanceOf(Model);
    });

    it('should rejected with error if error occur while synchronization', () => {
        rsyncStub.yields(new Error('some-error'));
        return rsync(model)().should.rejectedWith('some-error');
    });

    it('should rsync with default parameters', () => {
        return rsync(model)().then(() => {
            rsyncStub.should.be.calledWithMatch(baseParams);
        });
    });

    it('should rsync from custom source path', () => {
        return rsync(model, {src: './some-source'})().then(() => {
            rsyncStub.should.be.calledWithMatch(_.extend({}, baseParams, {src: './some-source'}));
        });
    });

    it('should rsync to custom destination path', () => {
        return rsync(model, {dest: './some-destination'})().then(() => {
            rsyncStub.should.be.calledWithMatch(_.extend({}, baseParams, {dest: './some-destination'}));
        });
    });

    it('should use custom given rsync raw options', () => {
        return rsync(model, {options: '-rtvhcz'})().then(() => {
            rsyncStub.should.be.calledWithMatch(_.extend({}, baseParams, {options: '-rtvhcz'}));
        });
    });

    it('should be able to set given excluded patterns', () => {
        return rsync(model, {options: '-rd', exclude: ['*.js', '*.css']})().then(() => {
            rsyncStub.should.be
                .calledWithMatch(_.extend({}, baseParams, {options: '-rd --exclude \'*.js\' --exclude \'*.css\''}));
        });
    });
});
