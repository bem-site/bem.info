'use strict';

const Q = require('q');

const Model = require('../../../../src/model');
const baseUtil = require('../../../../src/util');
const proxyquire = require('proxyquire');

describe('tasks/docs/transform-md-html', () => {
    const sandbox = sinon.sandbox.create();
    const markedStub = sandbox.stub();
    const transformMdToHtml = proxyquire('../../../../src/tasks/docs/transform-md-html', {marked: markedStub});

    const model = new Model();

    beforeEach(() => {
        markedStub.yields(null, '');

        sandbox.stub(console, 'error');
        sandbox.stub(baseUtil, 'readFileFromCache').returns(Q(''));
        sandbox.stub(baseUtil, 'writeFileToCache').returns(Q());
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should return function as result', () => {
        transformMdToHtml(model).should.be.instanceOf(Function);
    });

    it('should not transform pages without "contentFile" fields', () => {
        model.setPages([{url: '/url1/'}]);
        return transformMdToHtml(model)().then(() => {
            markedStub.should.not.be.called;
        });
    });

    it('should not transform pages with not-markdown content files', () => {
        model.setPages([{url: '/url1/', contentFile: '/not-md.file'}]);
        return transformMdToHtml(model)().then(() => {
            markedStub.should.not.be.called;
        });
    });

    it('should read source file from cache by valid path', () => {
        model.setPages([{url: '/url1/', contentFile: '/some-content.md'}]);
        return transformMdToHtml(model)().then(() => {
            baseUtil.readFileFromCache.should.be.calledOnce;
            baseUtil.readFileFromCache.should.be.calledWithMatch('/some-content.md');
        });
    });

    it('should write source file to cache by valid path', () => {
        model.setPages([{url: '/url1/', contentFile: '/foo/some-content.md'}]);
        return transformMdToHtml(model)().then(() => {
            baseUtil.writeFileToCache.should.be.calledOnce;
            baseUtil.writeFileToCache.should.be.calledWithMatch('foo/index.html');
        });
    });

    it('should update "contentFile" property of page model', () => {
        model.setPages([{url: '/url1/', contentFile: '/foo/some-content.md'}]);
        return transformMdToHtml(model)().then(() => {
            model.getPages()[0].contentFile.should.equal('/foo/index.html');
        });
    });
/*
    describe('transform errors', () => {
        beforeEach(() => {
            markedStub.yields(new Error('some-error'));
            model.setPages([{url: '/url1/', contentFile: '/foo/some-content.md'}]);
        });

        it.skip('should print log error message if md -> html transformation failed for source', () => {
            return transformMdToHtml(model)().then(() => {
                console.error.should.be.calledTwice;
                console.error.firstCall.should.be
                    .calledWithExactly('Error occur while transform md -> html for page: /url1/');
            });
        });

        it.skip('should not save html content file', () => {
            return transformMdToHtml(model)().then(() => {
                baseUtil.writeFileToCache.should.not.be.called;
            });
        });

        it.skip('should not update contentFile field', () => {
            return transformMdToHtml(model)().then(() => {
                model.getPages()[0].contentFile.should.equal('/foo/some-content.md');
            });
        });
    });
*/
    it('should return promise with model instance', () => {
        return transformMdToHtml(model)().should.eventually.be.instanceOf(Model);
    });
});
