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
})

;

