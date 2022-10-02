Groups the given data into `k` clusters, using the [k-means clustering](https://en.wikipedia.org/wiki/K-means_clustering) algorithm.

- Use `Array.from()` and `Array.prototype.slice()` to initialize appropriate variables for the cluster `centroids`, `distances` and `classes`.
- Use a `while` loop to repeat the assignment and update steps as long as there are changes in the previous iteration, as indicated by `itr`.
- Calculate the euclidean distance between each data point and centroid using `Math.hypot()`, `Object.keys()` and `Array.prototype.map()`.
- Use `Array.prototype.indexOf()` and `Math.min()` to find the closest centroid.
- Use `Array.from()` and `Array.prototype.reduce()`, as well as `parseFloat()` and `Number.prototype.toFixed()` to calculate the new centroids.