'use strict';

const Model = require('../../../../src/model');
const createBreadcrumbs = require('../../../../index').tasks.page.createBreadcrumbs;

describe('tasks/pages/breadcrumbs', () => {
    const model = new Model();
    const pages = [
        {url: '/', title: 'index title'},
        {url: '/url1/', title: 'url1 title'},
        {url: '/url1/url2/', title: 'url2 title'}
    ];

    beforeEach(() => {
        model.setPages(pages);
    });

    it('should return function as result', () => {
        createBreadcrumbs(model).should.be.instanceOf(Function);
    });

    it('should create valid breadcrumbs model for index page', () => {
        return createBreadcrumbs(model)().then(result => {
            result.getPages()[0].breadcrumbs.should.eql([{url: '/', title: 'index title'}]);
        });
    });

    it('should create valid breadcrumbs model for first-level pages', () => {
        return createBreadcrumbs(model)().then(result => {
            result.getPages()[1].breadcrumbs.should.eql([
                {url: '/', title: 'index title'},
                {url: '/url1/', title: 'url1 title'}
            ]);
        });
    });

    it('should create valid breadcrumbs model for second-level pages', () => {
        return createBreadcrumbs(model)().then(result => {
            result.getPages()[2].breadcrumbs.should.eql([
                {url: '/', title: 'index title'},
                {url: '/url1/', title: 'url1 title'},
                {url: '/url1/url2/', title: 'url2 title'}
            ]);
        });
    });
});

