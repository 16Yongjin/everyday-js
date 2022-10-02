const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});

// 예시
pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }
