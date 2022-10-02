Makes a `POST` request to the passed URL.

- Use the `XMLHttpRequest` web API to make a `POST` request to the given `url`.
- Set the value of an `HTTP` request header with `setRequestHeader` method.
- Handle the `onload` event, by calling the given `callback` the `responseText`.
- Handle the `onerror` event, by running the provided `err` function.
- Omit the fourth argument, `err`, to log errors to the console's `error` stream by default.