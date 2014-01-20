angular.module('codeboxsystems.ui.buttonrating', [])

.directive('buttonRating', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            ngModel: '='
        },
        link: function($scope, element, attr) {
            // Build out the stars
            var stars = '';
            var i = 0;
            while(i < 5) {
                if (i < $scope.ngModel.rating) {
                    stars+= '<i class="icon-star"></i>';
                } else {
                    stars+= '<i class="icon-star-empty"></i>';
                }
                i++;
            }

            element[0].innerHTML = $scope.ngModel.value[0].title + '<br/>' + stars + ' ' + $scope.ngModel.rating;
            var classToToggle = attr.buttonRating;

            element.bind('click', function() {
                $scope.ngModel.value[0].active = !$scope.ngModel.value[0].active;
                $scope.$apply();
                if ($scope.ngModel.value[0].active) {
                  element.addClass(classToToggle);
                } else {
                  element.removeClass(classToToggle);
                }
            });

            $scope.$watch(function() {
                if ($scope.ngModel.value[0].active) {
                  element.addClass(classToToggle);
                } else {
                  element.removeClass(classToToggle);
                }
            });
        }
    };
});
