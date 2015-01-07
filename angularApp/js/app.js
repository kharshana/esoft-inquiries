var app = angular.module("myApp", ['ngStorage']);

app.controller("controller1", function ($scope,$localStorage,$http) {
    
    $scope.$storage = $localStorage;

    $scope.$storage.people = [{
        name: "kasun",
        age: "21",
        gender: "Male"
    }];

    //$scope.people = [];

    $scope.getData = function () {
        $scope.$storage.people.push({
            name: $scope.details.name,
            age: $scope.details.age,
            gender: $scope.details.gender
        });
    };

    $scope.removePerson = function (index) {
        $scope.$storage.people.splice(index, 1);
    };

    console.log($scope.$storage.people);
});