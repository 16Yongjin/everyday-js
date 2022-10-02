const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));

// 예시
var rearged = rearg(
  function(a, b, c) {
    return [a, b, c];
  },
  [2, 0, 1]
);
rearged('b', 'c', 'a'); // ['a', 'b', 'c']
