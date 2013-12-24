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
			title: 'HTML',
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
		},
        {
            id: '32',
            title: 'Backbone',
            active: false
        },
        {
            id: '33',
            title: 'Selenium',
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
			title: 'Designed and developed interactive exhibits, with the task of researching historical case data, conceptualizing, and producing professional presentations for litigation.'
		},
		{
			id: '2',
			title: 'Interacted directly with clients in order to gather real-time feedback during production and advise on ways to best represent the facts of the case.'
		},
		{
			id: '3',
			title: 'Designed and developed an interactive map of the campus lands.'
		},
		{
			id: '4',
			title: 'Wrote a scalable system for managing map data and assets.'
		},
		{
			id: '5',
			title: 'Implemented a cost-efficient workflow for maintaining the map to reduce the dependency on technical expertise.'
		},
		{
			id: '6',
			title: 'Worked with instructional designers to develop e-learning modules.'
		},
		{
			id: '7',
			title: 'Designed and developed interactive advertisements and web content'
		},
		{
			id: '8',
			title: 'Developed mobile-accessible backend systems to allow the team and clients to monitor user-generated content.'
		},
		{
			id: '9',
			title: 'Managed a team of 9 web developers, training them to learn all the core responsibilities of the position and follow proper design and development standards. I was also a hands-on developer who created e-learning applications, assessments, and games.'
		},
		{
			id: '10',
			title: 'Wrote an e-learning toolkit for the team to efficiently produce e-learning applications in a rapid course development environment. The e-learning toolkit is modular, provides a platform to easily build features upon, and is implemented in all courses currently being developed in-house.'
		},
		{
			id: '11',
			title: 'Implemented cost-saving strategies by communicating directly with vendors to enforce web standards and ensure deliverables were produced according to strict guidelines focused on scalability and modularity.'
		},
		{
			id: '12',
			title: 'Filled the roles of Web Developer, Team Lead and Manager. Attended IT Leadership meetings, led Web Development meetings, and led Web Development onboarding.'
		},
		{
			id: '13',
			title: 'Manages and mentors the Web Engineering team and performs code reviews.'
		},
		{
			id: '14',
			title: 'Defines the technical strategy, architecture and standards for design, development, implementation, execution, and maintenance of scalable, multiplatform web frameworks.'
		},
		{
			id: '15',
			title: 'Creates detailed architectural specifications for each product release, and ensures that compliance is met by the development and quality assurance teams.'
		},
		{
			id: '16',
			title: 'Identifies the most efficient, low-cost technical solutions to business problems through the gathering of metrics, product comparisons, and the development of prototypes.'
		},
		{
			id: '17',
			title: 'Integrates agile process, project management tools, source control, automated unit-testing, and analytics.'
		},
		{
			id: '18',
			title: 'Defines the documentation guidelines and workflow to ensure operations are systematic and scalable.'
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
			title: 'BackboneJS Portfolio',
            description: 'This is a single-page application I built using BackboneJS to showcase my professional portfolio.',
			link: 'http://www.roblayton.com/samples/backbonejs_portfolio/'
		}
        ];

		var educationDb = [{
			id: '1',
			title: 'Digital Media, B.A., Interactive Systems Concentration',
            facility: 'University of Central Florida',
			startDate: 'Spring 2004',
			endDate: 'Fall 2008',
            description: 'Combines the multiple domains of technology, communications, and art to provide extended experience in working in multidisciplinary teams on realistic problems.'
            },
            {
			id: '2',
			title: 'Computer Science, B.S.',
            facility: 'Oregon State University',
			startDate: 'Spring 2014',
			endDate: 'Fall 2014',
            description: 'Provides a systems view of computing, emphasizing the interdependence of design, object orientation, and distributed systems and networks, from basic software through systems design.'
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
					value: '3',
					rating: 5
				},
				{
					value: '4',
					rating: 5
				},
				{
					value: '5',
					rating: 4
				},
				{
					value: '7',
					rating: 4
				},
				{
					value: '2',
					rating: 3
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
					value: '9',
					rating: 5
				},
				{
					value: '8',
					rating: 3
				},
				{
					value: '10',
					rating: 3
				},
				{
					value: '33',
					rating: 3
				},
                {
                    value: '32',
                    rating: 2
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
					value: '24',
					rating: 4
				},
				{
					value: '25',
					rating: 4
				},
				{
					value: '17',
					rating: 3
				},
				{
					value: '29',
					rating: 3
				},
				{
					value: '30',
					rating: 3
				},
				{
					value: '26',
					rating: 2
				},
				{
					value: '27',
					rating: 2
				},
				{
					value: '28',
					rating: 2
				},
                {
                    value: '11',
                    rating: 2
                }
                ]
			}],
            portfolio: [{
                value: '1',
				skills: ['1', '3', '4', '8', '12', '13', '32']
            }],
            education: [{
                value: '2'
            }, {
                value: '1'
            }],
			experience: [{
				company: '1',
				titles: ['1'],
				achievements: ['13', '14', '15', '16', '17', '18'],
				skills: ['1', '2', '3', '4', '6', '8', '9', '10', '11', '12', '13', '16', '17', '18', '20', '21', '22', '23', '31', '24', '33'],
				startDate: '2012-04-01',
				endDate: 'Present'
			},
			{
				company: '2',
				titles: ['2'],
				achievements: ['9', '10', '11', '12'],
				skills: ['1', '3', '4', '5', '7', '6', '8', '14', '15', '16', '17', '20', '25', '26', '27'],
				startDate: '2010-07-01',
				endDate: '2012-03-01'
			},
			{
				company: '3',
				titles: ['5'],
				achievements: ['7', '8'],
				skills: ['1', '3', '4', '5', '7', '8', '14', '15', '25', '26', '27'],
				startDate: '2009-11-01',
				endDate: '2010-07-01'
			},
			{
				company: '4',
				titles: ['6', '7'],
				achievements: ['6'],
				skills: ['1', '3', '4', '5', '7', '8', '14', '15', '25', '26', '27'],
				startDate: '2009-08-01',
				endDate: '2009-11-01'
			},
			{
				company: '5',
				titles: ['8', '9'],
				achievements: ['3', '4', '5'],
				skills: ['1', '3', '4', '5', '7', '8', '14', '15', '25', '26', '27', '28'],
				startDate: '2009-05-01',
				endDate: '2009-08-01'
			},
			{
				company: '6',
				titles: ['10'],
				achievements: ['1', '2'],
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
            fetchEducationByUser: function(user) {
                  var education = [];
                  for (var i = 0, len = user.education.length; i < len; i++) {
                      var edu = user.education[i];
                      education.push({
                          value: fetchData(edu.value, educationDb)
                      });
                  }

                  return education;
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
			},
			fetchWorkloadData: function() {
				var chartData = {
					type: 'chart',
					title: 'Daily Workload',
					content: [{
						type: 'pie',
						slices: [{
							title: 'Development',
							value: 3,
							backgroundColor: '#c0440e'
						},
						{
							title: 'Source control',
							value: 1,
							backgroundColor: '#e0440e'
						},
						{
							title: 'Unit testing',
							value: 2,
							backgroundColor: '#e6693e'
						},
						{
							title: 'Automation',
							value: 2,
							backgroundColor: '#ec8f6e'
						},
						{
							title: 'Agile principles',
							value: 2,
							backgroundColor: '#f3b49f'
						},
						{
							title: 'Project management',
							value: 2,
							backgroundColor: '#f6c7b6'
						}]
					}]
				};
				
				return chartData;
			}
		};
	};

	return PortfolioDataServiceMocks;
});

