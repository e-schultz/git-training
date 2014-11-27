/*jshint expr:true*/

describe('the git api service', function () {
  beforeEach(module('git-api'));

  it('should exist', function () {
    var gitApi = getService('gitApi');
    expect(gitApi)
      .to.respondTo('get');
  });

  it('should send requests to the git api', function () {
    var gitApi = getService('gitApi');
    var $http = getService('$http');
    var gitConst = getService('GITHUB_API_BASE');
    $http.get = sinon.spy(function () {});

    gitApi.get('/myPath');
    $http.get.should.have.been.calledOnce;
    $http.get.should.have.been.calledWith(gitConst + '/myPath');

  });
});