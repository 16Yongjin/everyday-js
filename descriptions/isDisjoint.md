Checks if the two iterables are disjointed (have no common values).

- Use the `Set` constructor to create a new `Set` object from each iterable.
- Use `Array.prototype.every()` and `Set.prototype.has()` to check that the two iterables have no common values.