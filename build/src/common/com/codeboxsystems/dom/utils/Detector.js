/**
 * @class
 * @name dom.utils.Detector
*/
define(['libs/three.js/Detector'], function() {
	var Detector = function() {};

	/**
     * @name dom.utils.Detector#topZIndex
     * @function
     * @static
     * @return {} top
    */
	Detector.topZIndex = function() {
		var top = 0;
		var pageEls = document.getElementsByTagName('*');

		for (var i = 0, len = pageEls.length; i < len; i++) {
			if (pageEls[i].style.zIndex && parseInt(pageEls[i].style.zIndex, 10) > top) {
				top = parseInt(pageEls[i].style.zIndex, 10);
			}
		}
		return top;
	};

	/**
     * @name dom.utils.Detector#isElement
     * @function
     * @static
     * @param {} obj
     * @return {} obj instanceof HTMLElement
    */
	Detector.isElement = function(obj) {
		try {
			//Using W3 DOM2 (works for FF, Opera and Chrom)
			return obj instanceof HTMLElement;
		} catch(e) {
			//Browsers not supporting W3 DOM2 don't have HTMLElement and
			//an exception is thrown and we end up here. Testing some
			//properties that all elements have. (works on IE7)
			return (typeof obj === "object") && (obj.nodeType === 1) && (typeof obj.style === "object") && (typeof obj.ownerDocument === "object");
		}
	};

	/**
     * @name dom.utils.Detector#unit
     * @function
     * @static
     * @param {} value
     * @return {} unit
    */
	Detector.unit = function(value) {
		var map = { // list of all units and their identifying string
			pixel: "px",
			percent: "%",
			inch: "in",
			cm: "cm",
			mm: "mm",
			point: "pt",
			pica: "pc",
			em: "em",
			ex: "ex"
		};

		var unit = value.match(/\D+$/);
		unit = unit === null ? map.pixel: unit[0];
		return unit;
	};

	Detector.webgl = (function() {
		return Detector.webgl;
	})();

	Detector.getUserMedia = (function() {
		return navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
	})();

	return Detector;
});

