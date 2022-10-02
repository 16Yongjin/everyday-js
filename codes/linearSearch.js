const linearSearch = (arr, item) => {
  for (const i in arr) {
    if (arr[i] === item) return +i;
  }
  return -1;
};

// 예시
linearSearch([2, 9, 9], 9); // 1
linearSearch([2, 9, 9], 7); // -1
