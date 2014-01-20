angular.module('app.portfolio', ['ui.state', 'placeholders', 'ui.bootstrap', 'codeboxsystems.ui.buttonsimple', 'codeboxsystems.data.PortfolioDataService'])

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
