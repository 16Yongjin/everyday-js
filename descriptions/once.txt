Ensures a function is called only once.

- Utilizing a closure, use a flag, `called`, and set it to `true` once the function is called for the first time, preventing it from being called again.
- In order to allow the function to have its `this` context changed (such as in an event listener), the `function` keyword must be used, and the supplied function must have the context applied.
- Allow the function to be supplied with an arbitrary number of arguments using the rest/spread (`...`) operator.