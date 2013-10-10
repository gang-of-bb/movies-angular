define([
		'app',
		'services/movieService',
		'services/commentService',
		'directives/comment/commentsDirective'
	], function(gobbmovies, movieService, commentService, commentsDirective){

	gobbmovies.controller('movieShowController' , ['$rootScope', '$scope', '$routeParams', 'movieService', 'commentService', 
		function ($rootScope, $scope, $routeParams, movieService, commentService) {

		var movieId = $routeParams.id;

		/**
		 * Attributes
		 */
    	$scope.movie = {};

		movieService.get(movieId, function(data){ 
			$scope.movie = data; 
		});

		/**
		 * toggle id 
		 * @param  {[type]} islike [description]
		 * @return {[type]}        [description]
		 */
		$scope.like = function(islike){
			if(islike){
				movieService.like(movieId, function(data){
					if(data == 'liked'){
						$scope.movie.isliked = true; 
						$rootScope.$broadcast('addFavoriteMovie', $scope.movie);
					}
				});
			}else{
				movieService.dislike(movieId, function(data){ 
					if(data == 'disliked'){
						$scope.movie.isliked = false;
						$rootScope.$broadcast('removeFavoriteMovie', $scope.movie);
					}
				});
			}
		}

  	}]);

});