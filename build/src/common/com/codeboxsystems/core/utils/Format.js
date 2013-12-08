/**
 * @class
 * @name core.utils.Format
*/
define(function()
{
    var Format = function() {};

    /**
     * @name core.utils.Format#pad
     * @function
     * @static
     * @param {} number
     * @param {} digits
     * @return {} (number < (digits - 1) * 10 ? '0' : '') + number
    */
    Format.pad = function(number, digits) {
        return (number < (digits - 1) * 10 ? '0' : '') + number;
    };

    return Format;
});