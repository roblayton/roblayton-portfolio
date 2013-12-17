angular.module('org.ngmodules.ngClipboard', []).
value('ZeroClipboardPath', 'assets/zeroclipboard/ZeroClipboard.swf').
directive('clipCopy', ['$window', 'ZeroClipboardPath', function($window, ZeroClipboardPath) {
	return {
		scope: {
			clipCopy: '&',
			clipClick: '&'
		},
		restrict: 'A',
		link: function(scope, element, attrs) {
			// Create the clip object
			var clip = new ZeroClipboard(element, {
				moviePath: ZeroClipboardPath
			});

			// Create the tooltip
			//var tooltip = $(element[0]).children('.tooltip');
			//tooltip.tooltip();
			clip.on('mousedown', function(client) {
                $('.alert').show();
                $('.link').hide();
                setTimeout(function() {
                    $('.alert').hide();
                    $('.link').show();
                }, 1000);

				client.setText(scope.$eval(scope.clipCopy));
				if (angular.isDefined(attrs.clipClick)) {
					scope.$apply(scope.clipClick);
				}
			});
		}
	};
}]);

