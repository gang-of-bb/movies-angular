/**
 * TODO
 */
define(['app', 'controllers/movieController'] , function (gobbmovies, movieController) {
	return gobbmovies.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
		.when('/', 
		{
			controller: 'movieController',
			templateUrl: '/templates/movie/index.html'
		});
	}]);
});