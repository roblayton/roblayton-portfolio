/*
 * @author Rob Layton
 * @example
 
    In the Controller:
    var modalOptions = {
        closeButtonText: 'Overwrote Cancel',
        actionButtonText: 'Overwrote OK',
        headerText: 'Overwrote title',
        bodyText: 'Overwrote body text'
    };

    BootstrapModal.showModal({},
    modalOptions).then(function(result) {
        console.log('You clicked OK');
    });

 */
angular.module('codeboxsystems.ui.BootstrapModal', ['ui.bootstrap'])

.factory('BootstrapModal', function($modal) {

	var modalDefaults = {
		backdrop: true,
		keyboard: true,
		modalFade: true,
		templateUrl: 'com/codeboxsystems/angular/ui/BootstrapModal/tpl/bootstrap-modal.tpl.html'
	};

	var modalOptions = {
		closeButtonText: 'Cancel',
		actionButtonText: 'OK',
		headerText: 'Continue?',
		bodyText: 'Are you sure?'
	};

	return {

		showModal: function(customModalDefaults, customModalOptions) {
			if (!customModalDefaults) {
                customModalDefaults = {};
            }

			customModalDefaults.backdrop = 'static';
			return this.show(customModalDefaults, customModalOptions);
		},

		show: function(customModalDefaults, customModalOptions) {

            // Use temp objects to prevent cross-contamination from...
            // everything that's implementing this singleton service
            var tempModalDefaults = {};
            var tempModalOptions = {};

            // If custom params exist, map it to the defaults and...
            // ...store it into the temp objects
			angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);
			angular.extend(tempModalOptions, modalOptions, customModalOptions);

            // Create a Controller
			if (!tempModalDefaults.controller) {
				tempModalDefaults.controller = function($scope, $modalInstance) {
					$scope.modalOptions = tempModalOptions;
					$scope.modalOptions.ok = function(result) {
						$modalInstance.close(result);
					};
					$scope.modalOptions.close = function(result) {
						$modalInstance.dismiss('cancel');
					};
				};
			}

			return $modal.open(tempModalDefaults).result;
		}
	};
});
