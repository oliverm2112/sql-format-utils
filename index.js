var dateFormat = require('dateformat');

exports.arrayToSQLList = function (arr) {
	return '\'' + arr.join('\',\'') + '\'';
};

exports.listToSQLList = function (list) {
	var listArr = list.split(',');
	return exports.arrayToSQLList(listArr);
};

exports.formatDateForSQL = function (date) {
	return dateFormat(date, 'yyyy-mm-dd HH:MM:ss');
};

exports.escapeSingleQuotes = function (string) {
	return string ? string.replace(/'/g, "\'") : null;
};
