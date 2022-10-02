const initialize2DArray = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));

// 예시
initialize2DArray(2, 2, 0); // [[0, 0], [0, 0]]
