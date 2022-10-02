const isGeneratorFunction = val =>
  Object.prototype.toString.call(val) === '[object GeneratorFunction]';

// 예시
isGeneratorFunction(function() {}); // false
isGeneratorFunction(function*() {}); // true
