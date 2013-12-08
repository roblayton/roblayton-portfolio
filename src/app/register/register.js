angular.module('app.register', ['ui.state', 'placeholders', 'ui.bootstrap', 'codeboxsystems.data.LoginService'])

.config(function config($stateProvider) {
	$stateProvider.state('register', {
		url: '/register',
		views: {
			"main": {
				controller: 'RegisterCtrl',
				templateUrl: 'register/register.tpl.html'
			}
		},
		data: {
			pageTitle: 'Register'
		}
	});
})

.controller('RegisterCtrl', function RegisterCtrl($scope, $rootScope, $location, $q, LoginService) {
    var defer = $q.defer();

	$scope.register = function() {
		console.log('RegisterCtrl.register');

        var callbacks = {
            onSuccess: function() {
                if (!$rootScope.isLoggedIn) {
                    $scope.feedback = {
                        success: true,
                        message: 'Success!'
                    };
                } else {
                    // Should probably launch modal
                    $scope.feedback = {
                        success: true,
                        message: 'Success!'
                    };
                }
            },
            onErr: function(err) {
                $scope.feedback = {
                    success: false,
                    message: err.message
                };
            }
        };

		LoginService.register($scope.username, $scope.password, callbacks);
	};
})
;
