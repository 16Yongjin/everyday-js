const generateWhile = function* (seed, condition, next) {
  let val = seed;
  let nextSeed = null;
  while (condition(val)) {
    nextSeed = yield val;
    val = next(val, nextSeed);
  }
  return val;
};

// 예시
[...generateWhile(1, v => v <= 5, v => ++v)]; // [1, 2, 3, 4, 5]
