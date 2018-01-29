'use strict';

const _ = require('lodash');
const nock = require('nock');
const proxyquire = require('proxyquire');
let GithubAPI = require('../../../../../src/tasks/docs/github');

proxyquire.preserveCache();

describe('GithubAPI', () => {
    const  sandbox = sinon.sandbox.create();
    const callOptions = {
        host: 'github.com',
        user: 'some-user',
        repo: 'some-repo'
    };
    let githubAPI;

    beforeEach(() => {
        sandbox.stub(console, 'warn');
        sandbox.stub(console, 'error');
        githubAPI = new GithubAPI({token: 'some-gh-token'});
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should show warning message if token for public API was not set', () => {
        githubAPI = new GithubAPI();
        console.warn.firstCall.should.be.calledWith(`No github authorization token were set.
                Number of requests will be limited by 60 requests per hour according to API rules`);
    });

    it('should execute github API method and return result', function(done) {
        nock('https://api.github.com')
            .get('/repos/some-user/some-repo')
            .query({access_token: 'some-gh-token'})
            .reply(200, {name: 'some-repo'});

        githubAPI.executeAPIMethod('get', callOptions, {}, function(error, result) {
            result.should.eql({name: 'some-repo', meta: {}});
            done();
        });
    });

    it('should retry on failed call and receive results on next successfully call', function(done) {
        nock('https://api.github.com')
            .get('/repos/some-user/some-repo')
            .query({access_token: 'some-gh-token'})
            .once()
            .replyWithError('some network error')
            .get('/repos/some-user/some-repo')
            .query({access_token: 'some-gh-token'})
            .reply(200, {name: 'some-repo'});

        githubAPI.executeAPIMethod('get', callOptions, {}, function(error, result) {
            result.should.eql({name: 'some-repo', meta: {}});
            done();
        });
    });

    it('should return error if all retry attempts were already failed', function(done) {
        nock('https://api.github.com')
            .get('/repos/some-user/some-repo')
            .query({access_token: 'some-gh-token'})
            .times(6)
            .replyWithError('some network error');

        githubAPI.executeAPIMethod('get', callOptions, {}, function(error) {
            error.message.should.equal('some network error');
            done();
        });
    });

    it('should show error messages if errors were occured for all attempts', function(done) {
        nock('https://api.github.com')
            .get('/repos/some-user/some-repo')
            .query({access_token: 'some-gh-token'})
            .times(6)
            .replyWithError('some network error');

        githubAPI.executeAPIMethod('get', callOptions, {}, function(error) {
            console.error.getCall(0).should.be.calledWith('GH: get failed with some network error');
            console.error.getCall(1).should.be.calledWith('host: => github.com');
            console.error.getCall(2).should.be.calledWith('user: => some-user');
            console.error.getCall(3).should.be.calledWith('repo: => some-repo');
            done();
        });
    });

    it('should show advanced error messages if branch and path params were given', function(done) {
        nock('https://api.github.com')
            .get('/repos/some-user/some-repo/contents/some-path')
            .query({access_token: 'some-gh-token', ref: 'some-ref'})
            .times(6)
            .replyWithError('some network error');

        githubAPI.executeAPIMethod('getContent',
            _.extend({ref: 'some-ref', path: 'some-path'}, callOptions), {}, function(error) {
                console.error.getCall(0).should.be.calledWith('GH: getContent failed with some network error');
                console.error.getCall(4).should.be.calledWith('ref: => some-ref');
                console.error.getCall(5).should.be.calledWith('path: => some-path');
                done();
            });
    });

    it('should also initialize APIs for advanced hosts given by "githubHosts" option', () => {
        var githubAPIStub = sinon.stub();
        GithubAPI = proxyquire('../../../../../src/tasks/docs/github/index.js', {github: githubAPIStub});
        githubAPI = new GithubAPI({githubHosts: [{host: 'my.github.com'}]});
        githubAPIStub.should.be.calledWithNew;
        githubAPIStub.secondCall.should.be.calledWith({
            host: 'my.github.com',
            version: '3.0.0',
            protocol: 'https',
            timeout: 60000,
            debug: false
        })
    });
});
