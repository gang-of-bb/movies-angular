define([
		'app',
		'services/movieService',
		'services/categoryService',
		'toastr',
		'directives/whenScrolledDirective',
		'directives/niceScrollDirective'
	], 
	function(gobbmovies, movieService, categoryService, toastr, whenScrolledDirective, niceScrollDirective){

		gobbmovies.controller('movieController' , ['$scope', 'movieService', 'categoryService',
				function ($scope, movieService, categoryService) {

				/**
				* Attributes
				*/
				$scope.movies = [];
				$scope.categories = [];
				$scope.searchFilter = null;
				$scope.searchForm = { keyword : null, categoryId : null, offset:0, limit: 12 };
				var endOfMoviesData = false;
				var currentOffset = 0;

				/**
				* initialization
				*/
				$scope.init = function(){
					movieService.getAll({offset:0, limit: 12 }, function(data){
						$scope.movies = data;
						currentOffset = data.length;
						endOfMoviesData = data.length == 0;
					});
					categoryService.getAll(function(data){
						$scope.categories = data;
					});
				};

				/**
				 * get movies by search query
				 */
				 $scope.getMoviesByQuery = function(categoryId){
				 	$scope.searchForm.categoryId = categoryId;
				 	movieService.getAll(this.searchForm, function(data){
				 		$scope.movies = data;
				 		currentOffset = data.length;
				 		endOfMoviesData = data.length == 0;
				 	});
				 };

				 /**
				  * get next movies
				  */
				 $scope.getNextMovies = function(){
				 	var query = {
				 		keyword : this.searchForm.keyword,
				 		categoryId : this.searchForm.categoryId,
				 		offset: currentOffset,
				 		limit: 12
				 	};

				 	if(!endOfMoviesData){
					 	movieService.getAll(query, function(data){
					 		if(data.length > 0){
								for (var i = 0; i < data.length; i++) {
									$scope.movies.push(data[i]);
								};
								currentOffset = currentOffset + 12;
					 		}else{
					 			endOfMoviesData = true;
					 			toastr.warning('no more movies for this criteria !', 'gangofbb');
					 		}
					 	});
				 	}
				 };

				 $scope.init();
			}]);
	});