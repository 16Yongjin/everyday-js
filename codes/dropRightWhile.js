const dropRightWhile = (arr, func) => {
  let rightIndex = arr.length;
  while (rightIndex-- && !func(arr[rightIndex]));
  return arr.slice(0, rightIndex + 1);
};

// 예시
dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
