const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

// 예시
deepFlatten([1, [2], [[3], 4], 5]); // [1, 2, 3, 4, 5]
