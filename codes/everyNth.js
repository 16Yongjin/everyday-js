const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

// 예시
everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]
