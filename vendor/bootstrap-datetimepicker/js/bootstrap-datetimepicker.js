angular.module('bootstrap.datetimepicker', [])

.directive('bootstrapDatetimepicker', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            $(element).datetimepicker().on('changeDate', function(evt) {
                // Hack for propagating the data to the scope
                var input = element.find('input')[0];
                console.log(input);
                var model = $(input).attr('ng-model');
                scope[model] = input.value;
            });
        }
    };
});

