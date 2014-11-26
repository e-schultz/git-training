angular.module('git-app', ['git-service', 'ui.router', 'repo-controller',
    'repo-list'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
      url: '/',
      controller: 'RepoCtrl',
      controllerAs: 'repo',
      templateUrl: '/app/sections/repo/repo.html'
    });
  });