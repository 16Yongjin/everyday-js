Makes a `GET` request to the passed URL.

- Use the `XMLHttpRequest` web API to make a `GET` request to the given `url`.
- Handle the `onload` event, by calling the given `callback` the `responseText`.
- Handle the `onerror` event, by running the provided `err` function.
- Omit the third argument, `err`, to log errors to the console's `error` stream by default.