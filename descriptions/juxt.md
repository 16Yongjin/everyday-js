Takes several functions as argument and returns a function that is the juxtaposition of those functions.

- Use `Array.prototype.map()` to return a `fn` that can take a variable number of `args`.
- When `fn` is called, return an array containing the result of applying each `fn` to the `args`.