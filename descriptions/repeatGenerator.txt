Creates a generator, repeating the given value indefinitely.

- Use a non-terminating `while` loop, that will `yield` a value every time `Generator.prototype.next()` is called.
- Use the return value of the `yield` statement to update the returned value if the passed value is not `undefined`.