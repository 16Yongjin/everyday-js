const forEachRight = (arr, callback) =>
  arr
    .slice()
    .reverse()
    .forEach(callback);

// 예시
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
