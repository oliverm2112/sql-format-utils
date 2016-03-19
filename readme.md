# sql-format-utils
A Node.js module to manipulate strings and dates for use with SQL database interactions.

## Functions

```JavaScript
arrayToSQLList(arr)
```
Returns a list with each element in single quotes; for SQL IN statements.

```JavaScript
listToSQLList(list)
```
Returns a list with each element in single quotes; for SQL IN statements.

```JavaScript
formatDateForSQL(date)
```
Returns a string formatted for SQL insertion ('yyyy-mm-dd HH:MM:ss').

```JavaScript
escapeSingleQuotes(string)
```
Returns a string with all single quotes escaped.
