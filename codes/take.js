const take = (arr, n = 1) => arr.slice(0, n);

// 예시
take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
