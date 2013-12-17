angular.module('app.education', ['ui.state', 'placeholders', 'ui.bootstrap', 'codeboxsystems.data.PortfolioDataService'])

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
});
