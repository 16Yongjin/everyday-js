const clampNumber = (num, a, b) =>
  Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

// 예시
clampNumber(2, 3, 5); // 3
clampNumber(1, -1, -5); // -1
