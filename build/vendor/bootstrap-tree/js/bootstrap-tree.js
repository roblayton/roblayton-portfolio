angular.module('bootstrap.tree', [])

.directive('bootstrapTree', function() {
	return {
		link: function(scope, element, attrs) {
			// Remove the existing element if necessary
			var removeNodes = function() {
				$(element).empty();
			};

			// Init call for building the tree
			var buildTree = function(obj) {
				buildRootNode(obj);
			};

			var buildRootNode = function(obj) {
				var ul = $('<ul/>').appendTo(element);
				for (var key in obj) {
					var li = $('<li/>', {}).appendTo(ul);
					var span = $('<span/>', {
						text: ' ' + key + ' ',
						class: 'badge badge-success'
					}).appendTo(li);
					$('<i/>', {
						class: 'icon-plus-sign'
					}).prependTo(span);
					$('<input/>', {
						type: 'checkbox',
						value: key
					}).appendTo(li);

					// Add a check box
					//
					// ----
					if (! (obj[key] instanceof Array)) {
						buildSubNode(obj[key], li, key);
					}
				}
			};

			var buildSubNode = function(obj, elem, name) {
				for (var key in obj) {
					if ((typeof obj[key] == 'object') && ! (obj[key] instanceof Array)) {
						var ul = $('<ul/>').appendTo(elem);
						var li = $('<li/>').appendTo(ul);
						var span = $('<span/>', {
							text: ' ' + key + ' ',
							class: 'badge badge-warning'
						}).appendTo(li);
						$('<i/>', {
							class: 'icon-plus-sign'
						}).prependTo(span);
						$('<input/>', {
							type: 'checkbox',
							value: name + '.' + key
						}).appendTo(li);
						buildSubNode(obj[key], li, name + '.' + key);
					} else {
						if (obj[key] instanceof Array) {
							for (var i = 0, len = obj[key].length; i < len; i++) {
								buildTertiaryNode(obj[key][i], elem, name);
							}
						} else {
							buildTertiaryNode(obj[key], elem, name);
						}
					}
				}
			};

			var buildTertiaryNode = function(obj, elem, name) {
				var ul = $('<ul/>').appendTo(elem);
				var li = $('<li/>').appendTo(ul);
				$('<span/>', {
					text: ' ' + obj + ' ',
				}).appendTo(li);
				$('<input/>', {
					type: 'checkbox',
					value: name + '.' + obj,
					class: 'leaf'
				}).appendTo(li);
			};

			var makeTreeFunctional = function() {
				$(element).addClass('tree');
				$(element).find('li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
				$(element).find('li.parent_li > span').on('click', function(e) {
					var children = $(this).parent('li.parent_li').find(' > ul > li');
					if (children.is(":visible")) {
						children.hide('fast');
						$(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
					} else {
						children.show('fast');
						$(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
					}
					e.stopPropagation();
				});
			};

            // 
            var addCheckboxListeners = function() {
                $(element).find('input:checkbox').change(function() {
                    var checked = $(this).prop('checked');
                    $(this).parent().find('input:checkbox').each(function() {
                        $(this).prop('checked', checked);
                    });

                    // Smart checkboxes
                    if($(this).prop('checked') === true) {
                        if ($(this).hasClass('leaf')) {
                            $(this).parent().parent().parent().children('input:checkbox').prop('checked', true);
                        }
                    }

                    // Compile a list of checked keys
                    var checked = [];
                    $(element).find('input:checkbox').each(function() {
                        if (this.checked) {
                            checked.push($(this).val());
                        }
                    });
                    scope.checked = checked;
                });
            };

            // Watch for changes
			scope.$watch('map', function(newValue, oldValue) {
				if (newValue === oldValue) {
					return;
				}
				removeNodes();
				buildTree(newValue);
				makeTreeFunctional();
                addCheckboxListeners();
			});
		}
	}
});
