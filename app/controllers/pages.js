"use strict"

var pages = angular.module('app-pages', []);

pages.controller('GetStaticPages', function($scope, $location, $http){
    $scope.path = $location.path();

    $http.get('database'+$scope.path+'.json').success(function(data){
        $scope.data = data;
    }).error(function(){
        console.log('error');
    });
});