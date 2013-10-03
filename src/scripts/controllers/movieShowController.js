define(['app', 'services/movieService'], function(gobbmovies, movieService){

	gobbmovies.controller('movieShowController' , ['$scope', '$routeParams', 'movieService', 
		function ($scope, $routeParams, movieService) {

		var movieId = $routeParams.id;

		/**
		 * Attributes
		 */
    	$scope.movie = {};
    	$scope.comments = [];
		$scope.newComment = { movieId : movieId, content : ""};

		movieService.get(movieId, function(data){
			$scope.movie = data;
		});

  	}]);

});