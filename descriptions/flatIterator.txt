Creates a generator that iterates over an iterable, flattening nested iterables.

- Use recursion.
- Use a `for...of` loop to iterate over the values of the given iterable.
- Use `Symbol.iterator` to check if each value is an iterable. If it is, use the `yield*` expression to recursively delegate to the same generator function. Otherwise, `yield` the current value.