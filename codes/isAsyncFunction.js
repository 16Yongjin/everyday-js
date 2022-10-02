const isAsyncFunction = val =>
  Object.prototype.toString.call(val) === '[object AsyncFunction]';

// 예시
isAsyncFunction(function() {}); // false
isAsyncFunction(async function() {}); // true
