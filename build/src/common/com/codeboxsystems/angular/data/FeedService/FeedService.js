/*
 * @author Rob Layton
 * @description
 * @example
 * 
 */
angular.module('codeboxsystems.data.FeedService', [])

.factory('FeedService', function($http) {
	return {
		parseFeed: function(url) {
			return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=2.0&num=100&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
		}
	};
});

