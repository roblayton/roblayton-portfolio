angular.module('codeboxsystems.ui.button', [])

.directive('buttonToggle', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            ngModel: '='
        },
        link: function($scope, element, attr) {
            element[0].innerHTML = $scope.ngModel.title;
            var classToToggle = attr.buttonToggle;

            element.bind('click', function() {
                $scope.ngModel.active = !$scope.ngModel.active;
                $scope.$apply();
                if ($scope.ngModel.active) {
                  element.addClass(classToToggle);
                } else {
                  element.removeClass(classToToggle);
                }
            });

            $scope.$watch(function() {
                if ($scope.ngModel.active) {
                  element.addClass(classToToggle);
                } else {
                  element.removeClass(classToToggle);
                }
            });
        }
    };
});
