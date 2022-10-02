const drop = (arr, n = 1) => arr.slice(n);

// 예시
drop([1, 2, 3]); // [2, 3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []
