describe('e2e', function() {
	var url = '/base/build/index.html';
	describe('smoke test', function() {

		it('initial state', function() {
			// Trigger state change: Load page
			browser().navigateTo(url);

			// Check rendered HTML: Top heading is correct, and ng-view content has correct heading
			expect(element('div.masthead a').text()).toContain('Logo');

            // ===================
            // /login Logging in
            // ===================

			// Check URL partial: /login
			expect(browser().window().hash()).toEqual('/login');

			// Check rendered HTML
			expect(element('h1.page-header').text()).toContain('Login');
            expect(element('form input#username:visible').count()).toEqual(1);
            expect(element('form input#password:visible').count()).toEqual(1);
            expect(element('form button#login:visible').count()).toEqual(1);
            expect(element('form button#logout:visible').count()).toEqual(0);

			// Fill out the form and login
			input('username').enter('test');
			input('password').enter('test');
			element('form button#login').click();

			// Check that user was redirected to dashboard, indicating success
			expect(browser().window().hash()).toEqual('/dashboard');

            // ===================
            // /login Logging out
            // ===================

			browser().navigateTo('#/logout');

			// Check that user was redirected to login, indicating success
			expect(browser().window().hash()).toEqual('/login');
		});

	});
});

