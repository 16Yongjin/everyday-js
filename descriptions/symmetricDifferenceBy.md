Returns the symmetric difference between two arrays, after applying the provided function to each array element of both.

- Create a `Set` from each array to get the unique values of each one after applying `fn` to them.
- Use `Array.prototype.filter()` on each of them to only keep values not contained in the other.