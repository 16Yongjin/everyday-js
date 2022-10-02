const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

// 예시
var output = '';
times(5, i => (output += i));
console.log(output); // 01234
