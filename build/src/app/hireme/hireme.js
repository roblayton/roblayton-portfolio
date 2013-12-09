angular.module('app.hireme', ['ui.state', 'codeboxsystems.data.PortfolioDataService'])

.config(function config($stateProvider) {
	$stateProvider.state('hireme', {
		url: '/hireme',
		views: {
			"main": {
				controller: 'HireMeCtrl',
				templateUrl: 'hireme/hireme.tpl.html'
			}
		},
		data: {
			pageTitle: 'Hire Me'
		}
	});
})

.controller('HireMeCtrl', function DashboardCtrl($scope, $rootScope, $location, PortfolioDataService) {
	$scope.fetch = function() {
		console.log('SkillsCtrl.fetch');
		var callbacks = {
			onSuccess: function(skills) {
				$scope.skills = skills;
			},
			onErr: function(err) {
				console.log(err.message);
			}
		};
        PortfolioDataService.fetchSkillsByUser($rootScope.currUser, callbacks);
	};

    $scope.remove = function(prop) {
        prop.active = false;
    };

    $scope.fetch();
})

;

