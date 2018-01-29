var Q = require('q'),
    Model = require('../../../../src/model'),
    baseUtil = require('../../../../src/util'),
    generateTagPages = require('../../../../index').tasks.meta.generateTagPages;

describe('tasks/meta/tags', () => {
    var sandbox = sinon.sandbox.create(),
        model = new Model();

    beforeEach(() => {
        sandbox.stub(baseUtil, 'writeFileToCache').returns(Q());
        model.setPages([
            {
                url: '/url1/',
                site: '/url1/',
                title: 'some-title',
                tags: ['tag1']
            }
        ]);
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should return function as result', () => {
        generateTagPages(model).should.be.instanceOf(Function);
    });

    it('should return promise with model instance', () => {
        return generateTagPages(model)().should.eventually.instanceOf(Model);
    });

    it('should extend model with generated pages', () => {
        return generateTagPages(model)().then(() => {
            model.getPages().should.have.length(3);
        });
    });

    it('it should properly work for model without tags', () => {
        model.setPages([
            {
                url: '/url1/',
                title: 'some-title'
            }
        ]);
        return generateTagPages(model)().should.eventually.instanceOf(Model);
    });

    it('should generate page for existed tag', () => {
        return generateTagPages(model)().then(function(model) {
            model.getPages()[1].should.eql({
                url: '/tags/tag1/',
                site: '/tags/',
                aliases: [],
                title: 'tag1',
                published: true,
                view: 'tag',
                contentFile: '/tags/tag1/index.json'
            });
        });
    });

    it('should save content of tag page into file', () => {
        return generateTagPages(model)().then(() => {
            baseUtil.writeFileToCache.should.be.calledTwice;
            baseUtil.writeFileToCache.firstCall.should.be.calledWith('/tags/tag1/index.json');
        });
    });

    it('should generate valid content file for tag page', () => {
        return generateTagPages(model)().then(() => {
            baseUtil.writeFileToCache.should.be.calledTwice;
            baseUtil.writeFileToCache.firstCall.should.be.calledWith('/tags/tag1/index.json',
                JSON.stringify([{
                    url: '/url1/',
                    title: 'some-title',
                    tags: ['tag1'],
                    tagLinks: [
                        {
                            url: '/tags/tag1/',
                            title: 'tag1'
                        }
                    ]
                }])
            );
        });
    });

    it('should generate base tags page', () => {
        return generateTagPages(model)().then(function(model) {
            model.getPages()[2].should.eql({
                url: '/tags/',
                site: '/tags/',
                aliases: [],
                title: 'Tags',
                published: true,
                view: 'tag',
                contentFile: '/tags/index.json'
            });
        });
    });

    it('should generate base tags page with custom url received from task options', () => {
        return generateTagPages(model, {baseUrl: '/some-tag-url'})().then(function(model) {
            model.getPages()[2].should.eql({
                url: '/some-tag-url/',
                site: '/some-tag-url/',
                aliases: [],
                title: 'Tags',
                published: true,
                view: 'tag',
                contentFile: '/some-tag-url/index.json'
            });
        });
    });

    it('should generate base tags page with custom title received from task options', () => {
        return generateTagPages(model, {baseTitle: 'Custom Title'})().then(function(model) {
            model.getPages()[2].should.eql({
                url: '/tags/',
                site: '/tags/',
                aliases: [],
                title: 'Custom Title',
                published: true,
                view: 'tag',
                contentFile: '/tags/index.json'
            });
        });
    });

    it('should replace page tags with data for links creation', () => {
        return generateTagPages(model, {baseTitle: 'Custom Title'})().then(function(model) {
            model.getPages()[0].should.eql({
                url: '/url1/',
                site: '/url1/',
                title: 'some-title',
                tags: ['tag1'],
                tagLinks: [{title: 'tag1', url: '/tags/tag1/'}]
            });
        });
    });

    it('should save content of base tags page into file', () => {
        return generateTagPages(model)().then(() => {
            baseUtil.writeFileToCache.should.be.calledTwice;
            baseUtil.writeFileToCache.secondCall.should.be.calledWith('/tags/index.json');
        });
    });

    it('should generate valid content file for base tags page', () => {
        return generateTagPages(model)().then(() => {
            baseUtil.writeFileToCache.should.be.calledTwice;
            baseUtil.writeFileToCache.secondCall.should.be.calledWith('/tags/index.json',
                JSON.stringify([{
                    url: '/url1/',
                    title: 'some-title',
                    tags: ['tag1'],
                    tagLinks: [
                        {
                            url: '/tags/tag1/',
                            title: 'tag1'
                        }
                    ]
                }])
            );
        });
    });
});
