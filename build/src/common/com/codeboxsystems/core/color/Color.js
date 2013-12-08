/**
 * @class
 * @name core.color.Color
*/
define(function()
{
    var Color = function() {};

    /**
     * @name core.color.Color#tint
     * @function
     * @static
     * @param {} hex
     * @param {} percent
     * @return {} '#' + ((0 | (1 << 8) + r + (256 - r) * percent / 100).toString(16)).substr(1) + ((0 | (1 << 8) + g + (256 - g) * percent / 100).toString(16)).substr(1) + ((0 | (1 << 8) + b + (256 - b) * percent / 100).toString(16)).substr(1)
    */
    Color.tint = function(hex, percent) {
        // Strip the leading # if it's there
        hex = hex.replace(/^\s*#|\s*$/g, '');

        // Convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
        if (hex.length == 3) {
            hex = hex.replace(/(.)/g, '$1$1');
        }

        var r = parseInt(hex.substr(0, 2), 16),
            g = parseInt(hex.substr(2, 2), 16),
            b = parseInt(hex.substr(4, 2), 16);

        return '#' + ((0 | (1 << 8) + r + (256 - r) * percent / 100).toString(16)).substr(1) + ((0 | (1 << 8) + g + (256 - g) * percent / 100).toString(16)).substr(1) + ((0 | (1 << 8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
    };

    return Color;
});
