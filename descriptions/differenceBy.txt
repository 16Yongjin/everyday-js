Returns the difference between two arrays, after applying the provided function to each array element of both.

- Create a `Set` by applying `fn` to each element in `b`.
- Use `Array.prototype.map()` to apply `fn` to each element in `a`.
- Use `Array.prototype.filter()` in combination with `fn` on `a` to only keep values not contained in `b`, using `Set.prototype.has()`.