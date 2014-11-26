angular.module('repo-controller', ['git-service'])
  .controller('RepoCtrl', function (gitService) {
    var vm = this;

    gitService.getUserRepo('e-schultz')
      .then(function (response) {
        vm.repoList = response.data;
      });

  });