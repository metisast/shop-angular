'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.bootstrap', 'app-products', 'app-pages', 'ngRoute'])

.config([
    '$routeProvider', function($routeProvide){
        $routeProvide
            .when('/',{
                templateUrl: 'template/home.html',
                controller: 'GetAllProductsController'
            })
            .when('/about',{
                templateUrl: 'template/about.html',
                controller: 'GetStaticPages'
            })
            .when('/services',{
                templateUrl: 'template/services.html',
                controller: 'GetStaticPages'
            })
            .when('/contact',{
                templateUrl: 'template/contact.html',
                controller: 'GetStaticPages'
            })
            .otherwise({
                redirectTo: "/"
            });
    }
]);
