Converts a date to extended ISO format (ISO 8601), including timezone offset.

- Use `Date.prototype.getTimezoneOffset()` to get the timezone offset and reverse it. Store its sign in `diff`.
- Define a helper function, `pad()`, that normalizes any passed number to an integer using `Math.floor()` and `Math.abs()` and pads it to `2` digits, using `String.prototype.padStart()`.
- Use `pad()` and the built-in methods in the `Date` prototype to build the ISO 8601 string with timezone offset.