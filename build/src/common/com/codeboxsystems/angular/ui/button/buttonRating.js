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
                    stars+= '<i class="icon-star-empty" style="font-size: 0.6em;"></i>';
                } else {
                    //stars+= '<i class="icon-star-empty" style="font-size: 0.5em; color: #666;"></i>';
                }
                i++;
            }

            element[0].innerHTML = $scope.ngModel.value[0].title + '<br/>' + stars + '<span style="font-size: 0.7em"> ' + $scope.ngModel.rating + ' </span>';
            //element[0].innerHTML = $scope.ngModel.value[0].title + '<br/><span style="font-size: 0.7em; color: #666">' + $scope.ngModel.rating + '/5</span>';
            //element[0].innerHTML = $scope.ngModel.value[0].title + '<br/><span style="font-size: 0.7em; color: #666"><i class="icon-star"></i>' + $scope.ngModel.rating + '</span>';
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
