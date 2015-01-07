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

    // route for the Add inquiry Page
    .when('/add-inquiry', {
        title: 'Add Inquiry',
        templateUrl: 'views/add-inquiry.html'
    })

    // route for the  My inquiries Page
    .when('/my-inquiries', {
        title: 'My Inquiries',
        templateUrl: 'views/my-inquiries.html'
    })

    // route for the  Commissions Page
    .when('/commission', {
        title: 'Commission',
        templateUrl: 'views/commission.html'
    })

    // If 404
    .otherwise({
        redirectTo: '/home'
    });
});