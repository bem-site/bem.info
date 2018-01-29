'use strict';

const _ = require('lodash');
const Model = require('../../src/model');

describe('Model', () => {
    let model;

    beforeEach(() => {
        model = new Model();
    });

    it('should have empty array of pages after initialization', () => {
        model.getPages().should.be.instanceof(Array).and.be.empty;
    });

    it('should have model of changes', () => {
        model.getChanges().should.be.instanceof(Object);
    });

    it('should add new items to changes add collection', () => {
        model.pushChangeToAddedGroup('url1');
        model.getChanges().added[0].should.be.equal('url1');
    });

    it('should mark changes as modified after pushing new item into added collection', () => {
        model.pushChangeToAddedGroup('url1');
        model.hasChanges().should.be.equal(true);
    });

    it('should add new items to modified collection', () => {
        model.pushChangeToModifiedGroup('url1');
        model.getChanges().modified[0].should.be.equal('url1');
    });

    it('should mark changes as modified after pushing new item into modified collection', () => {
        model.pushChangeToModifiedGroup('url1');
        model.hasChanges().should.be.equal(true);
    });

    it('should add new items to removed collection', () => {
        model.pushChangeToRemovedGroup('url1');
        model.getChanges().removed[0].should.be.equal('url1');
    });

    it('should mark changes as modified after pushing new item into removed collection', () => {
        model.pushChangeToRemovedGroup('url1');
        model.hasChanges().should.be.equal(true);
    });

    describe('pages property', () => {
        it('should have getter', () => {
            model.getPages.should.be.instanceof(Function);
        });

        it('should have setter', () => {
            model.setPages.should.be.instanceof(Function);
        });

        it('should can set and get pages', () => {
            model.getPages().should.be.empty;
            model.setPages([{url: '/url1'}]);
            model.getPages().should.be.eql([{url: '/url1'}]);
        });
    });

    describe('merge models', () => {
        describe('merge empty models', () => {
            beforeEach(() => {
                model.merge([], []);
            });

            it('should not find any changes for empty models', () => {
                model.getChanges().added.should.be.empty;
                model.getChanges().modified.should.be.empty;
                model.getChanges().removed.should.be.empty;
            });

            it('should have empty result model', () => {
                model.getPages().should.be.empty;
            });
        });

        describe('merge newModel with empty oldModel', () => {
            it('should have valid result model', () => {
                model.merge([], [{url: '/url1'}]);
                model.getPages().should.be.eql([{url: '/url1'}])
            });

            it('should have valid added changes model', () => {
                model.merge([], [{url: '/url1'}]);
                model.getChanges().added.should.eql([{type: 'page', url: '/url1'}])
            });

            it('should have empty modified changes model', () => {
                model.merge([], [{url: '/url1'}]);
                model.getChanges().modified.should.be.empty;
            });

            it('should have empty removed changes model', () => {
                model.merge([], [{url: '/url1'}]);
                model.getChanges().removed.should.be.empty;
            });
        });

        describe('merge no-empty models', () => {
            let oldModel, newModel;

            beforeEach(() => {
                oldModel = [
                    {url: '/url1', a: 'a1', b: 1, c: {c1: 'c11', c2: 'c21'}},
                    {url: '/url2', a: 'a2', b: 2, c: {c1: 'c12', c2: 'c22'}},
                    {url: '/url3', a: 'a3', b: 3, c: {c1: 'c13', c2: 'c23'}}
                ],
                newModel = [
                    {url: '/url1', a: 'a1', b: 1, c: {c1: 'c11', c2: 'c21'}},
                    {url: '/url3', a: 'b3', b: 3, c: {c1: 'c13', c2: 'd23'}},
                    {url: '/url4', a: 'b4', b: 4, c: {c1: 'c14', c2: 'd24'}}
                ];
            });

            it('should have valid number of pages after merge', () => {
                model.merge(oldModel, newModel);
                model.getPages().should.be.instanceOf(Array).and.have.length(3);
            });

            it ('should have valid added changes after merge', () => {
                model.merge(oldModel, newModel);
                model.getChanges().added.should.eql([{type: 'page', url: '/url4'}]);
            });

            it ('should have valid modified changes after merge', () => {
                model.merge(oldModel, newModel);
                model.getChanges().modified.should.eql([{type: 'page', url: '/url3'}]);
            });

            it ('should have valid removed changes after merge', () => {
                model.merge(oldModel, newModel);
                model.getChanges().removed.should.eql([{type: 'page', url: '/url2'}]);
            });

            it('should respect initial pages order', () => {
                model.merge(oldModel, newModel);
                model.getPages()[0].url.should.equal('/url1');
                model.getPages()[1].url.should.equal('/url3');
                model.getPages()[2].url.should.equal('/url4');
            });
        });
    });

    describe('normalize', () => {
        const commonPageProperties = {url: '/url1'};

        function prepareModelPages(pageProperty) {
            model.setPages([_.merge(pageProperty, commonPageProperties)]);
        }

        it('should set given "aliases" property value as is if it was set', () => {
            prepareModelPages({aliases: ['/url11', '/url22']});
            model.normalize();
            model.getPages().shift().aliases.should.eql(['/url11', '/url22']);
        });

        it('should set default "aliases" property value as empty array', () => {
            prepareModelPages({});
            model.normalize();
            model.getPages().shift().aliases.should.be.empty;
        });

        it('should set given "view" property value as is if it was given', () => {
            prepareModelPages({view: 'index'});
            model.normalize();
            model.getPages().shift().view.should.be.equal('index');
        });

        it('should set given "published" property value as is', () => {
            prepareModelPages({published: true, title: 'Hello World'});
            model.normalize();
            model.getPages().shift().published.should.be.true;
        });
    });
});
