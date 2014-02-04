define(['app'], function(gobbmovies) {
    gobbmovies.directive('whenScrolled', function() {
        return {
            restrict: 'AEC',
            link: function($scope, $element, $attrs) {

                //
                // Check for scrolling on element.
                //
                var raw = $element[0];
                $element.bind('scroll', function() {
                    if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                        $scope.$apply($attrs.whenScrolled);
                    }
                });
            }
        };
    });
});