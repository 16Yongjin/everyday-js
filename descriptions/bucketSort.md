Sorts an array of numbers, using the bucket sort algorithm.

- Use `Math.min()`, `Math.max()` and the spread operator (`...`) to find the minimum and maximum values of the given array.
- Use `Array.from()` and `Math.floor()` to create the appropriate number of `buckets` (empty arrays).
- Use `Array.prototype.forEach()` to populate each bucket with the appropriate elements from the array.
- Use `Array.prototype.reduce()`, the spread operator (`...`) and `Array.prototype.sort()` to sort each bucket and append it to the result.