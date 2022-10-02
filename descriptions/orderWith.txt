Sorts an array of objects, ordered by a property, based on the array of orders provided.

- Use `Array.prototype.reduce()` to create an object from the `order` array with the values as keys and their original index as the value.
- Use `Array.prototype.sort()` to sort the given array, skipping elements for which `prop` is empty or not in the `order` array.