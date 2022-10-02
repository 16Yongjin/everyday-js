Runs a function in a separate thread by using a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), allowing long running functions to not block the UI.

- Create a `Worker` using a `Blob` object URL, the contents of which should be the stringified version of the supplied function.
- Immediately post the return value of calling the function back.
- Return a `Promise`, listening for `onmessage` and `onerror` events and resolving the data posted back from the worker, or throwing an error.