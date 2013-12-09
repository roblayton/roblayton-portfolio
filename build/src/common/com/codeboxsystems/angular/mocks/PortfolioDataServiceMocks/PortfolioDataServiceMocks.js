/*
 * @author Rob Layton
 */
angular.module('codeboxsystems.mocks.PortfolioDataServiceMocks', ['codeboxsystems.utils.DateUtil'])

.factory('PortfolioDataServiceMocks', function(DateUtil) {
	var PortfolioDataServiceMocks = function() {
		var skillsDb = [{
			id: '1',
			title: 'JavaScript',
			active: false
		},
		{
			id: '2',
			title: 'Python',
			active: false
		},
		{
			id: '3',
			title: 'HTML(4/5)',
			active: false
		},
		{
			id: '4',
			title: 'CSS',
			active: false
		},
		{
			id: '5',
			title: 'AS2',
			active: false
		},
		{
			id: '6',
			title: 'Canvas',
			active: false
		},
		{
			id: '7',
			title: 'AS3',
			active: false
		},
		{
			id: '8',
			title: 'jQuery(UI)',
			active: false
		},
		{
			id: '9',
			title: 'AngularJS',
			active: false
		},
		{
			id: '10',
			title: 'ThreeJS',
			active: false
		},
		{
			id: '11',
			title: 'WebGL',
			active: false
		},
		{
			id: '12',
			title: 'NodeJS',
			active: false
		},
		{
			id: '13',
			title: 'MongoDB',
			active: false
		},
		{
			id: '14',
			title: 'PHP',
			active: false
		},
		{
			id: '15',
			title: 'MySQL',
			active: false
		},
		{
			id: '16',
			title: 'Bash Scripting',
			active: false
		},
		{
			id: '17',
			title: 'Regex',
			active: false
		},
		{
			id: '18',
			title: 'Vim',
			active: false
		},
		{
			id: '20',
			title: 'Management',
			active: false
		},
		{
			id: '21',
			title: 'Project Management',
			active: false
		},
		{
			id: '22',
			title: 'Agile',
			active: false
		},
		{
			id: '23',
			title: 'Scrum',
			active: false
		},
		{
			id: '24',
			title: 'Git',
			active: false
		},
		{
			id: '25',
			title: 'Adobe Flash',
			active: false
		},
		{
			id: '26',
			title: 'Adobe Photoshop',
			active: false
		},
		{
			id: '27',
			title: 'Adobe Illustrator',
			active: false
		},
		{
			id: '28',
			title: 'Wordpress',
			active: false
		},
		{
			id: '29',
			title: 'Corel Draw',
			active: false
		},
		{
			id: '30',
			title: 'PowerPoint',
			active: false
		},
		{
			id: '31',
			title: 'Code Reviews',
			active: false
		}
		];

		var companiesDb = [{
			id: '1',
			title: 'Adcade, NYC'
		},
		{
			id: '2',
			title: 'Florida Virtual School'
		},
		{
			id: '3',
			title: 'Monster Media'
		},
		{
			id: '4',
			title: 'Digitec'
		},
		{
			id: '5',
			title: 'University of Central Florida'
		},
		{
			id: '6',
			title: 'The Presentation Group'
		}];

		var titlesDb = [{
			id: '1',
			title: 'Director of Web Engineering'
		},
		{
			id: '2',
			title: 'Team Lead of Web Development'
		},
		{
			id: '3',
			title: 'Web Developer'
		},
		{
			id: '4',
			title: 'Interactive Designer'
		},
		{
			id: '5',
			title: 'Interactive Developer'
		},
		{
			id: '6',
			title: 'HTML Developer'
		},
		{
			id: '7',
			title: 'Contractor'
		},
		{
			id: '8',
			title: 'Web Developer'
		},
		{
			id: '9',
			title: 'Intern'
		},
		{
			id: '10',
			title: 'Interactive Designer'
		}
        ];

		var achievementsDb = [{
			id: '1',
			title: 'Manage and mentor the Web Engineering team'
		},
		{
			id: '2',
			title: 'Performs Code Reviews'
		},
		{
			id: '3',
			title: 'Manage and mentor Web Development'
		}];

		var categoriesDb = [{
			id: '1',
			title: 'Languages'
		},
		{
			id: '2',
			title: 'Programming Languages'
		},
		{
			id: '3',
			title: 'Leadership'
		},
		{
			id: '4',
			title: 'Libraries'
		},
		{
			id: '5',
			title: 'Tools'
		}];

		var portfolioDb = [{
			id: '1',
			title: 'Portfolio',
			link: 'http://www.roblayton.com'
		},
		{
			id: '2',
			title: 'Portfolio 2',
			link: 'http://www.roblayton.com'
		}
        ];

		var socialDb = [{
			id: '1',
			title: 'Tumblr',
			link: 'http://roblayton.tumblr.com'
		},
		{
			id: '2',
			title: 'Twitter',
			link: 'http://twitter.com/roblayton'
		}
        ];

		var usersDb = [{
			id: '1',
			title: 'Rob Layton',
			skills: [
			{
				categories: ['3'],
				set: [{
					value: '20',
					rating: 5
				},
				{
					value: '21',
					rating: 5
				},
				{
					value: '22',
					rating: 5
				},
				{
					value: '23',
					rating: 5
				},
				{
					value: '31',
					rating: 5
				}
                ]
			},
            {
				categories: ['2'],
				set: [{
					value: '1',
					rating: 5
				},
				{
					value: '2',
					rating: 3
				},
				{
					value: '3',
					rating: 5
				},
				{
					value: '4',
					rating: 5
				},
				{
					value: '7',
					rating: 4
				},
				{
					value: '14',
					rating: 2
				},
				{
					value: '15',
					rating: 2
				},
				{
					value: '16',
					rating: 2
				}]
			},
			{
				categories: ['4'],
				set: [{
					value: '6',
					rating: 5
				},
				{
					value: '8',
					rating: 3
				},
				{
					value: '9',
					rating: 5
				},
				{
					value: '10',
					rating: 3
				},
				{
					value: '12',
					rating: 2
				},
				{
					value: '13',
					rating: 2
				}
                ]
			},
			{
				categories: ['5'],
				set: [{
					value: '18',
					rating: 5
				},
				{
					value: '17',
					rating: 3
				},
				{
					value: '24',
					rating: 4
				}
                ]
			}],
            portfolio: [{
                value: '1',
				skills: ['1', '2']
            }, 
            {
                value: '2',
				skills: ['3', '4']
            }],
            social: [{
                value: '1'
            }, 
            {
                value: '2'
            }],
			experience: [{
				company: '1',
				titles: ['1'],
				achievements: ['1', '2'],
				skills: ['1', '2', '3', '4', '6', '8', '9', '10', '11', '12', '13', '16', '17', '18', '20', '21', '22', '23', '31', '24'],
				startDate: '2012-04-01',
				endDate: 'Present'
			},
			{
				company: '2',
				titles: ['2'],
				achievements: ['3'],
				skills: ['1', '3', '4', '5', '7', '6', '8', '14', '15', '16', '17', '20', '25', '26', '27'],
				startDate: '2010-07-01',
				endDate: '2012-03-01'
			},
			{
				company: '3',
				titles: ['5'],
				achievements: ['3'],
				skills: ['1', '3', '4', '5', '7', '8', '14', '15', '25', '26', '27'],
				startDate: '2009-11-01',
				endDate: '2010-07-01'
			},
			{
				company: '4',
				titles: ['6', '7'],
				achievements: ['3'],
				skills: ['1', '3', '4', '5', '7', '8', '14', '15', '25', '26', '27'],
				startDate: '2009-08-01',
				endDate: '2009-11-01'
			},
			{
				company: '5',
				titles: ['8', '9'],
				achievements: ['3'],
				skills: ['1', '3', '4', '5', '7', '8', '14', '15', '25', '26', '27', '28'],
				startDate: '2009-05-01',
				endDate: '2009-08-01'
			},
			{
				company: '6',
				titles: ['10'],
				achievements: ['3'],
				skills: ['1', '3', '4', '5', '7', '8', '14', '15', '25', '26', '27', '29', '30'],
				startDate: '2004-05-01',
				endDate: '2009-05-01'
			}]
		}];

        var totalTenure = 0;

		// Private 
        var formatDates = function() {
            for (var i = 0, iLen = usersDb.length; i < iLen; i++) {
                var user = usersDb[i];
                for (var j = 0, jLen = user.experience.length; j < jLen; j++) {
                    var exp = user.experience[j];
                    var months = DateUtil.calcTotal(exp.startDate, exp.endDate);
                    exp.startDate = DateUtil.dateToReadable(exp.startDate);
                    exp.endDate = DateUtil.dateToReadable(exp.endDate);
                    exp.tenure = DateUtil.genTotalTime(months);
                    exp.months = months;
                    totalTenure += months;
                }
            }

            totalTenure = DateUtil.genTotalTime(totalTenure);
        };

        formatDates();

		var fetchData = function(a, b) {
			var list = [];
			for (var i = 0, iLen = a.length; i < iLen; i++) {
				for (var j = 0, jLen = b.length; j < jLen; j++) {
					var data = b[j];
					if (a[i] == data.id) {
						list.push(data);
					}
				}
			}

			return list;
		};

		// Public API
		return {
            getTotalTenure: function() {
                return totalTenure;
            },
			fetchUser: function(id) {
				for (var i = 0, len = usersDb.length; i < len; i++) {
					var user = usersDb[i];
					if (user.id == id) {
						return user;
					}
				}

				throw new Error('User does not exist');
			},
			fetchSkillsByUser: function(user) {
				var skills = [];

				for (var i = 0, iLen = user.skills.length; i < iLen; i++) {
					var skl = user.skills[i];
					var sets = [];
					for (var j = 0, jLen = skl.set.length; j < jLen; j++) {
						var set = skl.set[j];
						for (var k = 0, kLen = skillsDb.length; k < kLen; k++) {
							var dbSkill = skillsDb[k];
							if (set.value == dbSkill.id) {
								sets.push({
									value: fetchData([set.value], skillsDb),
									rating: set.rating
								});
							}
						}

						if (j == jLen - 1) {
							skills.push({
								categories: fetchData(skl.categories, categoriesDb),
								sets: sets
							});
						}
					}
				}

				if (skills.length > 0) {
					return skills;
				} else {
					throw new Error('No skills for this user');
				}
			},
            fetchPortfolioByUser: function(user) {
                  var portfolio = [];
                  for (var i = 0, len = user.portfolio.length; i < len; i++) {
                      var p = user.portfolio[i];
                      portfolio.push({
                          value: fetchData(p.value, portfolioDb),
                          skills: fetchData(p.skills, skillsDb)
                      });
                  }

                  return portfolio;
            },
            fetchSocialByUser: function(user) {
                  var social = [];
                  for (var i = 0, len = user.social.length; i < len; i++) {
                      var s = user.social[i];
                      social.push({
                          value: fetchData(s.value, socialDb)
                      });
                  }

                  return social;
            },
			fetchExperienceByUser: function(user) {
				var experience = [];

				for (var i = 0, iLen = user.experience.length; i < iLen; i++) {
					var exp = user.experience[i];
					for (var j = 0, jLen = companiesDb.length; j < jLen; j++) {
						var company = companiesDb[j];
						if (exp.company == company.id) {
							experience.push({
								company: company,
								titles: fetchData(exp.titles, titlesDb),
								achievements: fetchData(exp.achievements, achievementsDb),
								skills: fetchData(exp.skills, skillsDb),
								startDate: exp.startDate,
								endDate: exp.endDate,
                                tenure: exp.tenure,
                                months: exp.months
							});
						}
					}
				}

				if (experience.length > 0) {
					return experience;
				} else {
					throw new Error('No experience for this user');
				}
			}
		};
	};

	return PortfolioDataServiceMocks;
});

