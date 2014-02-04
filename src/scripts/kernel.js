//
// Application kernel.
//
require(['jQuery', 'angular', 'router', 'bootstrap'], function($, angular, router, bootstrap) {

    //
    // Bootstrap angular application when jQuery DOM ready.
    //
    $(function() {
        angular.bootstrap(document, ['gobbmovies']);
    });
});