Classifies a data point relative to a labelled data set, using the [k-nearest neighbors](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm) algorithm.

- Use `Array.prototype.map()` to map the `data` to objects. Each object contains the euclidean distance of the element from `point`, calculated using `Math.hypot()`, `Object.keys()` and its `label`.
- Use `Array.prototype.sort()` and `Array.prototype.slice()` to get the `k` nearest neighbors of `point`.
- Use `Array.prototype.reduce()` in combination with `Object.keys()` and `Array.prototype.indexOf()` to find the most frequent `label` among them.