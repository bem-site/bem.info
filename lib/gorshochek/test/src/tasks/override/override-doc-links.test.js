var Q = require('q'),
    Model = require('../../../../src/model'),
    baseUtil = require('../../../../src/util'),
    util = require('../../../../src/tasks/override/util'),
    overrideDocs = require('../../../../src/tasks/override/override-doc-links');

describe('tasks/override/override-docs', () => {
    var sandbox = sinon.sandbox.create(),
        model;

    beforeEach(() => {
        model = new Model();

        sandbox.stub(baseUtil, 'readFileFromCache');
        sandbox.stub(baseUtil, 'writeFileToCache').returns(Q());
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should return function as result', () => {
        overrideDocs(model).should.be.instanceOf(Function);
    });

    it('should not process pages without "contentFile" field', () => {
        model.setPages([{url: '/url1/'}]);
        return overrideDocs(model)().then(() => {
            baseUtil.readFileFromCache.should.not.be.called;
        });
    });

    it('should not process pages with non-html "contentFile" field', () => {
        model.setPages([{url: '/url1/', contentFile: '/url1/index.json'}]);
        return overrideDocs(model)().then(() => {
            baseUtil.readFileFromCache.should.not.be.called;
        });
    });

    /*
    describe('override image sources', () => {
        beforeEach(() => {
            model.setPages([{url: '/url1/', contentFile: '/url1/index.html'}]);
        });

        it('should not process image tags without src attributes', () => {
            baseUtil.readFileFromCache.returns(Q('<img>'));

            return overrideDocs(model)().then(() => {
                baseUtil.writeFileToCache.should.be.calledWith('/url1/index.html', '<img>');
            });
        });

        it('should not rewrite image with absolute http(s) url', () => {
            var html = '<img src="http://some-image-url">';
            baseUtil.readFileFromCache.returns(Q(html));

            return overrideDocs(model)().then(() => {
                baseUtil.writeFileToCache.should.be.calledWith('/url1/index.html', html);
            });
        });

        it('should rewrite relative links to images', () => {
            var html = '<img src="./relative-image-url">';
            model.getPages()[0].source = 'http://page/source/url';
            baseUtil.readFileFromCache.returns(Q(html));

            return overrideDocs(model)().then(() => {
                baseUtil.writeFileToCache.should.be
                    .calledWith('/url1/index.html', '<img src="http://page/source/relative-image-url">');
            });
        });

        it('should rewrite relative links to images from github sources', () => {
            var html = '<img src="./relative-image-url">';
            model.getPages()[0].source = 'http://github.com/some-user/some-repo/tree/ref/url';
            baseUtil.readFileFromCache.returns(Q(html));

            return overrideDocs(model)().then(() => {
                baseUtil.writeFileToCache.should.be
                    .calledWith('/url1/index.html',
                        '<img src="http://raw.githubusercontent.com/some-user/some-repo/ref/relative-image-url">');
            });
        });
    });
    */

    describe('override link href attributes', () => {
        var params = {
            host: 'https://en.bem.info',
            root: '/bem.info/en'
        };

        function shouldRewriteFromTo(from, to, params) {
            baseUtil.readFileFromCache.returns(Q(from));

            return overrideDocs(model, params)().then(() => {
                baseUtil.writeFileToCache.should.be.calledWith('/url1/index.html', to);
            });
        }

        beforeEach(() => {
            var sourceUrlsMap = util.createSourceUrlsMap([
                {
                    url: '/url1/',
                    source: 'https://github.com/org/user/blob/ref/some-path1',
                    published: true
                },
                {
                    url: '/url2/',
                    source: 'https://github.com/org/user/blob/ref/some-path2',
                    published: true
                }
            ]);
            sandbox.stub(util, 'createSourceUrlsMap').returns(sourceUrlsMap);
            sandbox.stub(util, 'createArrayOfModelPageUrls').returns(['/url1', '/url2']);

            model.setPages([{
                url: '/url1/',
                source: 'https://github.com/org/user/blob/ref/some-path1',
                contentFile: '/url1/index.html'
            }]);
        });

        it('should not rewrite anchor links', () => {
            var html = '<a href="#some-anchor"></a>';
            return shouldRewriteFromTo(html, html);
        });

        it('should not rewrite links with unsupported protocols', () => {
            var html = '<a href="mail://mail.to.some"></a>';
            return shouldRewriteFromTo(html, html);
        });

        it('should not rewrite native website links', () => {
            var html = '<a href="/url1/"></a>';
            return shouldRewriteFromTo(html, html);
        });

        it('should not rewrite absolute http(s) non-github links', () => {
            var html = '<a href="http://some-absolute-url"></a>';
            return shouldRewriteFromTo(html, html);
        });

        it('should replace absolute link to gh source (if it also persisted in model)', () => {
            return shouldRewriteFromTo(
                '<a href="https://github.com/org/user/blob/ref/some-path2"></a>', '<a href="/url2/"></a>');
        });

        it('should replace relative link to gh source (if it also persisted in model)', () => {
            return shouldRewriteFromTo('<a href="./some-path2"></a>', '<a href="/url2/"></a>');
        });

            it('should replace relative link (with anchor) to gh source', () => {
            return shouldRewriteFromTo('<a href="./some-path2#anchor"></a>', '<a href="/url2/#anchor"></a>');
        });

        it('should replace absolute link to gh source (if it also persisted in model) with params', () => {
            return shouldRewriteFromTo(
                '<a href="https://github.com/org/user/blob/ref/some-path2"></a>',
                '<a href="/bem.info/en/url2/"></a>',
                params
            );
        });

        it('should replace relative link to gh source (if it also persisted in model) with params', () => {
            return shouldRewriteFromTo(
                '<a href="./some-path2"></a>',
                '<a href="/bem.info/en/url2/"></a>',
                params
            );
        });

            it('should replace relative link (with anchor) to gh source with params', () => {
            return shouldRewriteFromTo(
                '<a href="./some-path2#anchor"></a>',
                '<a href="/bem.info/en/url2/#anchor"></a>',
                params
            );
        });

        it('should rewrite params.host with params.root', () => {
            return shouldRewriteFromTo(
                '<a href="https://en.bem.info/methodology/"></a>',
                '<a href="/bem.info/en/methodology/"></a>',
                params
            );
        });

        it('should left original link if replacement was not found', () => {
            var html = '<a href="./some-path3"></a>';
            return shouldRewriteFromTo(html, html);
        });
    });
});
