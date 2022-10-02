const filterNonUnique = arr =>
  [...new Set(arr)].filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

// 예시
filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
