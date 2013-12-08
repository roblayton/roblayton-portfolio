/**
 * @author: Rob Layton
 */

 describe('Unit Test', function() {
    describe('AccountCtrl', function() {
        // Mocks
        var $location, LoginService;

        // Controller
        var ctrl;

        // Scope
        var $scope;

        // Load the module
        beforeEach(module('app.account'));

        beforeEach(inject(function($rootScope, $controller, _$location_, _LoginService_) {
            // Mock the dependencies
            $location = _$location_;
            $scope = $rootScope.$new();
            LoginService = _LoginService_;

            // Spy on all of the service's methods;
            spyOn(LoginService, 'changePassword').andCallThrough();

            // Set up the controller
            ctrl = $controller('AccountCtrl', {
                $scope: $scope,
                $location: $location
            });

            // Need to be logged in for these tests
            LoginService.login('test', 'test', function() {
                console.log('Login successful!!');
            });
        }));

        it('should have an AccountCtrl', function() {
            expect(ctrl).toBeTruthy();
        });

        describe('#changePassword', function() {
            it("should call LoginService.changePassword", function() {
                $scope.changePassword();
                expect(LoginService.changePassword).toHaveBeenCalled();
            });
        });
        

    });
 });
