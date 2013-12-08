/**
 * @class
 * @name dom.primitives.Elem
 * @param {} options
*/
define(['dom/utils/DomSniper'], function(DomSniper) {
    var Elem = function(options) {
        var self = this;
        options = options || {};

        // Element detection
        var getEl = function() {
            if (options.el) {
                return options.el;
            } else if (options.type) {
                return document.createElement(options.type);
            } else {
                return document.createElement('div');
            }
        };

        this.el = getEl();

        var setSpecial = function(key, value) {
            switch(key) {
                case 'x':
                    setCss({
                        left: value
                    });
                    break;
                case 'y':
                    setCss({
                        top: value
                    });
                    break;
                case 'width':
                    setCss({
                        width: value
                    });
                    break;
                case 'height':
                    setCss({
                        height: value
                    });
                    break;
            }

            self[key] = value;
        };

        var setCss = function(options) {
            for (var css in options) {
                self.el.style[css] = options[css];
            }
        };

        this.appendChild = function(target) {
            DomSniper.appendChild(self.el, target);
        };

        this.appendTo = function(target) {
            target.appendChild(self.el);
        };
        
        // Constructor

        this.set = function(options) {
            // Attributes
            if (options.attr) {
                for (var attr in options.attr) {
                    var prop = attr === 'className' ? 'class' : attr; // need className because 'class' is reserved
                    self.el.setAttribute(prop, options.attr[attr]);
                }
            }

            if (options.css) {
                setCss(options.css);
            }

            for (var o in options) {
                switch (o) {
                    case 'el':
                    case 'attr':
                    case 'css':
                        break;

                    default:
                        setSpecial(o, options[o]);
                        break;
                }
            }
        };

        this.set(options);

        // Appending
        this.insert = function(type, target) {
            switch (type) {
                case 'child':
                    DomSniper.appendChild(self.el, target);
                    break;
                case 'parent':
                    DomSniper.appendChild(target, self.el);
                    break;
            }
        };

        // Add this to init phase
        if (options.insert) {
            this.insert(options.insert.type, options.insert.target);
        }
    };

    return Elem;
});
