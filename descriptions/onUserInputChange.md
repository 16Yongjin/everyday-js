Runs the callback whenever the user input type changes (`mouse` or `touch`).

- Use two event listeners.
- Assume `mouse` input initially and bind a `'touchstart'` event listener to the document.
- On `'touchstart'`, add a `'mousemove'` event listener to listen for two consecutive `'mousemove'` events firing within 20ms, using `performance.now()`.
- Run the callback with the input type as an argument in either of these situations.