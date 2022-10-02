Creates a pub/sub ([publish–subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)) event hub with `emit`, `on`, and `off` methods.

- Use `Object.create()` with an argument of `null` to create an empty `hub` object that does not inherit properties from `Object.prototype`.
- For `emit`, resolve the array of handlers based on the `event` argument and then run each one with `Array.prototype.forEach()` by passing in the data as an argument.
- For `on`, create an array for the event if it does not yet exist, then use `Array.prototype.push()` to add the handler
- to the array.
- For `off`, use `Array.prototype.findIndex()` to find the index of the handler in the event array and remove it using `Array.prototype.splice()`.