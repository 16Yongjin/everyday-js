const initializeArrayWithValues = (n, val = 0) =>
  Array.from({ length: n }).fill(val);

// 예시
initializeArrayWithValues(5, 2); // [2, 2, 2, 2, 2]
