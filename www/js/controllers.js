angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('Allpackage', function($scope, $http) {
  $http.get('http://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.archlinux.org%2Ffeeds%2Fpackages%2F').then(function(response){
          $scope.all_packages = response.data.items
        })

})

.controller('Extra', function($scope, $http) {
  $http.get('http://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.archlinux.org%2Ffeeds%2Fpackages%2Fall%2Fextra%2F').then(function(response){
          $scope.extra_packages = response.data.items
        })
})

.controller('Core', function($scope, $http) {
  $http.get('http://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.archlinux.org%2Ffeeds%2Fpackages%2Fall%2Fcore%2F').then(function(response){
          $scope.core_packages = response.data.items
        })
})

.controller('Community', function($scope, $http) {
  $http.get('http://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.archlinux.org%2Ffeeds%2Fpackages%2Fall%2Fcommunity%2F').then(function(response){
          $scope.community_packages = response.data.items
        })
})
