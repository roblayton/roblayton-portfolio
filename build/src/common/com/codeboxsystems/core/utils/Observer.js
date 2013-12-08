define(['core/utils/ArrayMod'], function(ArrayMod) {
    var Observer = function() {
        this.fns = [];
    };

    Observer.prototype.subscribe = function(fn) {
        this.fns.push(fn);
    };

    Observer.prototype.unsubscribe = function(fn) {
        this.fns = ArrayMod.remove(this.fns, fn);
    };

    Observer.prototype.fire = function(o, thisObj) {
        var scope = thisObj || window; // Best implementation?

        for(var i = 0, len = this.fns.length; i < len; i++) {
            this.fns[i].call(scope, o);
        }
    };

    return Observer;
});
