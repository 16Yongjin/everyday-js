const union = (a, b) => Array.from(new Set([...a, ...b]));

// 예시
union([1, 2, 3], [4, 3, 2]); // [1, 2, 3, 4]
