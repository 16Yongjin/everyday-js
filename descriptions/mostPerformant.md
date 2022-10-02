Returns the index of the function in an array of functions which executed the fastest.

- Use `Array.prototype.map()` to generate an array where each value is the total time taken to execute the function after `iterations` times.
- Use the difference in `performance.now()` values before and after to get the total time in milliseconds to a high degree of accuracy.
- Use `Math.min()` to find the minimum execution time, and return the index of that shortest time which corresponds to the index of the most performant function.
- Omit the second argument, `iterations`, to use a default of `10000` iterations.
- The more iterations, the more reliable the result but the longer it will take.