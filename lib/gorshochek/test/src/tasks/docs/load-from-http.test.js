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

    function createGotRequest(url) {
        const request = {
            _onResponse: () => {},
            options: {
                method: 'GET',
                maxRedirects: 10,
                url: new URL(url)
            },
            response: {
                statusCode: 404,
                statusMessage: 'Not Found'
            }
        };
        request.response.request = request;
        return request;
    }

    beforeEach(() => {
        gotStub = sandbox.stub().returns(Q({body: 'hello-world'}));
        gotStub.default = gotStub;
        gotStub.RequestError = got.RequestError;
        gotStub.HTTPError = got.HTTPError;
        gotStub.MaxRedirectsError = got.MaxRedirectsError;
        loadSourceFromHttp = proxyquire('../../../../src/tasks/docs/load-from-http', {'got': gotStub});
        sandbox.stub(console, 'error');
        sandbox.stub(console, 'warn');

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

    it('should not process unpublished pages', () => {
        model.setPages([{url: '/url1/', source: 'http://foo/file.ext', published: false}]);
        return loadSourceFromHttp(model)().then(() => {
            gotStub.should.not.be.called;
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

    it('should use cached source on request error if "fallbackToCache" option was set', () => {
        const error = new got.RequestError('some network error',
            {code: 'EHOSTUNREACH'}, {url: new URL('http://foo/file.ext')});
        model.setPages([_.extend({}, defaultPage)]);
        gotStub.returns(Q.reject(error));

        return loadSourceFromHttp(model, {fallbackToCache: true})().then(() => {
            baseUtil.writeFileToCache.should.not.be.called;
            model.getPages()[0].should.have.property('contentFile', '/url1/index.ext');
            console.warn.should.be.calledWith('Use cached source for page /url1/: /url1/index.ext');
        });
    });

    it('should not use cache fallback if cached source is missing', () => {
        const error = new got.RequestError('some network error',
            {code: 'EHOSTUNREACH'}, {url: new URL('http://foo/file.ext')});
        model.setPages([_.extend({}, defaultPage)]);
        baseUtil.readFileFromCache.returns(Q.reject('Error'));
        gotStub.returns(Q.reject(error));

        return loadSourceFromHttp(model, {fallbackToCache: true})().then(() => {
            baseUtil.writeFileToCache.should.not.be.called;
            should.not.exist(model.getPages()[0].contentFile);
            console.warn.should.not.be.called;
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
        const error = new got.RequestError('some network error',
            {code: 'EHOSTUNREACH'}, {url: new URL('http://foo/file.ext')});
        model.setPages([_.extend({}, defaultPage)]);
        gotStub.returns(Q.reject(error));

        return loadSourceFromHttp(model)().then(() => {
            baseUtil.writeFileToCache.should.not.be.called;
            should.not.exist(model.getPages()[0].contentFile);
            console.error.should.be.calledWithMatch('Error occur while loading source from: foo /file.ext');
        });
    });

    it('should reject operation in case of http error', () => {
        const error = new got.HTTPError(createGotRequest('http://foo/file.ext').response);
        model.setPages([_.extend({}, defaultPage)]);
        gotStub.returns(Q.reject(error));

        return loadSourceFromHttp(model)().then(() => {
            baseUtil.writeFileToCache.should.not.be.called;
            should.not.exist(model.getPages()[0].contentFile);
            console.error.should.be.calledWith('Error occur while loading source from: foo /file.ext 404 Not Found');
        });
    });

    it('should reject operation in case of max redirects error', () => {
        const error = new got.MaxRedirectsError(createGotRequest('http://foo/file.ext'));
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
