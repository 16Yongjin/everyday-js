const includesAny = (arr, values) => values.some(v => arr.includes(v));

// 예시
includesAny([1, 2, 3, 4], [2, 9]); // true
includesAny([1, 2, 3, 4], [8, 9]); // false
