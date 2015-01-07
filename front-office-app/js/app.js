var app = angular.module("frontOfficeApp", ['ngRoute','angular-loading-bar','ui.bootstrap']);

app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);