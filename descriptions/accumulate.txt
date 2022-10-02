Creates an array of partial sums.

- Use `Array.prototype.reduce()`, initialized with an empty array accumulator to iterate over `nums`.
- Use `Array.prototype.slice()` to get the previous partial sum or `0` and add the current element to it.
- Use the spread operator (`...`) to add the new partial sum to the accumulator array containing the previous sums.