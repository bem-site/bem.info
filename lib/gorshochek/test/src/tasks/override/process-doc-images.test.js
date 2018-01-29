var fs = require('fs'),
    Q = require('q'),
    got = require('got'),
    Model = require('../../../../src/model'),
    baseUtil = require('../../../../src/util'),
    util = require('../../../../src/tasks/override/util'),
    processDocImages = require('../../../../src/tasks/override/process-doc-images');

describe('tasks/override/process-doc-images', () => {
    var sandbox = sinon.sandbox.create(),
        model;

    beforeEach(() => {
        model = new Model();
        sandbox.stub(baseUtil, 'readFileFromCache');
        sandbox.stub(baseUtil, 'writeFileToCache').returns(Q());
        sandbox.stub(baseUtil, 'loadFileToCacheFromUrl');
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should return function as result', () => {
        processDocImages(model).should.be.instanceOf(Function);
    });

    it('should not process pages without "contentFile" field', () => {
        model.setPages([{url: '/url1/'}]);
        return processDocImages(model)().then(() => {
            baseUtil.readFileFromCache.should.not.be.called;
        });
    });

    it('should not process pages with non-html "contentFile" field', () => {
        model.setPages([{url: '/url1/', contentFile: '/url1/index.json'}]);
        return processDocImages(model)().then(() => {
            baseUtil.readFileFromCache.should.not.be.called;
        });
    });

    describe('override image sources', () => {
        beforeEach(() => {
            sandbox.stub(baseUtil, 'isFileExists').returns(Q(false));
            model.setPages([{url: '/url1/', contentFile: '/url1/index.html'}]);
        });

        it('should not override non-existed image src attributes', () => {
            baseUtil.readFileFromCache.returns(Q('<img>'));

            return processDocImages(model)().then(() => {
                baseUtil.writeFileToCache.should.be.calledWith('/url1/index.html', '<img>');
            });
        });

        it('should load images given by absolute http urls in html', () => {
            const staticPath = '/static/AEvljUfRxKUj4A4Ibjgyuyq8VrM.png';
            const imageUrl = 'http://some-host/some-image.png';

            baseUtil.readFileFromCache.returns(Q(`<img src="${imageUrl}">`));
            baseUtil.loadFileToCacheFromUrl.returns(Q(staticPath));

            return processDocImages(model)().then(() => {
                baseUtil.loadFileToCacheFromUrl.should.be.calledWith(imageUrl, staticPath, imageUrl);
                baseUtil.writeFileToCache.should.be
                    .calledWith('/url1/index.html', `<img src="${staticPath}">`);
            });
        });

        it('should load images given by relative urls in html', () => {
            const staticPath = '/static/AEvljUfRxKUj4A4Ibjgyuyq8VrM.png';
            const imageUrl = '../some-image.png';

            baseUtil.readFileFromCache.returns(Q(`<img src="${imageUrl}">`));
            baseUtil.loadFileToCacheFromUrl.returns(Q(staticPath));
            model.getPages()[0].source = 'http://some-host/foo/bar.md';

            return processDocImages(model)().then(() => {
                baseUtil.loadFileToCacheFromUrl.should.be
                    .calledWith('http://some-host/some-image.png', staticPath, imageUrl);
                baseUtil.writeFileToCache.should.be
                    .calledWith('/url1/index.html', `<img src="${staticPath}">`);
            });
        });

        it('should load images given by relative urls for github source', () => {
            const staticPath = '/static/lRcJVuhX-BbRjUxzvgRJrnpTyTk.png';
            const imageUrl = '../some-image.png';

            baseUtil.readFileFromCache.returns(Q(`<img src="${imageUrl}">`));
            baseUtil.loadFileToCacheFromUrl.returns(Q(staticPath));
            model.getPages()[0].source = 'http://github.com/some-org/some-repo/blob/master/foo/bar.md';

            const rawUrl = 'http://raw.githubusercontent.com/some-org/some-repo/master/some-image.png';

            return processDocImages(model)().then(() => {
                baseUtil.loadFileToCacheFromUrl.should.be.calledWith(rawUrl, staticPath, imageUrl);
                baseUtil.writeFileToCache.should.be
                    .calledWith('/url1/index.html', `<img src="${staticPath}">`);
            });
        });

        it('should not load image file if it already exists in cache', function() {
            const staticPath = '/static/AEvljUfRxKUj4A4Ibjgyuyq8VrM.png';
            const imageUrl = 'http://some-host/some-image.png';

            baseUtil.readFileFromCache.returns(Q(`<img src="${imageUrl}">`));
            baseUtil.isFileExists.returns(Q(true));

            return processDocImages(model)().then(() => {
                baseUtil.loadFileToCacheFromUrl.should.not.be.called;
                baseUtil.writeFileToCache.should.be
                    .calledWith('/url1/index.html', `<img src="${staticPath}">`);
            });
        });
    });

});

