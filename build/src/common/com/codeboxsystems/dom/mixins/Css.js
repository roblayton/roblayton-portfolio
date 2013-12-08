/**
 * @class
 * @name dom.utils.Css
*/
define(function() {
    var Css = function() {};

    /**
     * @name dom.utils.Css#transform
     * @function
     * @static
     * @param {} el
     * @param {} options
    */
    Css.transform = function(el, options) {
        var formatted = (options.rotateX !== undefined ? ' rotateX(' + options.rotateX + 'deg)' : '') + (options.rotateY !== undefined ? ' rotateY(' + options.rotateY + 'deg)' : '') + (options.rotateZ !== undefined ? ' rotateZ(' + options.rotateZ + 'deg)' : '') + (options.translateX !== undefined ? ' translateX(' + options.translateX + 'deg)' : '') + (options.translateY !== undefined ? ' translateY(' + options.translateY + 'deg)' : '') + (options.translateZ !== undefined ? ' translateZ(' + options.translateZ + 'deg)' : '');

        el.style.mozTransform = formatted;
        el.style.OTransform = formatted;
        el.style.WebkitTransform = formatted;
        el.style.msTransform = formatted;
        el.style.transform = formatted;
    };

    /**
     * @name dom.utils.Css#alpha
     * @function
     * @static
     * @param {} el
     * @param {} alpha
    */
    Css.alpha = function(el, alpha) {
        el.style.opacity = alpha;
        el.style.filter = 'alpha(opacity=' + alpha * 100 + ')';
    };

    return Css;
});
