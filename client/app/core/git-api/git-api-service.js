angular.module('git-api',[])
.constant('GITHUB_API_BASE','https://api.github.com')
.factory('gitApi',function(GITHUB_API_BASE,$http)
{
  var service = {};

  service.get = function(path)
  {
    return $http.get(GITHUB_API_BASE + path);
  };


  return service;

});
