'use strict';

const Q = require('q');

const Model = require('../../../../src/model');
const baseUtil = require('../../../../src/util');

describe('tasks/docs/transform-md-html', () => {
    const sandbox = sinon.sandbox.create();
    const transformMdToBemjson = require('../../../../src/tasks/docs/transform-md-bemjson');
    const transformBemjsonToHtml = require('../../../../src/tasks/docs/transform-bemjson-html');

    const model = new Model();

    beforeEach(() => {
        sandbox.stub(console, 'error');
        sandbox.stub(baseUtil, 'readFileFromCache').returns(Q(''));
        sandbox.stub(baseUtil, 'writeFileToCache').returns(Q());
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should read source file from cache by valid path', () => {
        model.setPages([{url: '/url1/', contentFile: '/some-content.md'}]);
        transformMdToBemjson(model)().then((model) => {
            return transformBemjsonToHtml(model)();
        }).then(() => {
            baseUtil.readFileFromCache.should.be.calledOnce;
            baseUtil.readFileFromCache.should.be.calledWithMatch('/some-content.md');
        });
    });

    it('should write source file to cache by valid path', () => {
        model.setPages([{url: '/url1/', contentFile: '/foo/some-content.md'}]);
        transformMdToBemjson(model)().then((model) => {
            return transformBemjsonToHtml(model)();
        }).then(() => {
            baseUtil.writeFileToCache.should.be.calledOnce;
            baseUtil.writeFileToCache.should.be.calledWithMatch('foo/index.html');
        });
    });

    it('should update "contentFile" property of page model', () => {
        model.setPages([{url: '/url1/', contentFile: '/foo/some-content.md'}]);
        transformMdToBemjson(model)().then((model) => {
            return transformBemjsonToHtml(model)();
        }).then(() => {
            model.getPages()[0].contentFile.should.equal('/foo/index.html');
        });
    });

    it('should return promise with model instance', () => {
        return transformMdToBemjson(model)().then((model) => {
            return transformBemjsonToHtml(model)();
        }).should.eventually.be.instanceOf(Model);
    });
});
