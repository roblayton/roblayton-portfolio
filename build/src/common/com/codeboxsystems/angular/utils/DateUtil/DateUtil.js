angular.module('codeboxsystems.utils.DateUtil', [])

.factory('DateUtil', function() {
	return {
		getFormattedDate: function() {
			var todayTime = new Date();
			return todayTime.getFullYear() + "/" + (todayTime.getMonth() + 1) + "/" + todayTime.getDay();
		},
		calcTotal: function(inStartDate, inEndDate) {
			var today = this.getFormattedDate();
			var day = 1000 * 60 * 60 * 24 * 365 / 12;
			var startDate = this.parseDate(inStartDate);
			var endDate = this.parseDate(inEndDate === 'Present' ? today: inEndDate);
			var parsedEndDate = new Date(endDate);
			var parsedStartDate = new Date(startDate);
			return Math.round((parsedEndDate.getTime() - parsedStartDate.getTime()) / day);
		},
		parseDate: function(input, format) {
			format = format || 'yyyy-mm-dd'; // default format
			var parts = input.match(/(\d+)/g),
			i = 0,
			fmt = {};
			// extract date-part indexes from the format
			format.replace(/(yyyy|dd|mm)/g, function(part) {
				fmt[part] = i++;
			});

			return new Date(parts[fmt['yyyy']], parts[fmt['mm']] - 1, parts[fmt['dd']]);
		},
		genTotalTime: function(months) {
			var years = months / 12 > 1 ? months / 12: 0;
			var remMonths = months % 12;

			var yearPlrl = years >= 2 ? 'years': 'year';
			var yearStmt = years > 0 ? Math.floor(years) + ' ' + yearPlrl: '';

			var bridge = years >= 1 && remMonths > 0 ? ' and ': '';

			var monthPlrl = remMonths >= 2 ? 'months': 'month';
			var monthStmt = remMonths > 0 ? bridge + remMonths + ' ' + monthPlrl: '';

			return yearStmt + monthStmt;
		},

		dateToReadable: function(date) {
            if (date == 'Present') {
                return date;
            }
			date = date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3");
			var formatted = this.parseDate(date);
			return (formatted.getMonth() + 1) + '/' + formatted.getFullYear();
		}
	};
});

