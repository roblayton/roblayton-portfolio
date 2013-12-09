angular.module('app.portfolio', ['ui.state', 'placeholders', 'ui.bootstrap', 'codeboxsystems.ui.button', 'codeboxsystems.data.PortfolioDataService'])

.config(function config($stateProvider) {
	$stateProvider.state('portfolio', {
		url: '/portfolio',
		views: {
			"main": {
				controller: 'PortfolioCtrl',
				templateUrl: 'portfolio/portfolio.tpl.html'
			}
		},
		data: {
			pageTitle: 'Portfolio'
		}
	});
})

.controller('PortfolioCtrl', function PortfolioCtrl($scope, $rootScope, $location, PortfolioDataService) {
	$scope.fetch = function() {
		console.log('PortfolioCtrl.fetch');
		PortfolioDataService.fetchSkillsByUser($rootScope.currUser, {
			onSuccess: function(skills) {
				$scope.skills = skills;
			},
			onErr: function(err) {
				console.log(err.message);
			}
		});
		PortfolioDataService.fetchPortfolioByUser($rootScope.currUser, {
			onSuccess: function(portfolio) {
				$scope.portfolio = portfolio;
			},
			onErr: function(err) {
				console.log(err.message);
			}
		});
	};

    $scope.remove = function(prop) {
        prop.active = false;
    };

	$scope.fetch();
});
