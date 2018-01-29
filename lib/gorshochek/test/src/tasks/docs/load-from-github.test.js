'use strict';

const Q = require('q');
const _ = require('lodash');

const Model = require('../../../../src/model');
const baseUtil = require('../../../../src/util');
const GithubAPI = require('../../../../src/tasks/docs/github');
const loadSourceFromGithub = require('../../../../index').tasks.docs.loadSourceFromGithub;

describe('tasks/docs/load-from-github', () => {
    const pageStub = {
        url: '/url/',
        source: 'https://github.com/org/user/blob/ref/path.ext'
    };
    const githubStubRes = {
        meta: {},
        name: 'some-name.ext',
        sha: 'some-sha',
        content: 'some-content'
    };
    const sandbox = sinon.sandbox.create();
    let githubGetContentStub;
    let githubGetCommitsStub;
    let githubGetStub;
    let githubGetBranchStub;
    let model;

    beforeEach(() => {
        sandbox.stub(console, 'warn');
        sandbox.stub(baseUtil, 'readFileFromCache').returns(Q.reject('Error'));
        sandbox.stub(baseUtil, 'writeFileToCache').returns(Q());

        var githubStub = sandbox.stub(GithubAPI.prototype, 'executeAPIMethod')
        githubGetContentStub = githubStub.withArgs('getContent').yields(null, githubStubRes);
        githubGetCommitsStub = githubStub.withArgs('getCommits');
        githubGetStub = githubStub.withArgs('get');
        githubGetBranchStub = githubStub.withArgs('getBranch');
        model = new Model();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should return function as result', () => {
        loadSourceFromGithub(model).should.be.instanceOf(Function);
    });

    it('should not process pages without "source" property', () => {
        model.setPages([{url: '/url1/'}]);
        return loadSourceFromGithub(model)().then(() => {
            githubGetContentStub.should.not.be.called;
        });
    });

    it('should not process page if "source" value does not match github url regular expression', () => {
        model.setPages([{url: '/url1/', source: '//foo/bar'}]);
        return loadSourceFromGithub(model)().then(() => {
            githubGetContentStub.should.not.be.called;
        });
    });

    describe('source matches github url criteria', () => {
        function testAsseptedSourceUrl(url) {
            model.setPages([{url: '/url', source: url}]);
            return loadSourceFromGithub(model)().then(() => {
                githubGetContentStub.should.be.calledOnce;
            });
        }

        it('should process page with source like a "http://github.com/org/user/blob/ref/path"', () => {
            return testAsseptedSourceUrl('http://github.com/org/user/blob/ref/path');
        });

        it('should process page with source like a "https://github.com/org/user/blob/ref/path"', () => {
            return testAsseptedSourceUrl('https://github.com/org/user/blob/ref/path');
        });

        it('should process page with source like "http://github.com/org/user/tree/ref/path"', () => {
            return testAsseptedSourceUrl('http://github.com/org/user/tree/ref/path');
        });

        it('should process page with source like "https://github.com/org/user/tree/ref/path"', () => {
            return testAsseptedSourceUrl('https://github.com/org/user/tree/ref/path');
        });
    });

    it('should load file from github via github API', () => {
        model.setPages([_.extend({}, pageStub)]);
        return loadSourceFromGithub(model)().then(() => {
            githubGetContentStub.should.be.calledOnce;
        });
    });

    it('should save loaded file to cache by valid path', () => {
        model.setPages([_.extend({}, pageStub)]);
        return loadSourceFromGithub(model)().then(() => {
            baseUtil.writeFileToCache.secondCall.should.be.calledWithMatch('/url/index.ext');
        });
    });

    it('should mark loaded doc as added', () => {
        model.setPages([_.extend({}, pageStub)]);
        return loadSourceFromGithub(model)().then(() => {
            model.getChanges().added.should.have.length(1);
        });
    });

    it('should set valid value to "contentFile" field', () => {
        model.setPages([_.extend({}, pageStub)]);
        return loadSourceFromGithub(model)().then(() => {
            model.getPages()[0].contentFile.should.equal('/url/index.ext');
        });
    });

    it('should save valid meta.json file to cache', () => {
        model.setPages([_.extend({}, pageStub)]);
        githubGetContentStub.yields(null, _.extend({}, githubStubRes, {meta: {etag: 'some-etag'}}));
        return loadSourceFromGithub(model)().then(() => {
            var expectedContent = JSON.stringify({
                etag: 'some-etag',
                sha: 'some-sha',
                fileName: '/url/index.ext'
            }, null, 4);
            baseUtil.writeFileToCache.firstCall.should.be.calledWith('/url/index.meta.json', expectedContent);
        });
    });

    it('should skip loading if github return 304 status code', () => {
        model.setPages([_.extend({}, pageStub)]);
        baseUtil.readFileFromCache.returns(Q({}));
        githubGetContentStub
            .yields(_.extend({}, githubStubRes, {meta: {etag: 'some-etag', status: '304 Not Modified'}}));
        return loadSourceFromGithub(model)().then(() => {
            model.getChanges().added.should.be.empty;
            model.getChanges().modified.should.be.empty;
        });
    });

    it('should skip loading if sha sums of github and cache files are equal', () => {
        model.setPages([_.extend({}, pageStub)]);
        baseUtil.readFileFromCache.returns(Q({sha: 'some-sha'}));
        return loadSourceFromGithub(model)().then(() => {
            model.getChanges().added.should.be.empty;
            model.getChanges().modified.should.be.empty;
        });
    });

    it('should mark doc as modified if it was modified and reloaded', () => {
        model.setPages([_.extend({}, pageStub)]);
        baseUtil.readFileFromCache.returns(Q({sha: 'some-another-sha'}));

        return loadSourceFromGithub(model)().then(() => {
            model.getChanges().modified.should.have.length(1);
        });
    });

    it('should have "updateDate" field with null value if "updateDate" option was not set', () => {
        model.setPages([_.extend({}, pageStub)]);

        return loadSourceFromGithub(model)().then(() => {
            (model.getPages()[0].updateDate == null).should.equal(true);
        });
    });

    it('should have "hasIssues" field with null value if "hasIssues" option was not set', () => {
        model.setPages([_.extend({}, pageStub)]);

        return loadSourceFromGithub(model)().then(() => {
            (model.getPages()[0].hasIssues == null).should.equal(true);
        });
    });

    it('should have "branch" field with null value if "branch" option was not set', () => {
        model.setPages([_.extend({}, pageStub)]);

        return loadSourceFromGithub(model)().then(() => {
            (model.getPages()[0].branch == null).should.equal(true);
        });
    });

    it('should receive last update date of doc if "updateDate" option was set', () => {
        var expected = (new Date()).getTime();
        model.setPages([_.extend({}, pageStub)]);
        githubGetCommitsStub.yields(null, [{commit: {committer: {date: expected}}}]);

        return loadSourceFromGithub(model, {updateDate: true})().then(() => {
            model.getPages()[0].updateDate.should.equal(expected);
        });
    });

    it('should set update date to null if "updateDate" option was set but error was occured on commits loading',
        () => {
            model.setPages([_.extend({}, pageStub)]);
            githubGetCommitsStub.yields(new Error());

            return loadSourceFromGithub(model, {updateDate: true})().then(() => {
                (model.getPages()[0].updateDate == null).should.equal(true);
            });
    });

    it('should set update date to null if "updateDate" option was set but source has not any commits',
        () => {
            model.setPages([_.extend({}, pageStub)]);
            githubGetCommitsStub.yields(null, []);

            return loadSourceFromGithub(model, {updateDate: true})().then(() => {
                (model.getPages()[0].updateDate == null).should.equal(true);
            });
        });

    it('should receive info about issues section of repo if "hasIssues" option was set', () => {
        model.setPages([_.extend({}, pageStub)]);
        githubGetStub.yields(null, {has_issues: true});

        return loadSourceFromGithub(model, {hasIssues: true})().then(() => {
            model.getPages()[0].hasIssues.should.equal(true);
        });
    });

    it('should set hasIssues value to null if "hasIssues" option was set but error was occured on gh data loading',
        () => {
            model.setPages([_.extend({}, pageStub)]);
            githubGetStub.yields(new Error());

            return loadSourceFromGithub(model, {hasIssues: true})().then(() => {
                (model.getPages()[0].hasIssues == null).should.equal(true);
            });
        });

    it('should receive info about source branch if "branch" option was set', () => {
        model.setPages([_.extend({}, pageStub)]);
        githubGetBranchStub.yields(null, {});

        return loadSourceFromGithub(model, {branch: true})().then(() => {
            model.getPages()[0].branch.should.equal('ref');
        });
    });

    it('should set default repo branch if "branch" option was set and source branch was not retrieved', () => {
        model.setPages([_.extend({}, pageStub)]);
        githubGetBranchStub.yields(new Error());
        githubGetStub.yields(null, {default_branch: 'some-branch'});

        return loadSourceFromGithub(model, {branch: true})().then(() => {
            model.getPages()[0].branch.should.equal('some-branch');
        });
    });

    it('should set null if "branch" option was set and source and default branches were not retrieved', () => {
        model.setPages([_.extend({}, pageStub)]);
        githubGetBranchStub.yields(new Error());
        githubGetStub.yields(new Error());

        return loadSourceFromGithub(model, {branch: true})().then(() => {
            (model.getPages()[0].branch == null).should.equal(true);
        });
    });

    it('should be resolved with model instance', () => {
        model.setPages([_.extend({}, pageStub)]);
        return loadSourceFromGithub(model)().should.eventually.be.instanceOf(Model);
    });
});
