define(['app'], function(gobbmovies){
	gobbmovies.service('userService', ['$http' ,function ($http) {
	
		var host = 'http://gangofbb.bhtz.fr/api/users/self';
	
		/**
		 * get authenticated user
		 */
		this.getUser = function(callback){
			$http.get(host, {withCredentials: true}).success(function(data, status, headers, config){
				callback(data);
			});
		};
	}]);
});