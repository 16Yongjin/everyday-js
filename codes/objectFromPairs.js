const objectFromPairs = arr =>
  arr.reduce((a, [key, val]) => ((a[key] = val), a), {});

// 예시
objectFromPairs([['a', 1], ['b', 2]]); // {a: 1, b: 2}
