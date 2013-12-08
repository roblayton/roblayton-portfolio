/*
 * @author Rob Layton
 * @description
 * @example
 * 
 */
describe('Unit: Testing codeboxsystems.session.Cookie', function() {
	describe('Cookie', function() {
		// In service unit tests, I always use the service handler...
		// ...regardless of whether factory, service, or provider
		var _Cookie;

        // Utils
        var removeCookies = function(name) {
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                document.cookie = cookies[i].split('=')[0] + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            }
        };

		// Load the module
		beforeEach(module('codeboxsystems.session.Cookie'));

		beforeEach(inject(function(Cookie) {
			// Set up the service
			_Cookie = Cookie;
            removeCookies();
		}));


		describe('#invoke', function() {

			it('should create a cookie with string data and return the value', function() {
				_Cookie.invoke('hello', 'world');
				expect(document.cookie).toEqual('hello=world');
			});

			it('should create a cookie with object data and return the value', function() {
				_Cookie.invoke('hello', {
					value: 'world',
                    expires: 1 // in days
				});
				expect(document.cookie).toEqual('hello=world');
			});

			it('should retrieve a cookie', function() {
				_Cookie.invoke('hello', 'world');
                expect(_Cookie.invoke('hello')).toBeDefined();
			});
		});

        describe('#remove', function() {
            it('should delete a cookie by name', function() {
                document.cookie = 'hello=world;';
				_Cookie.remove('hello');
                expect(document.cookie).toEqual('');
            });
        });

        describe('#removeAll', function() {
            it('should delete all cookies', function() {
                document.cookie = 'hello=world;thisis=space;';
				_Cookie.removeAll();
                expect(document.cookie).toEqual('');
            });
        });
	});
});

