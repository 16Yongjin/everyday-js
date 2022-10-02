const negate = func => (...args) => !func(...args);

// 예시
[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
