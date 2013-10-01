/**
 * gobbmovies angular application.
 */
require(['jQuery', 'angular', 'router'], function($, angular, router){
	$(function () { // using jQuery because it will run this even if DOM load already happened
    	angular.bootstrap(document , ['gobbmovies']);
  	});
});
