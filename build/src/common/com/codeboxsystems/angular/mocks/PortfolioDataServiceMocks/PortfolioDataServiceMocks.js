/*
 * @author Rob Layton
 */
angular.module('codeboxsystems.mocks.PortfolioDataServiceMocks', [])

.factory('PortfolioDataServiceMocks', function() {
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
			title: 'HTML5',
			active: false
		},
		{
			id: '4',
			title: 'CSS',
			active: false
		},
		{
			id: '5',
			title: 'PHP',
			active: false
		},
		{
			id: '6',
			title: 'Spanish',
			active: false
		},
		{
			id: '7',
			title: 'German',
			active: false
		}];

		var companiesDb = [{
			id: '1',
			title: 'Adcade'
		},
		{
			id: '2',
			title: 'Florida Virtual School'
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
			title: 'Director of Web Engineering'
		}];

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
		}];

		var usersDb = [{
			id: '1',
			title: 'Rob Layton',
			skills: [{
				categories: ['1'],
				set: [{
					value: '6',
					rating: 2
				},
				{
					value: '7',
					rating: 3
				}]
			},
			{
				categories: ['2'],
				set: [{
					value: '1',
					rating: 2
				},
				{
					value: '2',
					rating: 3
				},
				{
					value: '3',
					rating: 3
				},
				{
					value: '4',
					rating: 5
				},
				{
					value: '5',
					rating: 3
				}]
			}],
			experience: [{
				company: '1',
				titles: ['4', '1'],
				achievements: ['1', '2'],
				skills: ['1', '2', '3', '4']
			},
			{
				company: '2',
				titles: ['3', '2'],
				achievements: ['3'],
				skills: ['5']
			}]
		}];

		// Private 
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
								skills: fetchData(exp.skills, skillsDb)
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

