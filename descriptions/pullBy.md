Mutates the original array to filter out the values specified, based on a given iterator function.

- Check if the last argument provided is a function.
- Use `Array.prototype.map()` to apply the iterator function `fn` to all array elements.
- Use `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.
- Set `Array.prototype.length` to mutate the passed in an array by resetting its length to `0`.
- Use `Array.prototype.push()` to re-populate it with only the pulled values.