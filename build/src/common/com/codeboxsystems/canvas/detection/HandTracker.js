define(['libs/js-handtracking/src/cv', 'libs/js-handtracking/src/handtracking'], function() {
	var HandTracker = function(canvas, context, options) {
		// Adapted code from https://code.google.com/p/js-handtracking/
		var tracker = new HT.Tracker();
		var image = context.createImageData(canvas.width * 0.2, canvas.height * 0.2);
		var candidate;

		this.update = function(image) {
			candidate = tracker.detect(image);

			if (candidate) {
				options.callback(candidate);
			}

			if (options.debug) {
				draw(candidate);
			}
		};

		var draw = function(candidate) {
			if (candidate) {
				drawHull(candidate.hull, "red");
				drawDefects(candidate.defects, "blue");
			}

			context.putImageData(createImage(tracker.mask, image), canvas.width - image.width, canvas.height - image.height);
		};

		var drawHull = function(hull, color) {
			var len = hull.length,
			i = 1;

			if (len > 0) {
				context.beginPath();
				context.lineWidth = 3;
				context.strokeStyle = color;

				context.moveTo(hull[0].x, hull[0].y);
				for (; i < len; ++i) {
					context.lineTo(hull[i].x, hull[i].y);
				}

				context.stroke();
				context.closePath();
			}
		};

		var drawDefects = function(defects, color) {
			var len = defects.length,
			i = 0,
			point;

			if (len > 0) {
				context.beginPath();
				context.lineWidth = 3;
				context.strokeStyle = color;

				for (; i < len; ++i) {
					point = defects[i].depthPoint;
					context.strokeRect(point.x - 4, point.y - 4, 8, 8);
				}

				context.stroke();
				context.closePath();
			}
		};

		var createImage = function(imageSrc, imageDst) {
			var src = imageSrc.data,
			dst = imageDst.data,
			width = imageSrc.width,
			span = 4 * width,
			len = src.length,
			i = 0,
			j = 0,
			k = 0;

			for (i = 0; i < len; i += span) {

				for (j = 0; j < width; j += 5) {

					dst[k] = dst[k + 1] = dst[k + 2] = src[i];
					dst[k + 3] = 255;
					k += 4;

					i += 5;
				}
			}

			return imageDst;
		};
	};

	return HandTracker;
});
