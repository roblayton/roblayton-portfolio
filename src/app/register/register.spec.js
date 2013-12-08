/**
 * @author: Rob Layton
 */
describe('Unit', function() {
	describe('RegisterCtrl', function() {
		// Mocks
		var $location, LoginService;

		// Controller
		var ctrl;

		// Scope
		var $scope;

        // Utils
		// Load the module
		beforeEach(module('app.register'));

		beforeEach(inject(function($controller, _$location_, $rootScope, _LoginService_) {
			// Mock the dependencies
			$location = _$location_;
			$scope = $rootScope.$new();
			LoginService = _LoginService_;

			// Spy on all of the service's methods
			spyOn(LoginService, 'register').andCallThrough();

			// Set up the controller
			ctrl = $controller('RegisterCtrl', {
				$scope: $scope,
				$location: $location
			});
		}));

        // Root level tests
		it('should have a RegisterCtrl', function() {
			expect(ctrl).toBeTruthy();
		});

		describe('#register', function() {
			it('should register a new user', inject(function($location) {
                // Nothing more to test that the LoginService spec doesn't take care of
			}));
		});
	});
});
