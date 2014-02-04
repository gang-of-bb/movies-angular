/**
 * gobbmovies router.
 */
define([
        'app',
        'controllers/movie/movieController',
        'controllers/movie/movieShowController',
        'controllers/user/profileController',
        'controllers/user/userShowController',
        'services/userService',
        'directives/movie/favoriteMoviesDirective'
    ],
    function(gobbmovies, movieController, movieShowController, userService) {

        //
        // Define application router.
        //
        return gobbmovies.config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/', {
                        controller: 'movieController',
                        templateUrl: '/templates/movie/index.html'
                    }).
                when('/movies/:id', {
                    templateUrl: '/templates/movie/show.html',
                    controller: 'movieShowController'
                }).
                when('/profile', {
                    templateUrl: '/templates/user/profile.html',
                    controller: 'profileController'
                }).
                when('/users/:id', {
                    templateUrl: '/templates/user/show.html',
                    controller: 'userShowController'
                }).
                otherwise({
                    redirectTo: '/'
                });
            }
        ])

        //
        // Get user after application start.
        //
        .run(['$rootScope', 'userService',
            function($rootScope, userService) {

                userService.getUser(function(user) {
                    if (user) {
                        $rootScope.user = user;
                    }
                });
            }
        ]);

    });