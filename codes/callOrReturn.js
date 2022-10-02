const callOrReturn = (fn, ...args) =>
  typeof fn === 'function' ? fn(...args) : fn;

// 예시
callOrReturn(x => x + 1, 1); // 2
callOrReturn(1, 1); // 1
