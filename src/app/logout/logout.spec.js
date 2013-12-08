/**
 * @author: Rob Layton
 */
describe('Unit', function() {
	describe('LogoutCtrl', function() {
		// Mocks
		var $location;

		// Controller
		var ctrl;

		// Scope
		var $scope;

        // Utils
		// Load the module
		beforeEach(module('app.logout'));

		beforeEach(inject(function($controller, _$location_, $rootScope) {
			// Mock the dependencies
			$location = _$location_;
			$scope = $rootScope.$new();

			// Set up the controller
			ctrl = $controller('LogoutCtrl', {
				$scope: $scope,
				$location: $location
			});
		}));

        // Root level tests
		it('should have a LogoutCtrl', function() {
			expect(ctrl).toBeTruthy();
		});

		describe('#logout', function() {
			it('should clear set isLoggedIn to false and reroute to the login page', inject(function($location) {
                expect($scope.currUser).toBeNull();
				expect($location.path()).toEqual('/login');
			}));
		});
	});
});
