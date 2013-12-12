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

    $scope.copySkills = function() {
        var str = "I'm interested in hiring you because you are proficient in: \n";
        var skills = $scope.skills;
        for (var i = 0, iLen = skills.length; i < iLen; i++) {
            var skill = skills[i];
            for (var j = 0, jLen = skill.sets.length; j < jLen; j++) {
                var value = skill.sets[j].value[0];
                if (value.active){
                    str+= value.title + '\n';
                }
            }
        }

        return str;
    };
    
    $scope.isActiveSkill = function() {
        var ctr = 0;
        var skills = $scope.skills;
        for (var i = 0, iLen = skills.length; i < iLen; i++) {
            var skill = skills[i];
            for (var j = 0, jLen = skill.sets.length; j < jLen; j++) {
                var value = skill.sets[j].value[0];
                if (value.active){
                    return true;
                }
            }
        }

        return false;
    };

    $scope.remove = function(prop) {
        prop.active = false;
    };

	$scope.fetch();
    $scope.totalTenure = PortfolioDataService.getTotalTenure();
});
