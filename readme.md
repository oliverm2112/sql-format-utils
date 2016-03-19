# sql-format-utils

Utility functions that manipulate strings and dates for use with SQL database interactions.

## Install
```
npm install sql-format-utils


// Save to package.json
npm install --save sql-format-utils
```

## Instantiate

```JavaScript
var dbUtils = require('sql-format-utils');
```

## Examples

1. Return a list with each array element in single quotes; for SQL IN statements.
	```JavaScript
	var arr = [1, 2, 3, 4];
	console.log(dbUtils.arrayToSQLList(arr));
	// "'1', '2', '3', '4'"
	```

2. Return a list with each list element in single quotes; for SQL IN statements.
	```JavaScript
	var list = '1,2,3,4';
	console.log(dbUtils.listToSQLList(list));
	// "'1', '2', '3', '4'"
	```

3. Return a string representation of a given date, formatted for SQL insertion ('yyyy-mm-dd HH:MM:ss').
	```JavaScript
	console.log(dbUtils.formatDateForSQL(new Date()));
	// '2020-01-02 03:04:05'
	```

4. Return a string with all single quotes JavaScript-escaped.
	```JavaScript
	console.log(dbUtils.escapeSingleQuotes("She's got her mother's eyes."));
	// "She\'s got her mother\'s eyes."
	```
