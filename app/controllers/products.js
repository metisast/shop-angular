"use strict"

var products = angular.module("app-products",[]);


products.controller('GetAllProductsController', function($scope, $http){

    $http.get('database/computers.json').success(function(data){
        console.log(data);
        $scope.products = data;
    }).error(function(){

    });

});

products.controller("GetProductById", function($scope, $routeParams, $http){
    $scope.productId = $routeParams.productId;

    $http.get('database/computers.json').success(function(data){
        $scope.products = data;
    });
});

