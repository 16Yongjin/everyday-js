const powerset = arr =>
  arr.reduce((a, v) => a.concat(a.map(r => r.concat(v))), [[]]);

// 예시
powerset([1, 2]); // [[], [1], [2], [1, 2]]
