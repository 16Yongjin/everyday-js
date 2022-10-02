Finds the highest index at which a value should be inserted into an array in order to maintain its sort order.

- Loosely check if the array is sorted in descending order.
- Use `Array.prototype.reverse()` and `Array.prototype.findIndex()` to find the appropriate last index where the element should be inserted.