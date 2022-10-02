Finds the first `n` elements for which the provided function returns a truthy value.

- Use a `for...in` loop to execute the provided `matcher` for each element of `arr`.
- Use `Array.prototype.push()` to append elements to the results array and return them if its `length` is equal to `n`.