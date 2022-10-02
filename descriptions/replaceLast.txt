Replaces the last occurence of a pattern in a string.

- Use `typeof` to determine if `pattern` is a string or a regular expression.
- If the `pattern` is a string, use it as the `match`.
- Otherwise, use the `RegeExp` constructor to create a new regular expression using the `RegExp.prototype.source` of the `pattern` and adding the `'g'` flag to it. Use `String.prototype.match()` and `Array.prototype.slice()` to get the last match, if any.
- Use `String.prototype.lastIndexOf()` to find the last occurence of the match in the string.
- If a match is found, use `String.prototype.slice()` and a template literal to replace the matching substring with the given `replacement`.
- If no match is found, return the original string.