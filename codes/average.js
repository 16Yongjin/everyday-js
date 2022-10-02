const average = (...nums) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;

// 예시
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
