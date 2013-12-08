/*
 * @author Rob Layton
 * @description
 * @example
 * 
 */
angular.module('codeboxsystems.data.PortfolioDataService', ['codeboxsystems.mocks.PortfolioDataServiceMocks'])

// Factory because no need to create a new instance...
// ...and because the class needs to create a client instance
.factory('PortfolioDataService', function(PortfolioDataServiceMocks) {
	// If the user is already logged in, set the userId...
	// ...from the session
	var client = new PortfolioDataServiceMocks();

	return {
		fetchUser: function(id, callbacks) {
			try {
				var user = client.fetchUser(id);

				if (callbacks.onSuccess) {
					callbacks.onSuccess(user);
				}
			} catch(err) {
				if (callbacks.onErr) {
					callbacks.onErr(err);
				}
			}
		},
		fetchSkillsByUser: function(user, callbacks) {
			try {
				var skills = client.fetchSkillsByUser(user);

				if (callbacks.onSuccess) {
					callbacks.onSuccess(skills);
				}
			} catch(err) {
				if (callbacks.onErr) {
					callbacks.onErr(err);
				}
			}
		},
		fetchExperienceByUser: function(user, callbacks) {
			try {
				var exp = client.fetchExperienceByUser(user);

				if (callbacks.onSuccess) {
					callbacks.onSuccess(exp);
				}
			} catch(err) {
				if (callbacks.onErr) {
					callbacks.onErr(err);
				}
			}
		},
		getTotalTenure: function() {
			return client.getTotalTenure();
		}
	};
});

