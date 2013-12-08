/**
 * @class
 * @name dom.shapes.Circle
 * @requires dom.primitives.Elem.js
 * @requires dom.utils.Detector.js
 * @param {} options
*/
define(['dom/primitives/Elem', 'dom/utils/Detector'], function(Elem, Detector) {
    var Circle = function(options) {
        var self = this;

        Elem.call(this, options);

        if (options.css.width === undefined) {
            throw new Error('Must define a width');
        }

        this.unit = Detector.unit(options.css.width);

        this.el.style.borderRadius = (parseInt(options.css.width, 10) / 2) + this.unit;
        this.el.style.MoxBorderRadius = (parseInt(options.css.width, 10) / 2) + this.unit;
    };

    return Circle;
});
