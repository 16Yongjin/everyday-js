const generateItems = (n, fn) => Array.from({ length: n }, (_, i) => fn(i));

// 예시
generateItems(10, Math.random);
// [0.21, 0.08, 0.40, 0.96, 0.96, 0.24, 0.19, 0.96, 0.42, 0.70]
