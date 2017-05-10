app.controller('insertCtrl', function($scope, $http, $location)
{
    $scope.cancel = function()
    {
        $location.path('/');
    };

    $scope.insert = function()
    {
        $http({
            "method": "POST",
            "url": "/insert",
            "headers": {
                "Content-Type": "application/json"
            },
            "data": {
                "id": $scope.product.id,
                "name": $scope.product.name,
                "price": $scope.product.price
            }
        }).then(result =>
        {
            if (result.data.error)
                alert(result.data.error);
            else
                $location.path('/');
        });
    };
});
