angular.module('app.home', ['ui.state', 'codeboxsystems.data.PortfolioDataService'])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config($stateProvider) {
	$stateProvider.state('home', {
		url: '/home',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/home.tpl.html'
			}
		},
		data: {
			pageTitle: 'Home'
		}
	});
})

/**
 * And of course we define a controller for our route.
 */
.controller('HomeCtrl', function HomeCtrl($scope, $rootScope, $location, PortfolioDataService) {
	$scope.fetch = function() {
		console.log('SkillsCtrl.fetch');
		PortfolioDataService.fetchSkillsByUser($rootScope.currUser, {
			onSuccess: function(skills) {
				$scope.skills = skills;
			},
			onErr: function(err) {
				console.log(err.message);
			}
		});
		PortfolioDataService.fetchWorkloadData({
			onSuccess: function(workload) {
				$scope.workload = workload;
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
})

.directive('workload', function() {
	return {
		restrict: 'A',
		link: function(scope, elem, attr) {
			var render = function() {
				google.load('visualization', '1.0', {
					'packages': ['corechart'],
					'callback': function() {
						var colors = [];

						// Create the data table.
						var data = new google.visualization.DataTable();
						data.addColumn('string', 'Title');
						data.addColumn('number', 'Value');

                        console.log(scope.workload);
						$.each(scope.workload.content[0].slices, function(index, value) {
							data.addRow([value.title, value.value]);
							colors.push(value.backgroundColor);
						});

						// Set chart options
						var options = {
							'title': '',
                            'is3D': true,
							'width': 400,
							'height': 300,
							'backgroundColor': 'transparent',
							'colors': colors,
							'chartArea': {
								'width': '100%',
								'height': '100%'
							}
						};

						// Instantiate and draw our chart, passing in some options.
						var chart = new google.visualization.PieChart(elem[0]);
						chart.draw(data, options);
					}
				});
			};

			scope.$watch('workload', render);
		}
	};
})

;

