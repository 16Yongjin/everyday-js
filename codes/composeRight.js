const composeRight = (...fns) =>
  fns.reduce((f, g) => (...args) => g(f(...args)));

// 예시
const add = (x, y) => x + y;
const square = x => x * x;
const addAndSquare = composeRight(add, square);
addAndSquare(1, 2); // 9
