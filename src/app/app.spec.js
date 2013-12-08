describe('Unit', function() {
	describe('AppCtrl', function() {
		var AppCtrl, $location, $scope;

		beforeEach(module('app'));

		beforeEach(inject(function($controller, _$location_, $rootScope) {
			$location = _$location_;
			$scope = $rootScope.$new();
			AppCtrl = $controller('AppCtrl', {
				$location: $location,
				$scope: $scope
			});
		}));

		it('should have an AppCtrl', inject(function() {
			expect(AppCtrl).toBeTruthy();
		}));
	});
});
