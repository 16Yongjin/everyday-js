Finds the last `n` elements for which the provided function returns a truthy value.

- Use a `for` loop to execute the provided `matcher` for each element of `arr`.
- Use `Array.prototype.unshift()` to prepend elements to the results array and return them if its `length` is equal to `n`.