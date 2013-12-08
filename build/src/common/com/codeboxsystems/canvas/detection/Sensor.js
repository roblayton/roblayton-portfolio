define(['dom/sprite/Sprite', 'dom/shapes/Circle'], function(Sprite, Circle) {
	var Sensor = function(container, path, options) {
		var self = this;
		options = options || {};

		this.name = options.name !== undefined ? options.name: '1';
		this.x = options.x !== undefined ? options.x: 0;
		this.y = options.y !== undefined ? options.y: 0;
		this.width = options.width !== undefined ? options.width: 64;
		this.height = options.height !== undefined ? options.height: 64;
        this.backgroundColor = options.backgroundColor !== undefined ? options.backgroundColor : '#FF0000';

		var sprite = new Sprite(path, {
			name: this.name,
			x: this.x,
			y: this.y,
			width: this.width,
			height: this.height,
			append: {
				type: 'child',
				target: container
			}
		});

		var node = new Circle({
			css: {
				position: 'absolute',
				top: this.y + 'px',
				left: this.x + 'px',
				width: this.width + 'px',
				height: this.height + 'px',
				backgroundColor: this.backgroundColor
			},
			append: {
				type: 'child',
				target: container
			}
		});

		this.hit = function() {
			node.set({
				css: {
					backgroundColor: '#00FF00'
				}
			});
			setTimeout(function() {
				node.set({
					css: {
						backgroundColor: '#FF0000'
					}
				});
			},
			300);
		};

		this.move = function() {
			sprite.set({
				x: self.x + 'px',
				y: self.y + 'px'
			});
			node.set({
				x: self.x + 'px',
				y: self.y + 'px'
			});
		};
	};

	return Sensor;
});

