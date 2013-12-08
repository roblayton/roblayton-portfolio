/*
 * @author Rob Layton
 * @description
 * @example
 * 
 */
describe('Unit', function() {
    describe('LoginService', function() {
        var LoginService;
        var callbacks = {
            onSuccess: function(){},
            onErr: function(){}
        };

        // Load the module
        beforeEach(module('codeboxsystems.data.LoginService'));

        beforeEach(inject(function(_LoginService_) {
            // Set up the service
            LoginService = _LoginService_;

			// Spies
            spyOn(callbacks, 'onSuccess').andCallThrough();
            spyOn(callbacks, 'onErr').andCallThrough();
        }));

        describe('#register', function() {
            it('should create a new user and successfully log in', inject(function() {
                LoginService.register('test2', 'test2', callbacks);
                expect(callbacks.onSuccess).toHaveBeenCalled();
                LoginService.login('test2', 'test2', callbacks);
                expect(callbacks.onSuccess).toHaveBeenCalled();
            }));
            it('should fail to create a new user', inject(function() {
                LoginService.register('test', 'test', callbacks);
                expect(callbacks.onErr).toHaveBeenCalled();
            }));
        });

		describe('#login', function() {
			it('should fire the callback after the server processes the request', inject(function() {
                LoginService.login('test', 'test', callbacks);
                expect(callbacks.onSuccess).toHaveBeenCalled();
			}));
			it('should fail to fire callback because of a wrong password', inject(function() {
                LoginService.login('test', 'test1', callbacks);
                expect(callbacks.onErr).toHaveBeenCalled();
			}));
		});

        describe('#changePassword', function() {
            it('should fire the callback after the server processes the request', inject(function() {
                LoginService.changePassword('test', 'test2', 'test2', callbacks);
                expect(callbacks.onSuccess).toHaveBeenCalled();
            }));
            it('should fail to fire callback because of a wrong username', inject(function() {
                LoginService.changePassword('test3', 'test2', 'test2', callbacks);
                expect(callbacks.onErr).toHaveBeenCalled();
            }));
            it('should fail to fire callback because of a wrong confirmed password', inject(function() {
                LoginService.changePassword('test', 'test2', 'test3', callbacks);
                expect(callbacks.onErr).toHaveBeenCalled();
            }));
        });
    });
});
