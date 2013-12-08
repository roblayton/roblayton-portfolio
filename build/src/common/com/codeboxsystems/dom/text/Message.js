/**
 * @class
 * @name dom.text.Message
 * @requires dom.primitives.Elem.js
 * @param {} content
 * @param {} options
*/
define(['dom/primitives/Elem'], function(Elem) {
    var Message = function(content, options) {
        var self = this;
        this.content = content;
        options = options || {};
        Elem.call(this, options);

        this.el.innerHtml = this.content;
    };

    return Message;
});
