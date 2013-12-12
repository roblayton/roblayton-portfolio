angular.module('app.education', ['ui.state', 'placeholders', 'ui.bootstrap', 'codeboxsystems.ui.button', 'codeboxsystems.data.PortfolioDataService'])

.config(function config($stateProvider) {
	$stateProvider.state('education', {
		url: '/education',
		views: {
			"main": {
				controller: 'EducationCtrl',
				templateUrl: 'education/education.tpl.html'
			}
		},
		data: {
			pageTitle: 'Education'
		}
	});
})

.controller('EducationCtrl', function EducationCtrl($scope, $rootScope, $location, PortfolioDataService) {
	$scope.fetch = function() {
		console.log('EducationCtrl.fetch');
		PortfolioDataService.fetchSkillsByUser($rootScope.currUser, {
			onSuccess: function(skills) {
				$scope.skills = skills;
			},
			onErr: function(err) {
				console.log(err.message);
			}
		});
		PortfolioDataService.fetchEducationByUser($rootScope.currUser, {
			onSuccess: function(education) {
				$scope.education = education;
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
