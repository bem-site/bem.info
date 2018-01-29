var Url = require('url'),
    util = require('../../../../src/tasks/override/util');

describe('tasks/override/util', () => {
    describe('isAbsoluteHttpUrl', () => {
        it('should return true for absolute http url: "http://some-website.com"', () => {
            util.isAbsoluteHttpUrl(Url.parse('http://some-website.com')).should.equal(true);
        });

        it('should return true for absolute https url: "https://some-website.com"', () => {
            util.isAbsoluteHttpUrl(Url.parse('https://some-website.com')).should.equal(true);
        });

        it('should return false for non-http(s) absolute url: "git://some-website.com"', () => {
            util.isAbsoluteHttpUrl(Url.parse('git://some-website.com')).should.equal(false);
        });

        it('should return false for relative url', () => {
            util.isAbsoluteHttpUrl(Url.parse('../some-website.com')).should.equal(false);
        });
    });

    describe('hasUnsupportedProtocol', () => {
        it('should return true for absolute non-http(s) url "git://some-website.com"', () => {
            util.hasUnsupportedProtocol(Url.parse('git://some-website.com')).should.equal(true);
        });

        it('should return false for absolute http(s) url "http://some-website.com"', () => {
            util.hasUnsupportedProtocol(Url.parse('http://some-website.com')).should.equal(false);
        });

        it('should return false for relative url', () => {
            util.hasUnsupportedProtocol(Url.parse('../some-website.com')).should.equal(false);
        });
    });

    describe('isAnchor', () => {
        it('should return false for non-anchor absolute url', () => {
            util.isOnlyAnchor(Url.parse('http://some-website.com#some-anchor')).should.equal(false);
        });

        it('should return false for non-anchor relative url', () => {
            util.isOnlyAnchor(Url.parse('../some-website.com#some-anchor')).should.equal(false);
        });

        it('should return true for anchor url', () => {
            util.isOnlyAnchor(Url.parse('#some-anchor')).should.equal(true);
        });
    });

    describe('isGithubUrl', () => {
        it('should return true for github url', () => {
            util.isGithubUrl(Url.parse('https://github.com/some-org/some-user')).should.equal(true);
        });

        it('should return false for non-github url', () => {
            util.isGithubUrl(Url.parse('https://some-website.com/some-org/some-user')).should.equal(false);
        });
    });

    describe('isNativeWebsiteUrl', () => {
        it('should return true if url is native website url', () => {
            util.isNativeWebsiteUrl(Url.parse('/url1'), ['/url1']).should.equal(true);
        });

        it('should return true if url (with trailing slash) is native website url', () => {
            util.isNativeWebsiteUrl(Url.parse('/url1/'), ['/url1']).should.equal(true);
        });

        it('should return false if url is non-native website url', () => {
            util.isNativeWebsiteUrl(Url.parse('http://some-website.com'), ['/url1']).should.equal(false);
        });
    });

    describe('findReplacement', () => {
        var pages = [
                {url: '/url1', source: '/sourceUrl1', published: true},
                {url: '/url2', source: '/sourceUrl2/README.md', published: true}
            ],
            sourceUrlMap,
            existedUrls;

        beforeEach(() => {
            sourceUrlMap = util.createSourceUrlsMap(pages);
            existedUrls = util.createArrayOfModelPageUrls(pages);
        });

        it('should find replacement from sourceUrlMap', () => {
            util.findReplacement(['/sourceUrl1'], sourceUrlMap, existedUrls).should.equal('/url1');
        });

        it('should find replacement from sourceUrlMap by alter key', () => {
            util.findReplacement(['/sourceUrl2'], sourceUrlMap, existedUrls).should.equal('/url2');
        });

        it('should find replacement from model page urls array', () => {
            util.findReplacement(['/url1'], sourceUrlMap, existedUrls).should.equal('/url1');
        });

        it('should return null if replacement was not found', () => {
            var result = util.findReplacement(['/non-existed'], sourceUrlMap, existedUrls);
            (result == null).should.equal(true);
        });
    });

    describe('createArrayOfModelPageUrls', () => {
        it('should create array of model pages urls', () => {
            var pages = [
                {url: '/url1'},
                {url: '/url2'}
            ];
            util.createArrayOfModelPageUrls(pages).should.eql(['/url1', '/url2']);
        });
    });

    describe('createSourceUrlsMap', () => {
        it('should create map with sourceUrls as keys and urls as values', () => {
            var pages = [
                {url: '/url1', source: '/sourceUrl1', published: true},
                {url: '/url2', source: '/sourceUrl2', published: true}
            ];
            var sourceUrlMap = util.createSourceUrlsMap(pages);
            sourceUrlMap.get('/sourceUrl1').should.equal('/url1');
            sourceUrlMap.get('/sourceUrl2').should.equal('/url2');
        });

        it('should skip pages without "source" fields', () => {
            var pages = [
                {url: '/url1', source: '/sourceUrl1', published: true},
                {url: '/url2', published: true}
            ];
            var sourceUrlMap = util.createSourceUrlsMap(pages);
            sourceUrlMap.size.should.equal(1);
        });

        it('should skip unpublished pages', () => {
            var pages = [
                {url: '/url1', source: '/sourceUrl1', published: true},
                {url: '/url2', source: '/sourceUrl1', published: false}
            ];
            var sourceUrlMap = util.createSourceUrlsMap(pages);
            sourceUrlMap.has('/sourceUrl1').should.equal(true);
            sourceUrlMap.has('/sourceUrl2').should.equal(false);
        });
    });
});
