Creates a generator, that keeps producing new values until the given condition is met.

- Initialize the current `val` using the `seed` value.
- Use a `while` loop to iterate while the `condition` function called with the current `val` returns `false`.
- Use `yield` to return the current `val` and optionally receive a new seed value, `nextSeed`.
- Use the `next` function to calculate the next value from the current `val` and the `nextSeed`.