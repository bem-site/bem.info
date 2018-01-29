'use strict';

const _ = require('lodash');
const Q = require('q');

const Model = require('../../../../src/model');
const baseUtil = require('../../../../src/util');
const BEMTREE = require('../../../stub/bemtree').BEMTREE;
const BEMHTML = require('../../../stub/bemhtml').BEMHTML;
const applyBEM = require('../../../../index').tasks.template.applyBEM;

describe('tasks/template/full-bem', () => {
    const sandbox = sinon.sandbox.create();
    const options = {
        bemtree: './test/stub/bemtree.js',
        bemhtml: './test/stub/bemhtml.js',
        ctx: {}
    };
    const model = new Model();

    beforeEach(() => {
        sandbox.stub(BEMTREE, 'apply').returns('some-bemjson');
        sandbox.stub(BEMHTML, 'apply').returns('some-html');
        sandbox.stub(baseUtil, 'readFile').returns(Q('some-content'));
        sandbox.stub(baseUtil, 'writeFile').returns(Q());
        model.setPages([
            {
                url: '/url1/',
                site: '/url1/',
                title: 'some title 1',
                contentFile: '/url1/index.html'
            }
        ]);
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should throw error if bemtree parameter was not set on initialization', () => {
        (() => {return applyBEM(model, {})}).should
            .throw('Path to BEMTREE template file was not set');
    });

    it('should throw error if bemhtml parameter was not set on initialization', () => {
        (() => {return applyBEM(model, {bemtree: './some/bemtree/path'})}).should
            .throw('Path to BEMHTML template file was not set');
    });

    it('should throw error if bemhtml parameter was not set on initialization', () => {
        (() => {return applyBEM(model, {
            bemtree: './some/bemtree/path',
            bemhtml: './some/bemhtml/path'
        })}).should.throw('Context was not set');
    });

    it('should return function as result', () => {
        applyBEM(model, options).should.be.instanceOf(Function);
    });

    it('should return resolved promise with mode instance', () => {
        return applyBEM(model, options)().should.eventually.be.instanceof(Model);
    });

    it('should set empty page content if page has not source and contentFile', () => {
        model.setPages([
            {
                url: '/url1/',
                site: '/url1/',
                title: 'some title 1'
            }
        ]);
        return applyBEM(model, options)().then(model => {
            model.getPages()[0].content.should.be.empty;
        });
    });

    it('should set page content from page content field value', () => {
        model.setPages([
            {
                url: '/url1/',
                site: '/url1/',
                title: 'some title 1',
                content: 'some-source'
            }
        ]);
        return applyBEM(model, options)().then(model => {
            model.getPages()[0].content.should.equal('some-source');
        });
    });

    it('should set page content from content of file from contentFile path', () => {
        return applyBEM(model, options)().then(model => {
            model.getPages()[0].content.should.equal('some-content');
        });
    });

    it('should read content file for page from contentFile field', () => {
        return applyBEM(model, options)().then(() => {
            baseUtil.readFile.should.be.calledOnce;
            baseUtil.readFile.should.be.calledWith('data/url1/index.html', '');
        });
    });

    it('should compound page with given context', () => {
        const opts = _.extend({}, options, {ctx: {block: 'some-block', data: {foo: 'bar'}}});
        return applyBEM(model, opts)().then(() => {
            BEMTREE.apply.should.be.calledOnce;
            BEMTREE.apply.should.be.calledWith({
                block: opts.ctx.block,
                data: {
                    foo: 'bar',
                    page: {
                        bundle: 'index',
                        content: 'some-content',
                        contentFile: '/url1/index.html',
                        site: '/url1/',
                        title: 'some title 1',
                        url: '/url1/'
                    },
                    pages: [{
                        url: '/url1/',
                        site: '/url1/',
                        title: 'some title 1',
                        contentFile: '/url1/index.html',
                        bundle: 'index',
                        content: 'some-content'
                    }]
                }
            });
        });
    });

    it('should apply BEMHTML to passed "*.bemjson.js" file', () => {
        model.setPages([
            {
                url: '/test-url/',
                content: "[{ block: 'b1', content: 'b1-content' }]",
                contentFile: 'index.bemjson.js'
            }
        ]);

        return applyBEM(model, options)().then(() => {
            BEMHTML.apply.should.be.calledTwice;
        });
    });

    it('should create html via BEMHTML tech', () => {
        return applyBEM(model, options)().then(() => {
            BEMHTML.apply.should.be.calledOnce;
        });
    });

    it('should save html page into file by valid path in output directory', () => {
        return applyBEM(model, options)().then(() => {
            baseUtil.writeFile.should.be.calledOnce;
            baseUtil.writeFile.should.be.calledWith('output/url1/index.html', 'some-html');
        });
    });
});
