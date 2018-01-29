'use strict';

const Model = require('../../../../src/model');
const createHeaderTitle = require('../../../../index').tasks.page.createHeaderTitle;

describe('tasks/page/header-title', () => {
    const pages = [
        {url: '/', title: 'index title'},
        {url: '/url1/', title: 'url1 title'},
        {url: '/url1/url2/', title: 'url2 title'}
    ];
    const model = new Model();

    beforeEach(() => {
        model.setPages(pages);
    });

    it('should return function as result', () => {
        createHeaderTitle(model).should.be.instanceOf(Function);
    });

    it('should set valid header title value for index page', () => {
        return createHeaderTitle(model)().then(result => {
            result.getPages()[0].head.title.should.equal('index title');
        });
    });

    it('should set valid header title value for first-level pages', () => {
        return createHeaderTitle(model)().then(result => {
            result.getPages()[1].head.title.should.equal('url1 title / index title');
        });
    });

    it('should set valid header title value for second-level pages', () => {
        return createHeaderTitle(model)().then(result => {
            result.getPages()[2].head.title.should.equal('url2 title / url1 title / index title');
        });
    });

    it('should use custom delimiter received from options', () => {
        return createHeaderTitle(model, {delimiter: '||'})().then(result => {
            result.getPages()[1].head.title.should.equal('url1 title||index title');
        });
    });
});
