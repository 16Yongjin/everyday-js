const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// 예시
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
