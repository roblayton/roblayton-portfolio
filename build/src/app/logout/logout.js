angular.module('app.logout', ['ui.state', 'placeholders', 'ui.bootstrap'])

.config(function config($stateProvider) {
	$stateProvider.state('logout', {
		url: '/logout',
		views: {
			"main": {
				controller: 'LogoutCtrl'
			}
		},
		data: {
			pageTitle: 'Logout'
		}
	});
})

.controller('LogoutCtrl', function LogoutCtrl($scope, $rootScope, $location) {
    $rootScope.isLoggedIn = false;
    $location.path('/login');
})
;
