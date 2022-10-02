const haveSameContents = (a, b) => {
  for (const v of new Set([...a, ...b]))
    if (a.filter(e => e === v).length !== b.filter(e => e === v).length)
      return false;
  return true;
};

// 예시
haveSameContents([1, 2, 4], [2, 4, 1]); // true
