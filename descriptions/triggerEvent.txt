Triggers a specific event on a given element, optionally passing custom data.

- Use the `CustomEvent` constructor to create an event from the specified `eventType` and details.
- Use `EventTarget.dispatchEvent()` to trigger the newly created event on the given element.
- Omit the third argument, `detail`, if you do not want to pass custom data to the triggered event.