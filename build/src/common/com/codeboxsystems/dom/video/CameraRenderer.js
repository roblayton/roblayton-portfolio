/*
 * @example
 *
 *
 */
define(['dom/primitives/Elem', 'dom/video/Camera', 'canvas/detection/Handtracker', 'canvas/detection/MotionTracker'], function(Elem, Camera, HandTracker, MotionTracker) {
	var CameraRenderer = function(container, options) {
		var self = this;
		var canvas, context;

		var init = function() {
			self.camera = new Camera(container, {
				callback: onStreamHandler
			});

			//var width = 300;
			var ratio = 0.3;
			canvas = new Elem({
				type: 'canvas',
				attr: {
					width: self.camera.video.width * ratio,
					height: self.camera.video.height * ratio
				},
				css: {
					position: 'absolute',
					bottom: '0px',
					right: '0px'
				}
			});

			if (options.video !== false) {
				canvas.appendTo(container);
			}

			context = canvas.el.getContext('2d');

			// Flip the image so the user feels like they're in front of a mirror
			context.translate(canvas.el.width, 0);
			context.scale( - 1, 1);

			//tracker = new HandTracker(canvas, context, options);
			tracker = new MotionTracker(canvas.el, context, options);

		};

		var onStreamHandler = function() {
			// Start ticking
			requestAnimationFrame(function() {
				return onStreamHandler();
			});

			if (self.camera.video.readyState === self.camera.video.HAVE_ENOUGH_DATA) {
				var image = snapshot();
				tracker.update(image);
			}
		};

		var snapshot = function() {
			context.drawImage(self.camera.video, 0, 0, canvas.el.width, canvas.el.height);
			return context.getImageData(0, 0, canvas.el.width, canvas.el.height);
		};

		init();
	};

	return CameraRenderer;
});

