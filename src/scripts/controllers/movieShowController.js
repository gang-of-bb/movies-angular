define(['app', 'services/movieService', 'services/commentService'], function(gobbmovies, movieService, commentService){

	gobbmovies.controller('movieShowController' , ['$rootScope', '$scope', '$routeParams', 'movieService', 'commentService', 
		function ($rootScope, $scope, $routeParams, movieService, commentService) {

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
		$scope.removeComment = function(comment){
			commentService.delete(comment, function(){
				$scope.movie.comments.items.splice($scope.movie.comments.items.indexOf(comment), 1);
			});
		};

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
						$rootScope.$broadcast('handleBroadcast');
					}
				});
			}else{
				movieService.dislike(movieId, function(data){ 
					if(data == 'disliked'){
						$scope.movie.isliked = false;
					}
				});
			}
		}

  	}]);

});