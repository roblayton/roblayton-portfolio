define(function() {
    // Rename to ObjMod?
    var ArrayMod = function() {};

    ArrayMod.remove = function(arr, elem) {
        for (var i = 0, len = arr.length; i < len; i++) {
            if(arr[i] === elem) {
                arr.splice(i, 1);
                return arr;
            }
        }
    };

    return ArrayMod;

});
