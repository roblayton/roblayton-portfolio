angular.module('app', ['templates-app', 'templates-common', 'app.dashboard', 'app.skills', 'app.experience', 'app.portfolio', 'app.social', 'app.register', 'app.login', 'app.logout', 'app.account', 'ui.state', 'ui.route', 'codeboxsystems.data.PortfolioDataService'])

.config(function myAppConfig($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/dashboard');
})

.run(function run($rootScope, $location, PortfolioDataService) {
	// Automatically set the user
	PortfolioDataService.fetchUser('1', {
		onSuccess: function(user) {
			$rootScope.currUser = user;
		}
	});
	// Need to implement a serverside barrier as well
	$rootScope.$on('$locationChangeStart', function(event, next, current) {
		var route = next.split('/').pop();
		if (!$rootScope.currUser) {
			// User is not logged in, so reroute
			if (route == 'login') {
				// Already going to /login, so no need to redirect
			} else if (route == 'register') {
				// They are permitted to register without logging in
			} else if (route == 'dashboard') {
				// They are permitted to view the dashboard without logging in
			} else if (route == 'skills') {
				// They are permitted to view skills without logging in
			} else if (route == 'experience') {
				// They are permitted to view experience without logging in
			} else {
				$location.path('/login');
			}
		}
	});
})

.controller('AppCtrl', function AppCtrl($scope, $location) {
	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		if (angular.isDefined(toState.data.pageTitle)) {
			$scope.pageTitle = toState.data.pageTitle + ' | app';
		}
	});
})

;

