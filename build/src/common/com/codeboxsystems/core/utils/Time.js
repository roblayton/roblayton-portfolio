/**
 * @class
 * @name core.utils.Time
*/
define(function()
{
    var Time = function() {};

    /**
     * @name core.utils.Time#currentDate
     * @function
     * @static
     * @return {} month + '/' + day + '/' + year
    */
    Time.currentDate = function() {
        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var year = d.getFullYear();

        return month + '/' + day + '/' + year;
    };

    /**
     * @name core.utils.Time#currentTime
     * @function
     * @static
     * @return {} hours + ':' + mins + ':' + secs
    */
    Time.currentTime = function() {
        var d = new Date();
        var hours = d.getHours();
        var mins = d.getMinutes();
        var secs = d.getSeconds();

        mins = mins < 10 ? '0' + mins : mins;

        return hours + ':' + mins + ':' + secs;
    };

    /**
     * @name core.utils.Time#msToHms
     * @function
     * @static
     * @param {} ms
    */
    Time.msToHms = function(ms) {
        var hours = ms / 3600000;
        var minutes = (hours % 1) * 60;
        var seconds = (minutes % 1) * 60;

        return {
            hours: Math.floor(hours),
            minutes: Math.round(minutes),
            seconds: Math.round(seconds)
        };
    };

    return Time;
});