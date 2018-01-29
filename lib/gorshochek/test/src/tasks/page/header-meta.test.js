'use strict';

const Model = require('../../../../src/model');
const createHeaderMeta = require('../../../../index').tasks.page.createHeaderMeta;

describe('tasks/page/header-meta', () => {
    const pages = [
        {url: '/', title: '/ title', tags: ['index1', 'index2']},
        {url: '/url1/', title: '/url1 title'}
    ];
    const model = new Model();

    function getMetaFieldValue(result, field, pageIndex) {
        pageIndex = pageIndex || 0;
        return result.getPages()[pageIndex].head.meta[field];
    }

    beforeEach(() => {
        model.setPages(pages);
    });

    it('should return function as result', () => {
        createHeaderMeta(model).should.be.instanceOf(Function);
    });

    it('should set value for "ogUrl" meta field', () => {
        return createHeaderMeta(model)().then(result => {
            getMetaFieldValue(result, 'ogUrl').should.be.equal('/');
        });
    });

    it('should set value for "ogType" meta field', () => {
        return createHeaderMeta(model)().then(result => {
            getMetaFieldValue(result, 'ogType').should.be.equal('article');
        });
    });

    it('should set value for "description" meta field', () => {
        return createHeaderMeta(model)().then(result => {
            getMetaFieldValue(result, 'description').should.be.equal('/ title');
        });
    });

    it('should set value for "ogDescription" meta field', () => {
        return createHeaderMeta(model)().then(result => {
            getMetaFieldValue(result, 'ogDescription').should.be.equal('/ title');
        });
    });

    it('should set valid value for "keywords" meta field for tagged page', () => {
        return createHeaderMeta(model)().then(result => {
            getMetaFieldValue(result, 'keywords').should.be.equal('index1, index2');
        });
    });

    it('should set valid value for "ogKeywords" meta field for tagged page', () => {
        return createHeaderMeta(model)().then(result => {
            getMetaFieldValue(result, 'ogKeywords').should.be.equal('index1, index2');
        });
    });

    it('should set empty value for "keywords" meta field for non-tagged page', () => {
        return createHeaderMeta(model)().then(result => {
            getMetaFieldValue(result, 'keywords', 1).should.be.equal('');
        });
    });

    it('should set empty value for "ogKeywords" meta field for non-tagged page', () => {
        return createHeaderMeta(model)().then(result => {
            getMetaFieldValue(result, 'ogKeywords', 1).should.be.equal('');
        });
    });
});
