define(['app'], function(gobbmovies){

	gobbmovies.service('movieService', function ($http) {

		var host = 'http://gangofbb.bhtz.fr/api/movies';

		/**
		 * get all movie
		 * @return {[type]}
		 */
		this.getAll = function(query, callback){
			var endpoint = query == null ? host : host+query;
			$http.get(endpoint).success(function(data, status, headers, config){
				callback(data);
			});
		};

		/**
		 * get movie by Id
		 * @param  {Integer}   movieId
		 * @param  {Function} callback
		 */
		this.get = function(movieId, callback){
			$http.get(host+'/'+movieId).success(function(data, status, headers, config){
				callback(data);
			});
		};
	});

});