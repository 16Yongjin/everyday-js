Returns the string representation of the last date in the given date's month.

- Use `Date.prototype.getFullYear()`, `Date.prototype.getMonth()` to get the current year and month from the given date.
- Use the `Date` constructor to create a new date with the given year and month incremented by `1`, and the day set to `0` (last day of previous month).
- Omit the argument, `date`, to use the current date by default.