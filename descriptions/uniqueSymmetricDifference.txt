Returns the unique symmetric difference between two arrays, not containing duplicate values from either array.

- Use `Array.prototype.filter()` and `Array.prototype.includes()` on each array to remove values contained in the other.
- Create a `Set` from the results, removing duplicate values.