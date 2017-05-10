app.controller('allProductsCtrl', function($scope, $http, $location)
{
    $scope.contacts = [];

    $scope.refreshProducts = function()
    {
        $http.get("/find/all")
            .then(result =>
            {
                $scope.products = result.data;
            });
    }

    $scope.delete = function(id)
    {
        if (!window.confirm("Are you sure want to delete " + id))
            return;

        $http({
            "method": "POST",
            "url": "/remove",
            "headers": {
                "Content-Type": "application/json"
            },
            "data": {
                "id": id
            }
        })
        .then($scope.refreshProducts);
    };

    $scope.edit = function(id)
    {
        window.product = id;
        $location.path('/update');
    };

    $scope.refreshProducts();
});
