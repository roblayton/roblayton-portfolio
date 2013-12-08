/**
 * @class
 * @name core.math.Calc
*/
define(function() {
    // Constructor
    var Calc = function() {

    };

    /**
     * @name core.math.Calc#distance
     * @function
     * @static
     * @param {} x1
     * @param {} y1
     * @param {} x2
     * @param {} y2
     * @return {} Math.sqrt((y1 - y2) * (y1 - y2) + (x1 - x2) * (x1 - x2))
    */
    Calc.distance = function(x1, y1, x2, y2) {
        return Math.sqrt((y1 - y2) * (y1 - y2) + (x1 - x2) * (x1 - x2));
    };

    /**
     * @name core.math.Calc#pointsWidth
     * @function
     * @static
     * @param {} points
     * @return {} maxWidth
    */
    Calc.pointsWidth = function(points) {
        var maxWidth = 0;
        for (var i = 1, len = points.length; i < len; i++) {
            var dist = Math.abs(points[i].x - points[i - 1].x);
            maxWidth = dist > maxWidth ? dist : maxWidth;
        }

        return maxWidth;
    };

    /**
     * @name core.math.Calc#pointsHeight
     * @function
     * @static
     * @param {} points
     * @return {} maxHeight
    */
    Calc.pointsHeight = function(points) {
        var maxHeight = 0;
        for (var i = 1, len = points.length; i < len; i++) {
            var dist = Math.abs(points[i].y - points[i - 1].y);
            maxHeight = dist > maxHeight ? dist : maxHeight;
        }

        return maxHeight;
    };

    return Calc;
});
