angular.module('app.blog', ['ui.state', 'placeholders', 'ui.bootstrap', 'ngSanitize', 'codeboxsystems.ui.buttonsimple', 'codeboxsystems.data.PortfolioDataService', 'codeboxsystems.data.FeedService'])

.config(function config($stateProvider) {
	$stateProvider.state('blog', {
		url: '/blog',
		views: {
			"main": {
				controller: 'BlogCtrl',
				templateUrl: 'blog/blog.tpl.html'
			}
		},
		data: {
			pageTitle: 'Blog'
		}
	});
})

.controller('BlogCtrl', function BlogCtrl($scope, $rootScope, $location, $sanitize, PortfolioDataService, FeedService) {
	$scope.fetch = function() {
		PortfolioDataService.fetchSkillsByUser($rootScope.currUser, {
			onSuccess: function(skills) {
				$scope.skills = skills;
			},
			onErr: function(err) {
				console.log(err.message);
			}
		});

        FeedService.parseFeed('http://roblayton.tumblr.com/rss').then(function(res) {
    console.log(res.data.responseData.feed);
            $scope.feeds = res.data.responseData.feed.entries;
        });
	};

    $scope.content = '<span>uo</span>';
	$scope.copySkills = function() {
		var str = "I'm interested in hiring you because you are proficient in: \n";
		var skills = $scope.skills;
		for (var i = 0, iLen = skills.length; i < iLen; i++) {
			var skill = skills[i];
			for (var j = 0, jLen = skill.sets.length; j < jLen; j++) {
				var value = skill.sets[j].value[0];
				if (value.active) {
					str += value.title + '\n';
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
				if (value.active) {
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

