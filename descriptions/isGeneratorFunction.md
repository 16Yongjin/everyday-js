Checks if the given argument is a generator function.

- Use `Object.prototype.toString()` and `Function.prototype.call()` and check if the result is `'[object GeneratorFunction]'`.