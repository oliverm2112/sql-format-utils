var dbUtils = require('../index');

console.log("Expect '1','2','3','4'");
var arr = [1, 2, 3, 4];
console.log(dbUtils.arrayToSQLList(arr));
console.log('-------');

console.log("Expect '1','2','3','4'");
var list = '1,2,3,4';
console.log(dbUtils.listToSQLList(list));
console.log('-------');

console.log("Expect current dtm, e.g. 2016-03-19 08:45:27");
console.log(dbUtils.formatDateForSQL(new Date()));
console.log('-------');

console.log("Expect \"She's got her mother's eyes.\"");
console.log(dbUtils.escapeSingleQuotes("She's got her mother's eyes."));
