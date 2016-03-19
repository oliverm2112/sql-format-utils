var dbUtils = require('../index');

console.log("Expect '1','2','3','4' from array");
var arr = [1, 2, 3, 4];
console.log(dbUtils.toSQLList(arr));
console.log('-------');

console.log("Expect '1','2','3','4' from comma-delimited string");
var list = '1,2,3,4';
console.log(dbUtils.toSQLList(list));
console.log('-------');

console.log("Expect undefined from object");
var obj = {test : 123};
console.log(dbUtils.toSQLList(obj));
console.log('-------');

console.log("Expect undefined from null");
console.log(dbUtils.toSQLList());
console.log('-------');

console.log("Expect current dtm, e.g. 2016-03-19 08:45:27");
console.log(dbUtils.formatDateForSQL(new Date()));
console.log('-------');

console.log("Expect \"She\\'s got her mother\\'s eyes.\"");
console.log(dbUtils.escapeSingleQuotes("She's got her mother's eyes."));
console.log('-------');

console.log("Expect \"She''s got her mother''s eyes.\"");
console.log(dbUtils.escapeSingleQuotes("She's got her mother's eyes.", "'"));
console.log('-------');
