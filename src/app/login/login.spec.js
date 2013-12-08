/**
 * @author: Rob Layton
 */
describe('Unit', function() {
	describe('LoginCtrl', function() {
		// Mocks
		var $location, LoginService;

		// Controller
		var ctrl;

		// Scope
		var $scope;

        // Utils
		// Load the module
		beforeEach(module('app.login'));

		beforeEach(inject(function($controller, _$location_, $rootScope, _LoginService_) {
			// Mock the dependencies
			$location = _$location_;
			$scope = $rootScope.$new();
			LoginService = _LoginService_;

			// Spy on all of the service's methods
			spyOn(LoginService, 'login').andCallThrough();

			// Set up the controller
			ctrl = $controller('LoginCtrl', {
				$scope: $scope,
				$location: $location
			});
		}));

        // Root level tests
		it('should have a LoginCtrl', function() {
			expect(ctrl).toBeTruthy();
		});

		describe('#login', function() {
			it('should redirect the user to the dashboard after a successful login', inject(function($location) {

                $scope.username = 'admin';
                $scope.password = 'admin';
                $scope.login();
                expect(LoginService.login).toHaveBeenCalled();
                expect($scope.currUser).toBeDefined();
                expect($location.path()).toEqual('/dashboard');
			}));
		});
	});
});
