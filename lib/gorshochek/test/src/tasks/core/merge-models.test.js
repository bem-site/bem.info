'use strict';

const path = require('path');

const Q = require('q');

const Model = require('../../../../src/model');
const baseUtil = require('../../../../src/util');
const mergeModels = require('../../../../index').tasks.core.mergeModels;

describe('tasks/core/merge-models', () => {
    const sandbox = sinon.sandbox.create();
    const model = new Model();
    const options = {modelPath: './some-model.json'};

    let consoleInfoStub;
    let copyFileStub;
    let readFileFromCacheStub;
    let readJSONFileStub;

    beforeEach(() => {
        consoleInfoStub = sandbox.stub(console, 'info');
        readJSONFileStub = sandbox.stub(baseUtil, 'readJSONFile').returns(Q([]));
        copyFileStub = sandbox.stub(baseUtil, 'copyFile').returns(Q());
        readFileFromCacheStub = sandbox.stub(baseUtil, 'readFileFromCache').returns(Q([]));
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should throw error if modelPath parameter was not set on initialization', () => {
        (() => {return mergeModels(model)}).should.throw('modelPath should be defined in task options');
    });

    it('should return function as result', () => {
        mergeModels(model, options).should.be.instanceOf(Function);
    });

    it('should read current model from local path given by "modelPath" option', () => {
        return mergeModels(model, options)().then(() => {
            readJSONFileStub.should.be.calledOnce;
            readJSONFileStub.should.be.calledWithExactly('./some-model.json');
        });
    });

    it('should read old model from cache', () => {
        return mergeModels(model, options)().then(() => {
            readFileFromCacheStub.should.be.calledOnce;
            readFileFromCacheStub.should.be.calledWithExactly('model.json', []);
        });
    });

    it('should merge models and find differences', () => {
        const modelMergeSpy = sandbox.spy(model, 'merge');

        return mergeModels(model, options)().then(() => {
            modelMergeSpy.should.be.calledOnce;
            modelMergeSpy.should.be.calledWithExactly([], []);
        });
    });

    it('should normalize effective model', () => {
        const modelNormalizeSpy = sandbox.spy(model, 'normalize');

        return mergeModels(model, options)().then(() => {
            modelNormalizeSpy.should.be.calledOnce;
        });
    });

    it('should replace old model file by current', () => {
        return mergeModels(model, options)().then(() => {
            copyFileStub.should.be.calledOnce;
            copyFileStub.should.be.calledWithExactly('./some-model.json', '.builder/cache/model.json');
        });
    });

    it('should log model changes after merging models', () => {
        readJSONFileStub.returns([{url: '/url1'}]);
        return mergeModels(model, options)().then(() => {
            consoleInfoStub.should.be.calledOnce;
            consoleInfoStub.should.be.calledWith('Page with url: /url1 was added')
        });
    });

    it('should return promise with model instance', () => {
        return mergeModels(model, options)().should.eventually.eql(model);
    });
});
