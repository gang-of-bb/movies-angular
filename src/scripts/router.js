/**
 * gobbmovies router.
 */
define(['app', 'controllers/movieController', 'controllers/movieShowController'] , 
	function (gobbmovies, movieController, movieShowController) {

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
	}]);
	
});