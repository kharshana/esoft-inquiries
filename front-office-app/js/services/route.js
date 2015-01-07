// configure our routes
app.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider

    // route for the home page
    .when('/home', {
        title: 'Home',
        templateUrl: 'views/index.html',
        controller: 'mainController'
    })

    // route for the Full Student Registration Page
    .when('/registration', {
        title: 'Full Student Registration',
        templateUrl: 'views/student-full-registration.html'
    })

    // route for the  Quick Registration Page
    .when('/quick-registration', {
        title: 'Quick Student Registration',
        templateUrl: 'views/student-quick-registration.html'
    })

    // route for the  Course Registration Page
    .when('/course-registration', {
        title: 'Course Student Registration',
        templateUrl: 'views/course-registration.html'
    })

    // If 404
    .otherwise({
        redirectTo: '/home'
    });
});