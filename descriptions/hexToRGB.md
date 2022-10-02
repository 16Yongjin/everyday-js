Converts a color code to an `rgb()` or `rgba()` string if alpha value is provided.

- Use bitwise right-shift operator and mask bits with `&` (and) operator to convert a hexadecimal color code (with or without prefixed with `#`) to a string with the RGB values.
- If it's 3-digit color code, first convert to 6-digit version.
- If an alpha value is provided alongside 6-digit hex, give `rgba()` string in return.