angular.module('canvasjs.chart.CanvasJSChartFormatter', [])

.factory('CanvasJSChartFormatter', function() {
    return {
        generateFormatting: function(data) {
            CanvasJS.addColorSet('bootstrap', ['#fbb450', '#5bc0de', '#62c462', '#ee5f5b', '#0088cc']);
            var formatting = {
                title: {
                    text: '',
                    fontFamily: 'inherit',
                    fontSize: 50
                },
                colorSet: 'bootstrap',
                axisX: {
                    labelFontFamily: 'inherit',
                    valueFormatString: 'MMM/DD/YYYY HH:mm'
                },
                axisY: {
                    labelFontFamily: 'inherit'
                },
                data: data,
                zoomEnabled: true
            };

            return formatting;
        } 
    };
})
