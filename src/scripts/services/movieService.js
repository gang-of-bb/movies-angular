define(['app'], function(gobbmovies){

	gobbmovies.service('movieService', function ($http) {

		var host = 'http://gangofbb.bhtz.fr';

		/**
		 * get all movie
		 * @return {[type]}
		 */
		this.getAll = function(callback){
			$http.get(host+'/api/movies').success(function(data, status, headers, config){
				console.log(data);
				callback(data);
			});
		};

		/**
		 * get movie by Id
		 * @param  {Integer}   movieId
		 * @param  {Function} callback
		 */
		this.get = function(movieId, callback){
			$http.get(host+'/api/movies/'+movieId).success(function(data, status, headers, config){
				callback(data);
			});
		};
	});

});