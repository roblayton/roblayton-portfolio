angular.module('app.login', ['ui.state', 'placeholders', 'ui.bootstrap', 'codeboxsystems.data.LoginService'])

.config(function config($stateProvider) {
	$stateProvider.state('login', {
		url: '/login',
		views: {
			"main": {
				controller: 'LoginCtrl',
				templateUrl: 'login/login.tpl.html'
			}
		},
		data: {
			pageTitle: 'Login'
		}
	});
})

.controller('LoginCtrl', function LoginCtrl($scope, $rootScope, $location, LoginService) {
	$scope.login = function() {
		var callbacks = {
			onSuccess: function(user) {
				$rootScope.currUser = user;
				$location.path('/dashboard');
			},
			onErr: function(err) {
				console.log(err.message);
			}
		};
		LoginService.login($scope.username, $scope.password, callbacks);
	};

    $scope.remove = function(prop) {
        prop.active = false;
    };

});

