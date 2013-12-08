define(['dom/primitives/Elem'], function(Elem) {
    var Sprite = function(src, options) {
        Elem.call(this, options);

        this.img = new Image();
        this.img.src = src;
    };

    return Sprite;
});
