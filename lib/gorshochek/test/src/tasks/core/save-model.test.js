'use strict';

const Q = require('q');

const Model = require('../../../../src/model');
const baseUtil = require('../../../../src/util');
const saveModel = require('../../../../index').tasks.core.saveModel;

describe('tasks/core/save-model', () => {
    const sandbox = sinon.sandbox.create();
    const model = new Model();

    beforeEach(() => {
        sandbox.stub(console, 'error');
        sandbox.stub(baseUtil, 'writeFile').returns(Q());
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should return function as result', () => {
        saveModel(model).should.be.instanceOf(Function);
    });

    it('should return promise with model instance', () => {
        return saveModel(model)().should.eventually.be.instanceOf(Model);
    });

    it('should save model file to default path: .builder/cache/data.json', () => {
        return saveModel(model)().then(() => {
            baseUtil.writeFile.should.be.calledWith('.builder/cache/data.json');
        });
    });

    it('should dave model file to given path defined by "dataPath" option', () => {
        return saveModel(model, {dataPath: './some-path'})().then(() => {
            baseUtil.writeFile.should.be.calledWith('some-path/data.json');
        });
    });

    it('should show valid console error message if model saving error occur', () => {
        baseUtil.writeFile.returns(Q.reject('some-error'));

        return saveModel(model)().catch(() => {
            console.error.should.be.calledTwice;
            console.error.firstCall.should.be.calledWith('Error occured while saving model to file');
        });
    });

    it('should return rejected promise if model saving error occur', () => {
        baseUtil.writeFile.returns(Q.reject('some-error'));
        return saveModel(model)().should.be.rejectedWith('some-error');
    });
});
