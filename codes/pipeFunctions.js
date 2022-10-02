const pipeFunctions = (...fns) =>
  fns.reduce((f, g) => (...args) => g(f(...args)));

// 예시
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = pipeFunctions(multiply, add5);
multiplyAndAdd5(5, 2); // 15
