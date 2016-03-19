var assert = require('assert');
var dbUtils = require('../index');

describe('Database Format Utilities', function () {

	describe('#toSQLList()', function () {
		it('should return quoted list from array', function () {
			assert.equal(dbUtils.toSQLList([1,2,3,4]), "'1','2','3','4'");
		});
		it('should return quoted list from comma list', function () {
			assert.equal(dbUtils.toSQLList('1, 2, 3, 4'), "'1','2','3','4'");
		});
		it('should return trimmed quoted list from sloppy comma list', function () {
			assert.equal(dbUtils.toSQLList('1,   2,     3,  4'), "'1','2','3','4'");
		});
	});

	describe('#formatDateForSQL()', function () {
		it('should return submitted date formatted for SQL', function () {
			var date = new Date();
			date.setYear(2020);
			date.setMonth(0);
			date.setDate(16);
			date.setHours(17);
			date.setMinutes(45);
			date.setSeconds(12);
			assert.equal(dbUtils.formatDateForSQL(date), '2020-01-16 17:45:12');
		});
	});

	describe('#escapeSingleQuotes()', function () {
		it('should return string with single quotes escaped with default character', function () {
			assert.equal(dbUtils.escapeSingleQuotes("She's got her mother's eyes."), "She\\'s got her mother\\'s eyes.");
		});
		it('should return string with single quotes escaped with custom character', function () {
			assert.equal(dbUtils.escapeSingleQuotes("She's got her mother's eyes.", "'"), "She''s got her mother''s eyes.");
		});
	});
});
