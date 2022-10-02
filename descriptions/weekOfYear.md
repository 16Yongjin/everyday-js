Returns the zero-indexed week of the year that a date corresponds to.

- Use the `Date` constructor and `Date.prototype.getFullYear()` to get the first day of the year as a `Date` object.
- Use `Date.prototype.setDate()`, `Date.prototype.getDate()` and `Date.prototype.getDay()` along with the modulo (`%`) operator to get the first Monday of the year.
- Subtract the first Monday of the year from the given `date` and divide with the number of milliseconds in a week.
- Use `Math.round()` to get the zero-indexed week of the year corresponding to the given `date`.
- `-0` is returned if the given `date` is before the first Monday of the year.