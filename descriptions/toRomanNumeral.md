Converts an integer to its roman numeral representation.
Accepts value between `1` and `3999` (both inclusive).

- Create a lookup table containing 2-value arrays in the form of (roman value, integer).
- Use `Array.prototype.reduce()` to loop over the values in `lookup` and repeatedly divide `num` by the value.
- Use `String.prototype.repeat()` to add the roman numeral representation to the accumulator.