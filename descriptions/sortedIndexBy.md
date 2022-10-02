Finds the lowest index at which a value should be inserted into an array in order to maintain its sorting order, based on the provided iterator function.

- Loosely check if the array is sorted in descending order.
- Use `Array.prototype.findIndex()` to find the appropriate index where the element should be inserted, based on the iterator function `fn`.