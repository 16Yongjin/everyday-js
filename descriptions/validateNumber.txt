Checks if the given value is a number.

- Use `parseFloat()` to try to convert `n` to a number.
- Use `Number.isNaN()` and logical not (`!`) operator to check if `num` is a number.
- Use `Number.isFinite()` to check if `num` is finite.
- Use `Number()` and the loose equality operator (`==`) to check if the coercion holds.