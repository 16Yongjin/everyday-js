const findLastN = (arr, matcher, n = 1) => {
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const el = arr[i];
    const match = matcher(el, i, arr);
    if (match) res.unshift(el);
    if (res.length === n) return res;
  }
  return res;
};

// 예시
findLastN([1, 2, 4, 6], n => n % 2 === 0, 2); // [4, 6]
findLastN([1, 2, 4, 6], n => n % 2 === 0, 5); // [2, 4, 6]
