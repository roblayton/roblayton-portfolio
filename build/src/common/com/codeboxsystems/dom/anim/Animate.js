define(['AnimateHelper'], function(AnimateHelper){
    var Animate = function() {};

    Animate.fadeIn = function(el, callback) {
        AnimateHelper.fadeIn(el, callback);
    };

    Animate.fadeOut = function(el, callback) {
        AnimateHelper.fadeOut(el, callback);
    };

    return Animate;
});
