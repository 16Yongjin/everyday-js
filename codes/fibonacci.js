const fibonacci = n =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );

// 예시
fibonacci(6); // [0, 1, 1, 2, 3, 5]
