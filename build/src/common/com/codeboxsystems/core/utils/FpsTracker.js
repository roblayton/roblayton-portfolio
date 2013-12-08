/**
 * @class
 * @name core.utils.FpsTracker
 * @requires stats.js
*/
define(['dom/primitives/Elem', 'dom/utils/DomSniper', 'libs/three.js/stats'], function(Elem, DomSniper) {
    var FpsTracker = function() {
        var self = this;
        Elem.call(this);

        // add Stats.js - https://github.com/mrdoob/stats.js
        this.stats = new Stats();
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.bottom = '0px';
        DomSniper.appendChild(document.body, this.stats.domElement);
    };

    FpsTracker.prototype.update = function() {
        this.stats.update();
    };

    return FpsTracker;
});
