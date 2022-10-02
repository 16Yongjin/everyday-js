Creates a throttled function that only invokes the provided function at most once per every `wait` milliseconds

- Use `setTimeout()` and `clearTimeout()` to throttle the given method, `fn`.
- Use `Function.prototype.apply()` to apply the `this` context to the function and provide the necessary `arguments`.
- Use `Date.now()` to keep track of the last time the throttled function was invoked.
- Use a variable, `inThrottle`, to prevent a race condition between the first execution of `fn` and the next loop.
- Omit the second argument, `wait`, to set the timeout at a default of `0` ms.