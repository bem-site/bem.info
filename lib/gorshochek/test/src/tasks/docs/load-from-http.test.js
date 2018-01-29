'use strict';

const path = require('path');

const _ = require('lodash');
const Q = require('q');
const got = require('got');
const proxyquire = require('proxyquire');

const Model = require('../../../../src/model');
const baseUtil = require('../../../../src/util');
let loadSourceFromHttp;

describe('tasks/docs/load-from-http', () => {
    const sandbox = sinon.sandbox.create();
    const defaultPage = {url: '/url1/', source: 'http://foo/file.ext'};
    let gotStub;
    let model;

    beforeEach(() => {
        gotStub = sandbox.stub().returns(Q({body: 'hello-world'}));
        loadSourceFromHttp = proxyquire('../../../../src/tasks/docs/load-from-http', {'got': gotStub});
        sandbox.stub(console, 'error');

        sandbox.stub(baseUtil, 'readFileFromCache').returns(Q('hello-world'));
        sandbox.stub(baseUtil, 'writeFileToCache').returns(Q());
        model = new Model();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should return function as result', () => {
        loadSourceFromHttp(model).should.be.instanceOf(Function);
    });

    it('should not process pages without "source" property', () => {
        model.setPages([{url: '/url1/'}]);
        return loadSourceFromHttp(model)().then(() => {
            baseUtil.readFileFromCache.should.not.be.called;
        });
    });

    it('should not process page if "source" value does not match http url regular expression', () => {
        model.setPages([{url: '/url1/', source: '../some/path/to/local/file'}]);
        return loadSourceFromHttp(model)().then(() => {
            baseUtil.readFileFromCache.should.not.be.called;
        });
    });

    describe('source matches http(s) url regular expression', () => {
        it('should match on file path like a "http://foo/bar.md"', () => {
            model.setPages([{url: '/url1/', source: 'http://foo/bar.md'}]);
            return loadSourceFromHttp(model)().then(() => {
                baseUtil.readFileFromCache.should.be.calledOnce;
            });
        });

        it('should match on file path like a "https://foo/bar.md"', () => {
            model.setPages([{url: '/url1/', source: 'https://foo/bar.md'}]);
            return loadSourceFromHttp(model)().then(() => {
                baseUtil.readFileFromCache.should.be.calledOnce;
            });
        });
    });

    it('should try to read file from cache by valid file path', () => {
        model.setPages([_.extend({}, defaultPage)]);

        return loadSourceFromHttp(model)().then(() => {
            baseUtil.readFileFromCache.should.be
                .calledWithMatch(path.join('/url1/', 'index.ext'));
        });
    });

    it('should reject operation in case of request error', () => {
        const error = new got.RequestError(new Error(), {
            code: 'EHOSTUNREACH',
            host: 'foo',
            path: '/file.ext'
        });
        model.setPages([_.extend({}, defaultPage)]);
        gotStub.returns(Q.reject(error));

        return loadSourceFromHttp(model)().then(() => {
            baseUtil.writeFileToCache.should.not.be.called;
            should.not.exist(model.getPages()[0].contentFile);
            console.error.should.be.calledWithMatch('Error occur while loading source from: foo /file.ext');
        });
    });

    it('should reject operation in case of http error', () => {
        const error = new got.HTTPError(404, {
            host: 'foo',
            path: '/file.ext'
        });
        model.setPages([_.extend({}, defaultPage)]);
        gotStub.returns(Q.reject(error));

        return loadSourceFromHttp(model)().then(() => {
            baseUtil.writeFileToCache.should.not.be.called;
            should.not.exist(model.getPages()[0].contentFile);
            console.error.should.be.calledWith('Error occur while loading source from: foo /file.ext 404 Not Found');
        });
    });

    it('should reject operation in case of max redirects error', () => {
        const error = new got.MaxRedirectsError(404, {
            host: 'foo',
            path: '/file.ext'
        });
        model.setPages([_.extend({}, defaultPage)]);
        gotStub.returns(Q.reject(error));

        return loadSourceFromHttp(model)().then(() => {
            baseUtil.writeFileToCache.should.not.be.called;
            should.not.exist(model.getPages()[0].contentFile);
            console.error.should.be
                .calledWith('Error occur while loading source from: foo /file.ext maximum redirects count exceed');
        });
    });

    it('should process file as new if it was not file in cache', () => {
        model.setPages([_.extend({}, defaultPage)]);
        baseUtil.readFileFromCache.returns(Q.reject('Error'));

        return loadSourceFromHttp(model)().then(() => {
            model.getChanges().added.should.have.length(1);
        });
    });

    it('should process file as modified if it is not same as in cache', () => {
        model.setPages([_.extend({}, defaultPage)]);
        baseUtil.readFileFromCache.returns(Q('Hello World old'));

        return loadSourceFromHttp(model)().then(() => {
            model.getChanges().modified.should.have.length(1);
        });
    });

    it('should not to do anything if file was not changed', () => {
        model.setPages([_.extend({}, defaultPage)]);
        return loadSourceFromHttp(model)().then(() => {
            var changes = model.getChanges();
            changes.added.should.be.empty;
            changes.modified.should.be.empty;
        });
    });

    it('should set valid value of "contentFile" field', () => {
        model.setPages([_.extend({}, defaultPage)]);
        return loadSourceFromHttp(model)().then(() => {
            model.getPages()[0].contentFile.should.equal('/url1/index.ext');
        });
    });

    it('should be resolved with model instance', () => {
        loadSourceFromHttp(model)().should.eventually.be.instanceOf(Model);
    });
});
