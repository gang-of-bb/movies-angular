define(['app'], function(gobbmovies){
	gobbmovies.service('categoryService', ['$http' , function ($http) {
	
		var host = 'http://gangofbb.bhtz.fr/api/';
	
		/**
		 * get all
		 */
		this.getAll = function(callback){
			$http.get(host + 'categories').success(function(data, status, headers, config){
				callback(data);
			});
		};
	}]);
});