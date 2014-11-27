/*jshint expr:true*/

describe('the git service service', function () {
  beforeEach(module('git-service'));

  it('should exist', function () {
    var gitService = getService('gitService');
    expect(gitService)
      .to.respondTo('getUserRepo');
  });

});