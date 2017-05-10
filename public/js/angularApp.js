let app = angular.module('appRetailer', ['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
    $routeProvider.when('/', {
        "templateUrl": "allProducts.html",
        "controller": "allProductsCtrl"
    })
    .when('/update', {
        "templateUrl": "updateProduct.html",
        "controller": "updateProductCtrl"
    })
    .when('/insert', {
        "templateUrl": "insert.html",
        "controller": "insertCtrl"
    });
});
