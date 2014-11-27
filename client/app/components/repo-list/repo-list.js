angular.module('repo-list', [])
  .directive('repoList', function () {
    return {
      templateUrl: '/app/components/repo-list/repo-list.html',
      scope: {
        list: '='
      },
      restrict: 'E'
    };
  });