angular.module('app.social', ['ui.state', 'placeholders', 'ui.bootstrap', 'codeboxsystems.ui.button', 'codeboxsystems.data.PortfolioDataService'])

.config(function config($stateProvider) {
	$stateProvider.state('social', {
		url: '/social',
		views: {
			"main": {
				controller: 'SocialCtrl',
				templateUrl: 'social/social.tpl.html'
			}
		},
		data: {
			pageTitle: 'Social'
		}
	});
})

.controller('SocialCtrl', function SocialCtrl($scope, $rootScope, $location, PortfolioDataService) {
	$scope.fetch = function() {
		console.log('SocialCtrl.fetch');
		PortfolioDataService.fetchSkillsByUser($rootScope.currUser, {
			onSuccess: function(skills) {
				$scope.skills = skills;
			},
			onErr: function(err) {
				console.log(err.message);
			}
		});
		PortfolioDataService.fetchSocialByUser($rootScope.currUser, {
			onSuccess: function(social) {
				$scope.social = social;
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
