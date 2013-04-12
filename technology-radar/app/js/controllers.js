'use strict';

/* Controllers */

function ListController($scope, Technologies) {
    $scope.technologies = Technologies.query();
}

function RadarController($scope, Technologies) {
    $scope.technologies = Technologies.query();
}
//RadarController.$inject = ['$scope', 'Technologies'];

function DetailController($scope, Technologies, $routeParams) {
    $scope.technology = Technologies.get( { id: $routeParams.id});
}
//DetailController.$inject = ['$scope', 'Technologies', '$routeParams'];

function AddController(Technologies, $scope, $location) {
    $scope.onSubmit=function() {
        var tech = new Technologies($scope.technology);
        tech.$save(function(res, headers) {
            $location.path('/detail/'+res._id);
        });
    };
}
