Returns the symmetric difference between two arrays, without filtering out duplicate values.

- Create a `Set` from each array to get the unique values of each one.
- Use `Array.prototype.filter()` on each of them to only keep values not contained in the other.