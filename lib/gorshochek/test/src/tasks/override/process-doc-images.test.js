var Q = require('q'),
    proxyquire = require('proxyquire'),
    borschikHash = require('borschik-hash'),
    Model = require('../../../../src/model'),
    baseUtil = require('../../../../src/util'),
    processDocImages;

describe('tasks/override/process-doc-images', () => {
    var sandbox = sinon.sandbox.create(),
        imageContent = Buffer.from('same image content'),
        gotStub,
        model;

    beforeEach(() => {
        model = new Model();
        gotStub = sandbox.stub().returns(Q({body: imageContent}));
        gotStub.default = gotStub;

        processDocImages = proxyquire('../../../../src/tasks/override/process-doc-images', {got: gotStub});

        sandbox.stub(baseUtil, 'readFileFromCache');
        sandbox.stub(baseUtil, 'writeFileToCache').returns(Q());
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

    it('should not process unpublished pages', () => {
        model.setPages([{url: '/url1/', contentFile: '/url1/index.html', published: false}]);
        return processDocImages(model)().then(() => {
            baseUtil.readFileFromCache.should.not.be.called;
            baseUtil.writeFileToCache.should.not.be.called;
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
            const staticPath = `/static/${borschikHash(imageContent)}.png`;
            const imageUrl = 'http://some-host/some-image.png';

            baseUtil.readFileFromCache.returns(Q(`<img src="${imageUrl}">`));

            return processDocImages(model)().then(() => {
                gotStub.should.be.calledWith(imageUrl, {responseType: 'buffer'});
                baseUtil.writeFileToCache.should.be.calledWith(staticPath, imageContent);
                baseUtil.writeFileToCache.should.be
                    .calledWith('/url1/index.html', `<img src="${staticPath}">`);
            });
        });

        it('should load images given by relative urls in html', () => {
            const staticPath = `/static/${borschikHash(imageContent)}.png`;
            const imageUrl = '../some-image.png';

            baseUtil.readFileFromCache.returns(Q(`<img src="${imageUrl}">`));
            model.getPages()[0].source = 'http://some-host/foo/bar.md';

            return processDocImages(model)().then(() => {
                gotStub.should.be.calledWith('http://some-host/some-image.png', {responseType: 'buffer'});
                baseUtil.writeFileToCache.should.be.calledWith(staticPath, imageContent);
                baseUtil.writeFileToCache.should.be
                    .calledWith('/url1/index.html', `<img src="${staticPath}">`);
            });
        });

        it('should load images given by relative urls for github source', () => {
            const staticPath = `/static/${borschikHash(imageContent)}.png`;
            const imageUrl = '../some-image.png';

            baseUtil.readFileFromCache.returns(Q(`<img src="${imageUrl}">`));
            model.getPages()[0].source = 'http://github.com/some-org/some-repo/blob/master/foo/bar.md';

            const rawUrl = 'http://raw.githubusercontent.com/some-org/some-repo/master/some-image.png';

            return processDocImages(model)().then(() => {
                gotStub.should.be.calledWith(rawUrl, {responseType: 'buffer'});
                baseUtil.writeFileToCache.should.be.calledWith(staticPath, imageContent);
                baseUtil.writeFileToCache.should.be
                    .calledWith('/url1/index.html', `<img src="${staticPath}">`);
            });
        });

        it('should not save image file if content hash already exists in cache', function() {
            const staticPath = `/static/${borschikHash(imageContent)}.png`;
            const imageUrl = 'http://some-host/some-image.png';

            baseUtil.readFileFromCache.returns(Q(`<img src="${imageUrl}">`));
            baseUtil.isFileExists.returns(Q(true));

            return processDocImages(model)().then(() => {
                gotStub.should.be.calledWith(imageUrl, {responseType: 'buffer'});
                baseUtil.writeFileToCache.should.not.be.calledWith(staticPath, imageContent);
                baseUtil.writeFileToCache.should.be
                    .calledWith('/url1/index.html', `<img src="${staticPath}">`);
            });
        });

        it('should reuse same static file for different urls with same content', () => {
            const firstImageUrl = 'http://some-host/first.png';
            const secondImageUrl = 'http://some-host/second.png';
            const staticPath = `/static/${borschikHash(imageContent)}.png`;

            baseUtil.readFileFromCache.returns(Q(`<img src="${firstImageUrl}"><img src="${secondImageUrl}">`));

            return processDocImages(model)().then(() => {
                baseUtil.writeFileToCache.should.be.calledWith(staticPath, imageContent);
                baseUtil.writeFileToCache.should.be
                    .calledWith('/url1/index.html', `<img src="${staticPath}"><img src="${staticPath}">`);
            });
        });
    });

});
