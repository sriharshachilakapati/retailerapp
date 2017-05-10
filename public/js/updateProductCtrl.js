app.controller('updateContactCtrl', function($scope, $http, $location)
{
    $scope.productId = window.product;

    $http.get('/find/byId?id=' + window.product)
        .then(result => ($scope.product = result.data));

    $scope.update = function()
    {
        $http({
            "method": "POST",
            "url": "/update",
            "headers": {
                "Content-Type": "application/json"
            },
            "data": {
                "number": window.product,
                "updated": {
                    "id": $scope.product.id,
                    "name": $scope.product.name,
                    "price": $scope.product.price
                }
            }
        }).then(result =>
        {
            if (result.data.error)
                alert(result.data.error);
            else
                $location.path('/');
        });
    };

    $scope.cancel = function()
    {
        $location.path('/');
    };
});
