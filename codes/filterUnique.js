const filterUnique = arr =>
  [...new Set(arr)].filter(i => arr.indexOf(i) !== arr.lastIndexOf(i));

// 예시
filterUnique([1, 2, 2, 3, 4, 4, 5]); // [2, 4]
