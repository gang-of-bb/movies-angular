/**
 * gobbmovies angular application.
 */
define([
		'angular',
		'ng-infinite-scroll'
	], function(angular, infiniteScroll){
	var gobbmovies = angular.module('gobbmovies', ['infinite-scroll']);

	gobbmovies.config(['$httpProvider', function($httpProvider) {
	        $httpProvider.defaults.useXDomain = true;
	    }
	]);

	return gobbmovies;
});
	