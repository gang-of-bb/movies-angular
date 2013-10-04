define(['app', 'services/movieService', 'services/commentService'], function(gobbmovies, movieService, commentService){

	gobbmovies.controller('movieShowController' , ['$scope', '$routeParams', 'movieService', 'commentService', 
		function ($scope, $routeParams, movieService, commentService) {

		var movieId = $routeParams.id;

		/**
		 * Attributes
		 */
    	$scope.movie = {};
		$scope.newComment = { movieId : movieId, content : ""};

		movieService.get(movieId, function(data){ 
			$scope.movie = data; 
		});

		/**
		 * send comment attach to movie
		 */
		$scope.sendComment = function(){
			commentService.add($scope.newComment, function(comment){
				$scope.newComment.content = "";
				$scope.movie.comments.items.unshift(comment);
			});
		};

		/**
		 * remove own comment
		 */
		$scope.removeComment = function(){
			
		};
  	}]);

});