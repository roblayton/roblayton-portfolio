angular.module('app.skills', ['ui.state', 'placeholders', 'ui.bootstrap', 'codeboxsystems.data.PortfolioDataService'])

.config(function config($stateProvider) {
	$stateProvider.state('skills', {
		url: '/skills',
		views: {
			"main": {
				controller: 'SkillsCtrl',
				templateUrl: 'skills/skills.tpl.html'
			}
		},
		data: {
			pageTitle: 'Skills'
		}
	});
})

.controller('SkillsCtrl', function SkillsCtrl($scope, $rootScope, $location, PortfolioDataService) {
	$scope.fetch = function() {
		console.log('SkillsCtrl.fetch');
		var callbacks = {
			onSuccess: function(skills) {
				console.log(skills);
				$scope.skills = skills;
			},
			onErr: function(err) {
				console.log(err.message);
			}
		};
		//PortfolioDataService.fetchSkillsByUser($rootScope.user, callbacks);
	};
});

