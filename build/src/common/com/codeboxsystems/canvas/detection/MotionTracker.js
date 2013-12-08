define(function() {
    var MotionTracker = function(canvas, context, options) {

        var lastImageData;
        var contextBlended = canvas.getContext('2d');

        this.update = function(image) {
            // Blend
			var width = canvas.width;
			var height = canvas.height;
			// get webcam image data
			var sourceData = context.getImageData(0, 0, width, height);
			// create an image if the previous image doesn’t exist
			if (!lastImageData) {
                lastImageData = context.getImageData(0, 0, width, height);
            }
			// create a ImageData instance to receive the blended result
			var blendedData = context.createImageData(width, height);
			// blend the 2 images
			differenceAccuracy(blendedData.data, sourceData.data, lastImageData.data);
			// draw the result in a canvas
			contextBlended.putImageData(blendedData, 0, 0);
			// store the current webcam image
			lastImageData = sourceData;

            if (options.callback) {
                options.callback(contextBlended);
            }
        };

        var fastAbs = function(value) {
            // equivalent to Math.abs();
            return (value ^ (value >> 31)) - (value >> 31);
        };

        var difference = function(target, data1, data2) {
			// blend mode difference
				if (data1.length != data2.length) {
                    return null;
                }
				var i = 0;
				while (i < (data1.length * 0.25)) {
					target[4*i] = data1[4*i] === 0 ? 0 : fastAbs(data1[4*i] - data2[4*i]);
					target[4*i+1] = data1[4*i+1] === 0 ? 0 : fastAbs(data1[4*i+1] - data2[4*i+1]);
					target[4*i+2] = data1[4*i+2] === 0 ? 0 : fastAbs(data1[4*i+2] - data2[4*i+2]);
					target[4*i+3] = 0xFF;
					++i;
				}
        };

		var threshold = function(value) {
			return (value > 0x15) ? 0xFF : 0;
		};
		
		var differenceAccuracy = function(target, data1, data2) {
			if (data1.length != data2.length) {
                return null;
            }
			var i = 0;
			while (i < (data1.length * 0.25)) {
				var average1 = (data1[4*i] + data1[4*i+1] + data1[4*i+2]) / 3;
				var average2 = (data2[4*i] + data2[4*i+1] + data2[4*i+2]) / 3;
				var diff = threshold(fastAbs(average1 - average2));
				target[4*i] = diff;
				target[4*i+1] = diff;
				target[4*i+2] = diff;
				target[4*i+3] = 0xFF;
				++i;
			}
		};
    };

    return MotionTracker;
});
