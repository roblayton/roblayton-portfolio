angular.module('canvasjs.chart', [])

.directive('canvasjsChart', function() {
    return {
        link: function(scope, elem, attr) {
            scope.$watch('adCounters', function(newValue, oldValue) {
				if (newValue === oldValue) {
					return;
				}

                var chart = new CanvasJS.Chart($(elem[0]).attr('id'), newValue);
                chart.render();
            });
        }
    };
});
