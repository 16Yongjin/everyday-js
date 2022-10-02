const vectorDistance = (x, y) =>
  Math.sqrt(x.reduce((acc, val, i) => acc + Math.pow(val - y[i], 2), 0));

// 예시
vectorDistance([10, 0, 5], [20, 0, 10]); // 11.180339887498949
