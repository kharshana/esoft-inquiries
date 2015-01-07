/*app.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'views/index.html',
        controller: 'indexController'
    });

    $routeProvider.when('/full-registration', {
        templateUrl: 'views/student-full-registration.html'
        //controller: 'registerController'
    });

    $routeProvider.when('/quick-registration', {
        templateUrl: 'views/student-quick-registration.html'
        //controller: 'registerController'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
    // use the HTML5 History API


});

*/// configure our routes
    app.config(function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'views/index.html',
                controller  : 'indexController', 
                reloadOnSearch: false
            })

            // route for the about page
            .when('/registration', {
                templateUrl : 'views/student-full-registration.html',
                reloadOnSearch: false/*,
                controller  : 'aboutController'*/
            })

            // route for the contact page
            .when('/quick-registration', {
                templateUrl : 'views/student-quick-registration.html',
                reloadOnSearch: false/*,
                controller  : 'contactController'*/
            });
    });