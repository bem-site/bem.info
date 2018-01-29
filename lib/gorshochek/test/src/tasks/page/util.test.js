'use strict';

const Model = require('../../../../src/model');
const util = require('../../../../src/tasks/page/util');

describe('tasks/page/util', () => {
    const sandbox = sinon.sandbox.create();

    afterEach(() => {
        sandbox.restore();
    });

    describe('getParentUrls', () => {
        it('should get parent urls for index page', () => {
            util.getParentUrls({url: '/'}).should.eql(['/']);
        });

        it('should get parent urls for first level pages', () => {
            util.getParentUrls({url: '/url1/'}).should.eql(['/', '/url1/']);
        });

        it('should get parent urls for second level', () => {
            util.getParentUrls({url: '/url1/url2/'}).should.eql(['/', '/url1/', '/url1/url2/']);
        });

        it('should get parent urls for third level', () => {
            util.getParentUrls({url: '/url1/url2/url3/'}).should.eql(['/', '/url1/', '/url1/url2/', '/url1/url2/url3/']);
        });
    });

    describe('getPagesMap', () => {
        const pages = [
            {url: '/', title: '/title'},
            {url: '/url1/', title: '/url1 title'}
        ];
        it('should build valid complex map of titles by urls and languages', () => {
            const pagesMap = util.createPageTitlesMap(pages);
            pagesMap['/'].should.equal('/title');
            pagesMap['/url1/'].should.equal('/url1 title');
        });
    });

    describe('getExecFunction', () => {
        it('should return function', () => {
            util.getExecFunction(new Model(), () => {}).should.be.instanceOf(Function);
        });

        it('returned function should return promise with model instance', () => {
            return util.getExecFunction(new Model(), () => {})()
                .should.eventually.be.instanceOf(Model);
        });

        it('should call given pageProcessingFunction for each of model pages', () => {
            const spy = sandbox.spy();
            const model = new Model();
            model.setPages([
                {url: '/', title: '/title'},
                {url: '/url1/', title: '/url1 title'}
            ]);

            return util.getExecFunction(model, spy)().then(() => {
                spy.should.be.calledTwice;
                spy.firstCall.should.be.calledWithMatch(sinon.match.any, {url: '/', title: '/title'});
                spy.secondCall.should.be.calledWithMatch(sinon.match.any, {url: '/url1/', title: '/url1 title'});
            });
        });
    });
});

