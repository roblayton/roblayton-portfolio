angular.module('app.account', ['ui.state', 'placeholders', 'ui.bootstrap', 'codeboxsystems.ui.BootstrapModal', 'codeboxsystems.data.LoginService'])

.config(function config($stateProvider) {
	$stateProvider.state('account', {
		url: '/account',
		views: {
			"main": {
				controller: 'AccountCtrl',
				templateUrl: 'account/account.tpl.html'
			}
		},
		data: {
			pageTitle: 'Account'
		}
	});
})

.controller('AccountCtrl', function AccountCtrl($scope, $rootScope, BootstrapModal, LoginService) {

	$scope.changePassword = function() {	
        var callbacks = {
            onSuccess: function() {
                $scope.currPass = $scope.newPass = $scope.confirmPass = '';
                $scope.feedback = {
                    success: true,
                    message: 'Success!'
                };
            },
            onErr: function(err) {
                $scope.feedback = {
                    success: false,
                    message: err.message
                };
            }
        };

		LoginService.changePassword($scope.currPass, $scope.newPass, $scope.confirmPass, callbacks);
	};
})
;
