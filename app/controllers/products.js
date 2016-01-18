"use strict"

var products = angular.module("app-products",[]);


products.controller('GetAllProductsController', function($scope, $http, $location){

    $http.get('database/computers.json').success(function(data, status, headers, config){
        console.log(data);
        $scope.products = data;
    }).error(function(){

    });

});

