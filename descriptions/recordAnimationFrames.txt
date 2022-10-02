Invokes the provided callback on each animation frame.

- Use recursion.
- Provided that `running` is `true`, continue invoking `Window.requestAnimationFrame()` which invokes the provided callback.
- Return an object with two methods `start` and `stop` to allow manual control of the recording.
- Omit the second argument, `autoStart`, to implicitly call `start` when the function is invoked.