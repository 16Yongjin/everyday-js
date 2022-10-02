Makes a `DELETE` request to the passed URL.

- Use the `XMLHttpRequest` web API to make a `DELETE` request to the given `url`.
- Handle the `onload` event, by running the provided `callback` function.
- Handle the `onerror` event, by running the provided `err` function.
- Omit the third argument, `err` to log the request to the console's error stream by default.