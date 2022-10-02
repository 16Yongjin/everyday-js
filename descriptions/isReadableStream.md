Checks if the given argument is a readable stream.

- Check if the value is different from `null`.
- Use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`.
- Additionally check if the `typeof` the `_read` and `_readableState` properties are `function` and `object` respectively.