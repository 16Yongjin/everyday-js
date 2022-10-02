Makes a `PUT` request to the passed URL.

- Use `XMLHttpRequest` web api to make a `PUT` request to the given `url`.
- Set the value of an `HTTP` request header with `setRequestHeader` method.
- Handle the `onload` event, by running the provided `callback` function.
- Handle the `onerror` event, by running the provided `err` function.
- Omit the last argument, `err` to log the request to the console's error stream by default.