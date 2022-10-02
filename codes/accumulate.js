const accumulate = (...nums) =>
  nums.reduce((acc, n) => [...acc, n + (acc.slice(-1)[0] || 0)], []);

// 예시
accumulate(1, 2, 3, 4); // [1, 3, 6, 10]
accumulate(...[1, 2, 3, 4]); // [1, 3, 6, 10]
