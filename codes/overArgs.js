const overArgs = (fn, transforms) =>
  (...args) => fn(...args.map((val, i) => transforms[i](val)));

// 예시
const square = n => n * n;
const double = n => n * 2;
const fn = overArgs((x, y) => [x, y], [square, double]);
fn(9, 3); // [81, 6]
