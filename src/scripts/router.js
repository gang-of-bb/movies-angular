/**
 * gobbmovies router.
 */
define([
		'app',
		'controllers/movieController',
		'controllers/movieShowController',
		'services/userService',
		'directives/favoriteMoviesDirective'
	],
	function (gobbmovies, movieController, movieShowController, userService) {

	return gobbmovies.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
		.when('/', 
		{
			controller: 'movieController',
			templateUrl: '/templates/movie/index.html'
		}).
		when('/movies/:id',
		{ 
			templateUrl: '/templates/movie/show.html', 
			controller: 'movieShowController'
		}).
		otherwise({ redirectTo: '/' });
	}])
	.run(function($rootScope, userService)
	{
		userService.getUser(function(user){
			$rootScope.user = user;
		});
	});
	
});