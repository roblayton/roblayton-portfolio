angular.module('app.experience', ['ui.state', 'placeholders', 'ui.bootstrap', 'codeboxsystems.ui.button', 'codeboxsystems.data.PortfolioDataService'])

.config(function config($stateProvider) {
	$stateProvider.state('experience', {
		url: '/experience',
		views: {
			"main": {
				controller: 'ExperienceCtrl',
				templateUrl: 'experience/experience.tpl.html'
			}
		},
		data: {
			pageTitle: 'Experience'
		}
	});
})

.controller('ExperienceCtrl', function ExperienceCtrl($scope, $rootScope, $location, PortfolioDataService) {
	$scope.fetch = function() {
		console.log('ExperienceCtrl.fetch');
		PortfolioDataService.fetchSkillsByUser($rootScope.currUser, {
			onSuccess: function(skills) {
				$scope.skills = skills;
			},
			onErr: function(err) {
				console.log(err.message);
			}
		});
		PortfolioDataService.fetchExperienceByUser($rootScope.currUser, {
			onSuccess: function(experience) {
				$scope.experience = experience;
			},
			onErr: function(err) {
				console.log(err.message);
			}
		});
	};

	$scope.fetch();
});

