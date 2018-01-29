'use strict';

const Q = require('q');

const Model = require('../../../../src/model');
const baseUtil = require('../../../../src/util');
const importModel = require('../../../../index').tasks.core.importModel;

describe('tasks/core/import-model', () => {
    const sandbox = sinon.sandbox.create();
    let model;

    beforeEach(() => {
        model = new Model();
        sandbox.stub(baseUtil, 'readJSONFile');
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should return function as result', () => {
        importModel(model, {modelPath: './some-model.json'}).should.be.instanceOf(Function);
    });

    it('should throw error if modelPath option was not set', () => {
        (function() {
            return importModel(model)();
        }).should.throw('modelPath should be defined in task options');
    });

    it('should return promise with model instance', () => {
        baseUtil.readJSONFile.returns(Q([]));
        return importModel(model, {modelPath: './some-model.json'})().should.eventually.be.instanceOf(Model);
    });

    it('should fill model pages from JSON model file given by modelPath option', () => {
        baseUtil.readJSONFile.returns(Q([
            {url: '/url1/'},
            {url: '/url2/'}
        ]));

        return importModel(model, {modelPath: './some-model.json'})().then(model => {
            model.getPages().should.have.length(2);
            model.getPages().should.eql([
                {url: '/url1/'},
                {url: '/url2/'}
            ])
        });
    });
});

