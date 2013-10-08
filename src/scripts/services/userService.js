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

		/**
		 * get favorite movies by user id.
		 * @param  {[type]}   userId
		 * @param  {Function} callback
		 */
		this.getFavoriteMovies = function(userId, callback){
			var url = 'http://gangofbb.bhtz.fr/api/users/'+userId+'/movies';
			$http.get(url, {withCredentials: true}).success(function(data, status, headers, config){
				callback(data);
			});
		};
	}]);
});