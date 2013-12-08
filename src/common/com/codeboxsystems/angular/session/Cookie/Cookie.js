/*
 * @author Rob Layton
 * @description
 * @example
 * 
 */
angular.module('codeboxsystems.session.Cookie', [])

// Factory because no need to create a need instance and...
// ...because the class is responsible for creating the value
.factory('Cookie', function() {
	var fetchValue = function(name) {
		var aCookie = document.cookie.split("; ");
		for (var i = 0; i < aCookie.length; i++) {
			// A name/value pair (a crumb) is separated by an equal sign
			var aCrumb = aCookie[i].split("=");
			if (name === aCrumb[0]) {
				var value = '';
				try {
					value = angular.fromJson(aCrumb[1]);
				} catch(e) {
					value = unescape(aCrumb[1]);
				}
				return value;
			}
		}
		// A cookie with the requested name does not exist
		return null;
	};

    return {
        // Calling this method invoke because it handles both...
        // ...fetch routing and creation
        invoke: function(name, options) {
            if (arguments.length === 1) {
                return fetchValue(name);
            }

            var cookie = name + '=';
            if (typeof options === 'object') {
                var expires = '';
                cookie += (typeof options.value === 'object') ? angular.toJson(options.value) + ';': options.value + ';';
                if (options.expires) {
                    var date = new Date();
                    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                    expires = date.toGMTString();
                }
                cookie += (!options.session) ? 'expires=' + expires + ';': '';
                cookie += (options.path) ? 'path=' + options.path + ';': '';
                cookie += (options.secure) ? 'secure;': '';
            } else {
                cookie += options + ';';
            }
            document.cookie = cookie;
        },
        remove: function(name) {
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        },
        removeAll: function(name) {
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                this.remove(cookies[i].split('=')[0]);
            }
        }
    };
});

