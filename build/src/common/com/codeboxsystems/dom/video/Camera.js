define(['dom/utils/Detector', 'dom/primitives/Elem'], function(Detector, Elem) {
	var Camera = function(container, options) {
        console.log(options);
		var self = this;

		var init = function() {
			// Determine whether to create a video element
			self.video = new Elem({
				type: 'video',
				attr: {
					autoplay: '',
					width: window.innerWidth,
					height: window.innerHeight
                },
                // Need mixin
                css: {
                    transform: 'rotateY(180deg)',
                    webkitTransform: 'rotateY(180deg)',
                    mozTransform: 'rotateY(180deg)'
                 },
                append: {
                    type: 'child',
                    target: container
                }
			}).el;

			// Not showing vendor prefixes.
			navigator.getUserMedia({
				video: true,
				audio: true
			},
			function(stream) {
				if (window.webkitURL) {
					self.video.src = window.webkitURL.createObjectURL(stream);
				} else if (video.mozSrcObject !== undefined) {
					self.video.mozSrcObject = stream;
				} else {
					self.video.src = stream;
				}
				if (options.callback) {
					options.callback();
				}
				// Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
				// See crbug.com/110938.
				self.video.onloadedmetadata = function(e) {
					// Ready to go
				};
			},
			function() {
				console.log('Rejected');
			});
		};

		// Check for getUserMedia
		navigator.getUserMedia = Detector.getUserMedia;
		if (navigator.getUserMedia) {
			// Good to go!
			init();
		} else {
			alert('getUserMedia() is not supported in your browser');
		}
	};

	return Camera;
});

