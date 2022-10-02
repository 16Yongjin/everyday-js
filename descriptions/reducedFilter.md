Filters an array of objects based on a condition while also filtering out unspecified keys.

- Use `Array.prototype.filter()` to filter the array based on the predicate `fn` so that it returns the objects for which the condition returned a truthy value.
- On the filtered array, use `Array.prototype.map()` to return the new object.
- Use `Array.prototype.reduce()` to filter out the keys which were not supplied as the `keys` argument.