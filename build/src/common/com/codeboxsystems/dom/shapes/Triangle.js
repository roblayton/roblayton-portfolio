/**
 * @class
 * @name dom.shapes.Triangle
 * @requires dom.primitives.Elem.js
 * @param {} options
*/
define(['dom/primitives/Elem', 'dom/utils/Detect'], function(Elem, Detect) {
    // Constructor
    var Triangle = function(options) {
        var self = this;

        Elem.call(this, options);

        this.unit = Detect.unit(options.width);

        this.el.style.borderBottom = this.el.style.width + ' solid ' + this.el.style.backgroundColor;
        this.el.style.borderLeft = this.el.style.width + ' solid transparent';
        this.el.style.borderRight = this.el.style.width + ' solid transparent';
        this.el.style.width = 0;
        this.el.style.height = 0;
        this.el.style.backgroundColor = null;
    };

    return Triangle;
});
