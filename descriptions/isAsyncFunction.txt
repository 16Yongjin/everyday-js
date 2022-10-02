Checks if the given argument is an `async` function.

- Use `Object.prototype.toString()` and `Function.prototype.call()` and check if the result is `'[object AsyncFunction]'`.