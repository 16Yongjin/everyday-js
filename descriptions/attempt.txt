Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.

- Use a `try...catch` block to return either the result of the function or an appropriate error.
- If the caught object is not an `Error`, use it to create a new `Error`.