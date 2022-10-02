Returns every element that exists in any of the two arrays at least once, after applying the provided function to each array element of both.

- Create a `Set` by applying all `fn` to all values of `a`.
- Create a `Set` from `a` and all elements in `b` whose value, after applying `fn` does not match a value in the previously created set.
- Return the last set converted to an array.