define([
		'app',
		'services/movieService',
		'services/categoryService',
		'toastr'
	], 
		function(gobbmovies, movieService, categoryService, toastr){

				gobbmovies.controller('movieController' , ['$scope', 'movieService', 'categoryService' , 
						function ($scope, movieService, categoryService) {

						/**
						* Attributes
						*/
						$scope.movies = [];
						$scope.categories = [];
						$scope.searchFilter = null;
						$scope.searchForm = { keyword : null, categoryId : null };

						/**
						* initialization
						*/
						$scope.init = function(){
								movieService.getAll(null, function(data){$scope.movies = data;});
								categoryService.getAll(function(data){$scope.categories = data;});
						};

						/**
						 * get movies by search query
						 */
						 $scope.getMoviesByQuery = function(categoryId){
							 	$scope.searchForm.categoryId = categoryId;
							 	movieService.getAll(this.searchForm, function(data){
							 			$scope.movies = data;
							 	});
						 };

						 /**
						  * get next movies
						  */
						 $scope.getNextMovies = function(){
						 		alert('test');
						 		toastr.success('get next movies !', 'infinite scroll');
						 };

						 $scope.init();

					}]);
	});