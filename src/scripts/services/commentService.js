define(['app'], function(gobbmovies){
	gobbmovies.service('commentService', ['$http' ,function ($http) {

	
		var url = 'http://gangofbb.bhtz.fr/api/comments';

		/**
		 * add new comment
		 */
		this.add = function(comment, callback){
			$http.post(url, comment, {withCredentials: true}).success(function(data, status, headers, config){
				callback(data);
			});
		};
	}]);
});