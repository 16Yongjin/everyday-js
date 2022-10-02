Adds an event listener to an element with the ability to use event delegation.

- Use `EventTarget.addEventListener()` to add an event listener to an element.
- If there is a `target` property supplied to the options object, ensure the event target matches the target specified and then invoke the callback by supplying the correct `this` context.
- Omit `opts` to default to non-delegation behavior and event bubbling.
- Returns a reference to the custom delegator function, in order to be possible to use with [`off`](/js/s/off).