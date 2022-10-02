Checks if the given argument is a duplex (readable and writable) stream.

- Check if the value is different from `null`.
- Use `typeof` to check if a value is of type `object` and the `pipe` property is of type `function`.
- Additionally check if the `typeof` the `_read`, `_write` and `_readableState`, `_writableState` properties are `function` and `object` respectively.