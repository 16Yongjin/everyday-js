Counts the weekdays between two dates.

- Use `Array.from()` to construct an array with `length` equal to the number of days between `startDate` and `endDate`.
- Use `Array.prototype.reduce()` to iterate over the array, checking if each date is a weekday and incrementing `count`.
- Update `startDate` with the next day each loop using `Date.prototype.getDate()` and `Date.prototype.setDate()` to advance it by one day.
- **NOTE:** Does not take official holidays into account.