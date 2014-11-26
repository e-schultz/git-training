angular.module('git-service', ['git-api'])
  .factory('gitService', function (gitApi) {
    var service = {};

    function getUserRepo(name) {
      return gitApi.get('/users/' + name + '/repos');
    }

    service.getUserRepo = getUserRepo;

    return service;
  });