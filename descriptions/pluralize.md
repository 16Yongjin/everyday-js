Returns the singular or plural form of the word based on the input number, using an optional dictionary if supplied.

- Use a closure to define a function that pluralizes the given `word` based on the value of `num`.
- If `num` is either `-1` or `1`, return the singular form of the word.
- If `num` is any other number, return the `plural` form.
- Omit the third argument, `plural`, to use the default of the singular word + `s`, or supply a custom pluralized `word` when necessary.
- If the first argument is an `object`, return a function which can use the supplied dictionary to resolve the correct plural form of the word.