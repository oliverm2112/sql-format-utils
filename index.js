var dateFormat = require('dateformat');

exports.toSQLList = function (obj) {
	if (obj instanceof Array) {
		return '\'' + obj.join('\',\'') + '\'';
	}
	if ((typeof obj) === 'string') {
		var listArr = obj.split(',');
		listArr.forEach(function(item, i) {
			listArr[i] = listArr[i].trim();
		});
		return '\'' + listArr.join('\',\'') + '\'';
	}
};

exports.formatDateForSQL = function (date) {
	return dateFormat(date, 'yyyy-mm-dd HH:MM:ss');
};

exports.escapeSingleQuotes = function (string, escapeChar) {
	escapeChar = escapeChar || '\\';
	return string ? string.replace(/'/g, escapeChar + "'") : null;
};
